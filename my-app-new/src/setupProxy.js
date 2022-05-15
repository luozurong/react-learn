const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://i.maoyan.com',
      changeOrigin: true,
    })
  )
  app.use(
    '/rights',
    createProxyMiddleware({
      target: 'http://localhost',
      changeOrigin: true,
    })
  )
  // app.use(
  //   '/api',
  //   createProxyMiddleware({
  //     target: 'https://i.maoyan.com',
  //     changeOrigin: true,
  //   })
  // );
};