export default [
  // 【列表】获取酒店列表
  // doc: http://192.168.2.18:3000/project/141/interface/api/9491
  {
    funcName: 'Hotel_query',
    method: 'GET',
    url: '/v1/One/Hotel/query',
  },

  // 【详情】获取酒店详情
  // doc: http://192.168.2.18:3000/project/141/interface/api/9497
  {
    funcName: 'Hotel_read',
    method: 'GET',
    url: '/v1/One/Hotel/read',
  },

  // 【列表】获取场馆列表
  // doc: http://192.168.2.18:3000/project/141/interface/api/9503
  {
    funcName: 'Venue_query',
    method: 'GET',
    url: '/v1/One/Venue/query',
  },

  // 【详情】获取场馆详情
  // doc: http://192.168.2.18:3000/project/141/interface/api/9509
  {
    funcName: 'Venue_read',
    method: 'GET',
    url: '/v1/One/Venue/read',
  },

  // 【列表】获取场地列表
  // doc: http://192.168.2.18:3000/project/141/interface/api/9515
  {
    funcName: 'VenuePlace_query',
    method: 'GET',
    url: '/v1/One/VenuePlace/query',
  },

  // 【详情】获取场地详情
  // doc: http://192.168.2.18:3000/project/141/interface/api/9521
  {
    funcName: 'VenuePlace_read',
    method: 'GET',
    url: '/v1/One/VenuePlace/read',
  },

  // 【列表】获取景区列表
  // doc: http://192.168.2.18:3000/project/141/interface/api/9527
  {
    funcName: 'Scenic_query',
    method: 'GET',
    url: '/v1/One/Scenic/query',
  },

  // 【查看】查看指定景区
  // doc: http://192.168.2.18:3000/project/141/interface/api/9533
  {
    funcName: 'Scenic_read',
    method: 'GET',
    url: '/v1/One/Scenic/read',
  },

  // 【列表】获取景点列表
  // doc: http://192.168.2.18:3000/project/141/interface/api/9539
  {
    funcName: 'ScenicSpot_query',
    method: 'GET',
    url: '/v1/One/ScenicSpot/query',
  },

  // 【查看】查看指定景点
  // doc: http://192.168.2.18:3000/project/141/interface/api/9545
  {
    funcName: 'ScenicSpot_read',
    method: 'GET',
    url: '/v1/One/ScenicSpot/read',
  },

  // 【列表】获取停车场列表
  // doc: http://192.168.2.18:3000/project/141/interface/api/9551
  {
    funcName: 'Parking_query',
    method: 'GET',
    url: '/v1/One/Parking/query',
  },

  // 【列表】获取餐厅列表
  // doc: http://192.168.2.18:3000/project/141/interface/api/9587
  {
    funcName: 'Restaurant_query',
    method: 'GET',
    url: '/v1/One/Restaurant/query',
  },

  // 【详情】获取餐厅详情
  // doc: http://192.168.2.18:3000/project/141/interface/api/9593
  {
    funcName: 'Restaurant_read',
    method: 'GET',
    url: '/v1/One/Restaurant/read',
  },
]
