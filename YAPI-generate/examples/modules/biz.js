export default [
  // 【列表】旅游产品列表获取
  // doc: http://192.168.2.18:3000/project/141/interface/api/9629
  {
    funcName: 'Tour_Product_query',
    method: 'GET',
    url: '/v1/biz/Tour/Product/query',
  },

  // 【详情】获取旅游产品详情
  // doc: http://192.168.2.18:3000/project/141/interface/api/9641
  {
    funcName: 'Tour_Product_read',
    method: 'GET',
    url: '/v1/biz/Tour/Product/read',
  },

  // 【发起拼团】发起拼团接口
  // doc: http://192.168.2.18:3000/project/141/interface/api/9683
  {
    funcName: 'Tour_Product_startTuan',
    method: 'POST',
    url: '/v1/biz/Tour/Product/startTuan',
  },

  // 【列表】拼团列表获取
  // doc: http://192.168.2.18:3000/project/141/interface/api/9707
  {
    funcName: 'TourTuan_query',
    method: 'GET',
    url: '/v1/biz/TourTuan/query',
  },

  // 【详情】获取拼团详情
  // doc: http://192.168.2.18:3000/project/141/interface/api/9713
  {
    funcName: 'TourTuan_read',
    method: 'GET',
    url: '/v1/biz/TourTuan/read',
  },
]
