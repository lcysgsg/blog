export default [
  // 【评论-创建】创建评论接口
  // doc: http://192.168.2.18:3000/project/141/interface/api/8759
  {
    funcName: 'save',
    method: 'POST',
    url: '/v1/Comment/save',
  },

  // 【点赞-创建】点赞
  // doc: http://192.168.2.18:3000/project/141/interface/api/9407
  {
    funcName: 'save',
    method: 'POST',
    url: '/v1/Like/save',
  },

  // 【点赞-删除】取消点赞
  // doc: http://192.168.2.18:3000/project/141/interface/api/9413
  {
    funcName: 'del',
    method: 'POST',
    url: '/v1/Like/delete',
  },

  // 【评论-列表】获取评论列表
  // doc: http://192.168.2.18:3000/project/141/interface/api/9419
  {
    funcName: 'query',
    method: 'GET',
    url: '/v1/Comment/query',
  },

  // 【旅行社评论-列表】获取旅行社评论的列表
  // doc: http://192.168.2.18:3000/project/141/interface/api/9425
  {
    funcName: 'query',
    method: 'GET',
    url: '/v1/CompanyComment/query',
  },

  // 【认证】用户实名认证
  // doc: http://192.168.2.18:3000/project/141/interface/api/9605
  {
    funcName: 'auth',
    method: 'POST',
    url: '/v1/UserCertification/auth',
  },

  // 【评论-创建】创建旅行社评论接口
  // doc: http://192.168.2.18:3000/project/141/interface/api/9623
  {
    funcName: 'CompanyComment_save',
    method: 'POST',
    url: '/v1/biz/CompanyComment/save',
  },
]
