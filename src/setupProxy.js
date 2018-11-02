const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(proxy('/api', { target: 'http://192.168.3.105:8083/' }))
  app.use(proxy('/free', { target: 'http://192.168.3.99:13081' }))
}