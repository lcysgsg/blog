export default [
  // 【列表】查询自己的投诉列表
  // doc: http://192.168.2.18:3000/project/141/interface/api/9611
  {
    funcName: 'query',
    method: 'GET',
    url: '/v1/Complain/query',
  },

  // 【创建】投诉
  // doc: http://192.168.2.18:3000/project/141/interface/api/9617
  {
    funcName: 'save',
    method: 'POST',
    url: '/v1/Complain/save',
  },

  // 【取消】取消投诉
  // doc: http://192.168.2.18:3000/project/141/interface/api/9665
  {
    funcName: 'cancel',
    method: 'POST',
    url: '/v1/Complain/cancel',
  },

  // 【详情】查看指定投诉的详情
  // doc: http://192.168.2.18:3000/project/141/interface/api/9671
  {
    funcName: 'read',
    method: 'GET',
    url: '/v1/Complain/read',
  },
]
