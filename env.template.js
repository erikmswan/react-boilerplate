
module.exports = {
  ports: {
    clientDev: 9080,
    serverDev: 3000,
    serverProd: 80
  },
  // the value of `activeHosts` will be used to determine which group
  //   of service -> url maps to use, which is defined in `app.js`
  activeHosts: 'default',
};
