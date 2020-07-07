export default [
  // 微信、支付宝等三方账号授权登录接口
  // doc: http://192.168.2.18:3000/project/141/interface/api/9431
  {
    funcName: 'login3rd',
    method: 'POST',
    url: '/v1/api/login3rd',
  },

  // 获取短信验证码
  // doc: http://192.168.2.18:3000/project/141/interface/api/9437
  {
    funcName: 'send_verify_code',
    method: 'POST',
    url: '/v1/api/send_verify_code',
  },

  // 三方账号绑定手机号接口
  // doc: http://192.168.2.18:3000/project/141/interface/api/9443
  {
    funcName: 'bind_account',
    method: 'POST',
    url: '/v1/api/bind_account',
  },

  // token刷新接口
  // doc: http://192.168.2.18:3000/project/141/interface/api/9449
  {
    funcName: 'refresh_token',
    method: 'POST',
    url: '/v1/api/refresh_token',
  },

  // 后台用户登录小程序端
  // doc: http://192.168.2.18:3000/project/141/interface/api/9569
  {
    funcName: 'loginSystem',
    method: 'POST',
    url: '/v1/api/loginSystem',
  },
]
