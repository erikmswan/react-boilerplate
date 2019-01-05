
// This is for our non-environment-specific constants
module.exports = Object.freeze({

  // the objects in serviceHosts define what urls are used for each
  //  service name. Which object is used is determined
  //  by a git ignored `env.js` file you make with `env.template.js`.
  //  look for `activeHosts`
  serviceHosts: {
    default: {
      apiHost: 'http://localhost:8090',
    }
  },

  constants: {
    appTitle: 'In Profundis.',
    storage: 'REDUX_HOT_RELOAD_STORAGE',

    // events
    setPlaceholder: 'SET_PLACEHOLDER',
    clearPlaceholder: 'CLEAR_PLACEHOLDER',
  }
});
