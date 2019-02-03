# React boilerplate

- [Setup](#setup)
- [Usage](#usage)
  - [Development](#development)
  - [Hot Reloading](#hot-reloading)
  - [Production](#production)
- [State](#state)
- [Routing](#routing)
- [Networking](#networking)
  - [Auth](#auth)
- [Styles](#styles)
- [Testing](#testing)
  - [Coverage Report](#coverage-report)
  - [Snapshots](#snapshots)

# Setup

- `npm i` to install packages.
- Setup an `env.js` file from the `env.js.template`.
 - In `env.js`, you set the value of `activeHosts` to select which environment context to use.
 - The environment context, or the service -> url maps, are configured in `app.js`.
 
```javascript
// app.js
serviceHosts: {
  default: {
    serviceHost1: 'http://host:port',
    serviceHost2: 'http://host:port'
  },
  production: {
    serviceHost1: 'http://host:port',
    serviceHost2: 'http://host:port'
  }
}

// ...

// env.js
activeHosts: 'production',
 ```

# Usage

## Development

For the development server, use `npm run dev`. This will build files to memory and host the app by default on `http://localhost:9080` using `webpack-dev-server`.

For the server, do `npm run server:dev`. This will build the server files and execute them, host on `http://localhost:3000` by default. There is no hot reloading for the server yet, so you will have to rebuild the files every time you make a change.

### Hot Reloading

Routes are switched by dynamically loading components in the `App` parent component. This means that to maintain hot reloading, you have to wrap all of those top-level route components with the `hot` function from `react-hot-loader`.

```javascript
import { hot } from 'react-hot-loader';

const Home from () => <div />;

export const hot(module)(Home);
```

No need to wrap any other components, just the dynamically loaded ones serving as top-level route components such as `src/routes/Home/Home` and `src/routes/NotFound/NotFound`.

## Production

To build the production verson of the app, use `npm run start`. This will build the production client and server assets and run the production server on port 80. Alternatively, if you've already built the assets, you can simply use `npm run server` to start the server.

# State

This repo uses Redux as its global data store. Redux utilizes three core components: reducers, selectors and actions.

* `reducers` manage a branch of the state tree, such as `state.auth` or `state.location`. They do this by accepting an action object which contains information about which part of the tree to change and what to change it with.
* `actions` generate the object that selects a case in a reducer. They always include a `type` key, which matches a switch case in a reducer, and sometimes a `payload` key, which contains information to add to state.
* `selectors` fetch the desired data from the state tree. This step is helpful in memoizing state lookups to make it faster. This repo uses `reselect` for selector memoization.

The pattern of the `state` directory tree is designed to make importing easier. Different branches of the state tree are kept under `modules`, and each module has up to three files: the aforementioned `reducer`, `selectors` and `actions`.

These files are exported from the `reducers`, `selectors` and `actions` files in `src/state`. The result of this is that you can import any of the selectors and actions by using something like this without having to remember which branch of the state tree they belong in:

```javascript
import { getLocationType } from 'state/selectors';
import { setPlaceholderData } from 'state/actions';
```

# Routing

This repo uses a client-side routing solution, or CSR, with the `redux-first-router` library. Based on redux state and the HTML5 history api, top-level components are switched to simulate 'routes'. You can find these top-level components in `src/routes`.

The route map is found at `src/routes/routesMap.js`. In this file, you can define what `thunks` (functions that return a promise) are automatically invoked when going to that route. For example, this could be useful to fetch data user data from the server when going to a 'settings' page.

NOTE: You can use the `composeThunks` function to chain multiple thunks together on a route. Please note that if one of those thunks reject a promise, it will not execute rest of the thunks in that chain.

In your application, you can change the route, such as in an event handler, by dispatching actions that change the route in redux. These actions can be found at the bottom of the routesMap, for example, `toHome`.

Because routing is handled by the client, it's important to remember that the server must redirect all traffic to root, like below. There is currently a server bundled with the repo that handles this, but it's still good to note.

```javascript
app.get('/*', (req, res) => {
  console.log(`GET ${req.headers.host}${req.url}`);
  res.sendFile(__dirname + '/public/index.html'), err => {
    if (err) res.status(500);
  };
});
```

# Networking

Network requests are made using the `client` found in `src/client`. You can import it like so:

```javascript
import client from 'client'
```

The `client` makes available all functions kept in the `dao` folder. These functions look like this:

```javascript
export const getPlaceholder = (
  { request, serviceHosts },
  limit = 30
) => request({
  path: `/v1/placeholder`,
  service: serviceHosts.serviceHost1,
  method: 'GET',
  auth: false,
  params: {
    limit
  }
});
```

Each of these functions is imported, and the first argument is injected by the `client` class to be the class context. In other words, it works like Python, where the first argument of these functions is `self` or `this`. Each one of these functions must also return a promise.

After importing the client in a component, it can be used like so:

```javascript
// App.js
// ...
import client from 'client';

export class App from React.Component {
  // ...
  get20MoreData = async () => {
    const { setData } = this.props;
    const limit = 20;
    const moreData = await client.getPlaceholder(20);
    
    // set data in redux
    setData(moreData);
    // maybe return it to this method caller
    return moreData;
  }
  // ...
}
```

## Auth

The client also supports adding api keys to certain routes. It looks for the api key in redux by default in the `auth` branch. Check the `src/client` file for more info.

# Styles

This repo uses `scss` for its styles. App-wide styles can be found in `src/styles`. The boilerplate includes a few related to animation and the `react-transition-group`, a base set of typography, a font, and some useful mixins.

All other component-level stylesheets are kept with the components themselves. They are usually imported at the top of the component like so:

```javascript
// App.js
import './App.scss'
import * as React from 'react';
// ...
```

In a component-level stylesheet, you can import global variables, mixins, keyframes etc. by putting this at the top:

```scss
@import 'globals.scss'
```

The `scss` loader will make those available. Add more to globals by importing it in `src/styles/_globals.scss`.

# Testing

This repo uses `jest` for testing. Use `npm run test` to run tests and prepare a coverage report.

You can also use `npm run jest:watch` to watch files for changes among other things.

## Coverage Report

The coverage report is an easy way to look at your code coverage. It's found in `./coverage/lcov-report/index.html`.

## Snapshots

Snapshots are a great way for Jest to save time. Snapshots cache the output of a test, and then compare future tests against that cached data. If there is any difference, it notifies you. Please note: it's important to remember to check the snapshots themselves to verify the output!

To update snapshots, use `npm run jest:update`.

