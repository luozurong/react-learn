const {createProxyMiddleware} = require('http-proxy-middleware')
module.exports = function(app){
  app.use(
    '/ajax',
    createProxyMiddleware({
      target: 'https://i.maoyan.com',
      changeOrigin: true,
      pathRewrite: {'^/ajax': ''}
    })
  )
}

// https://i.maoyan.com/ajax/comingList?ci=20&limit=10&movieIds=&token=&optimus_uuid=2F00C1F0A01C11EC9738816132C7196992316395125349DC97B261FB7F83B5C8&optimus_risk_level=71&optimus_code=10