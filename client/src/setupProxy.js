/**
 * @proxy - this is an important file for proxy - package.json does not support the proxy property anymore as an object.
 */
const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    ['/api', '/auth/googleService'],
    createProxyMiddleware({
      target: 'http://localhost:9000'
    })
  );
};
