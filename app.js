
// This is for our non-environment-specific constants
module.exports = Object.freeze({
  // the objects in serviceHosts define what urls are used for each
  //  service name. Which object is used is determined
  //  by a git ignored `env.js` file you make with `env.template.js`.
  //  look for `activeHosts`
  serviceHosts: {
    default: {
      serviceHost1: 'http://localhost:8090',
      serviceHost2: 'http://localhost:8091'
    },
    production: {
      serviceHost1: 'http://localhost:8090',
      serviceHost2: 'http://localhost:8091'
    }
  },
  tesT: 'test',

  constants: {
    appTitle: 'React Boilerplate',
    storage: 'REDUX_HOT_RELOAD_STORAGE',

    // events
    setPlaceholderData: 'SET_PLACEHOLDER_DATA',
    clearPlaceholderData: 'CLEAR_PLACEHOLDER_DATA',
    setApiKey: 'SET_API_KEY',
  }
});
