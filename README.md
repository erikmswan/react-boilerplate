# A credit card UI demo

- [Setup](#setup)
- [Usage](#usage)
- [Hot Reloading](#hot-reloading)
- [Routes](#routes)

## Setup

- `npm i` to install packages.
- Setup an `env.js` file from the `env.js.template`.
 - In `env.js`, you set the value of `activeHosts` to select which environment context to use.
 - The environment context, or the service -> url maps, are configured in `app.js`.
 
```javascript
// app.js
serviceHosts: {
  default: {
    apiHost: 'http://host:port'
  }
}

// ...

// env.js
activeHosts: 'default',
 ```

## Usage

### Development

For the development server, use `npm run start:dev`. This will build files to memory and host the app by default on `http://localhost:9080`.

### Production

#### (DEPRECATED SECTION)

To build the production verson of the app, use `npm run start` and serve the files from the `/dist` folder.

There is no production server as part of this repo. Because it uses a client-side router (CSR), the server should send all requests to `/index.html`. So in Express, it would look something like this:

```javascript
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'), function(err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});
```

## Hot Reloading

Routes are switched by dynamically loading components in the `App` parent component. This means that to maintain hot reloading, you have to wrap all of those top-level route components with the `hot` function from `react-hot-loader`.

```javascript
import { hot } from 'react-hot-loader';

const App from () => <div />;

export const hot(module)(App);
```

No need to wrap any other components, just the dynamically loaded ones serving as top-level route components.

## Routes

TBD