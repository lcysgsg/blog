export default [
  // 【订单-取消】取消拼团订单
  // doc: http://192.168.2.18:3000/project/141/interface/api/9401
  {
    funcName: 'TourTuanOrder_cancel',
    method: 'POST',
    url: '/v1/Tour/TourTuanOrder/cancel',
  },

  // 【列表】获取需求列表
  // doc: http://192.168.2.18:3000/project/141/interface/api/8735
  {
    funcName: 'Demand_query',
    method: 'GET',
    url: '/v1/Tour/Demand/query',
  },

  // 【创建】创建拼团需求
  // doc: http://192.168.2.18:3000/project/141/interface/api/8765
  {
    funcName: 'Demand_save',
    method: 'POST',
    url: '/v1/Tour/Demand/save',
  },

  // 【详情】获取拼团需求详情
  // doc: http://192.168.2.18:3000/project/141/interface/api/8771
  {
    funcName: 'Demand_read',
    method: 'GET',
    url: '/v1/Tour/Demand/read',
  },

  // 【列表】拼团列表获取
  // doc: http://192.168.2.18:3000/project/141/interface/api/8873
  {
    funcName: 'Tuan_query',
    method: 'GET',
    url: '/v1/Tour/Tuan/query',
  },

  // 【详情】获取拼团详情
  // doc: http://192.168.2.18:3000/project/141/interface/api/8951
  {
    funcName: 'Tuan_read',
    method: 'GET',
    url: '/v1/Tour/Tuan/read',
  },

  // 【订单-确认】生成订单让用户确认
  // doc: http://192.168.2.18:3000/project/141/interface/api/9155
  {
    funcName: 'TourTuanOrder_confirm',
    method: 'POST',
    url: '/v1/Tour/TourTuanOrder/confirm',
  },

  // 【订单-下订单】生成订单让用户确认
  // doc: http://192.168.2.18:3000/project/141/interface/api/9161
  {
    funcName: 'TourTuanOrder_commit',
    method: 'POST',
    url: '/v1/Tour/TourTuanOrder/commit',
  },

  // 【订单-详情】查看订单详情
  // doc: http://192.168.2.18:3000/project/141/interface/api/9197
  {
    funcName: 'TourTuanOrder_detail',
    method: 'GET',
    url: '/v1/Tour/TourTuanOrder/detail',
  },

  // 【列表】拼团订单列表获取
  // doc: http://192.168.2.18:3000/project/141/interface/api/9341
  {
    funcName: 'TourTuanOrder_query',
    method: 'GET',
    url: '/v1/Tour/TourTuanOrder/query',
  },

  // 【列表】获取我的需求列表
  // doc: http://192.168.2.18:3000/project/141/interface/api/9209
  {
    funcName: 'Demand_query_mine',
    method: 'GET',
    url: '/v1/Tour/Demand/query_mine',
  },

  // 【订单-支付】支付拼团订单
  // doc: http://192.168.2.18:3000/project/141/interface/api/9347
  {
    funcName: 'TourTuanOrder_pay',
    method: 'POST',
    url: '/v1/Tour/TourTuanOrder/pay',
  },
]
