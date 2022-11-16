const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/v1', {
      target: 'https://kvs8aj367f.execute-api.us-east-1.amazonaws.com', //server 1
      changeOrigin: true,

      headers: {
        Connection: 'keep-alive',
      },
    })
  ),
    app.use(
      createProxyMiddleware('/images', {
        target: 'http://image-server-1-2052612344.us-east-1.elb.amazonaws.com', //server 2
        changeOrigin: true,
        headers: {
          Connection: 'keep-alive',
        },
      })
    )
}
