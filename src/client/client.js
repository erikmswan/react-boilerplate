import axios from 'axios';
import { getApiKey } from 'state/selectors';
import * as daos from './dao';
import { serviceHosts } from 'app';
import { store } from 'state';

export class Client {
  constructor(serviceHosts) {
    // we save our serviceHosts map object set in env.js
    this.serviceHosts = serviceHosts;

    // we import our daos and pass the class context as the first argument.
    //  so our daos will be like python where the first arg is always `self`
    for (let key in daos) {
      this[key] = (...args) => daos[key](this, ...args);
    }
  }

  request = ({ path, service, method, data, auth = true, ...options }) => (
    axios({
      url: service + path,
      method,
      data,
      ...this.addAuthData(auth),
      ...options,
    })
  )

  addAuthData = auth => auth
    ? this.addApiKey(getApiKey(store.getState()))
    : {}
  
  addApiKey = apiKey => ({
    headers: {
      'API-KEY-HEADER-NAME': apiKey
    }
  })
}

// add our hosts env
export default new Client(serviceHosts[process.env.activeHosts || 'default']);
