export default [
  // 【列表】获取景区列表
  // doc: http://192.168.2.18:3000/project/141/interface/api/8981
  {
    funcName: 'Scenic_query',
    method: 'GET',
    url: '/v1/Explains/Scenic/query',
  },

  // 【查看】查看指定景区
  // doc: http://192.168.2.18:3000/project/141/interface/api/8987
  {
    funcName: 'Scenic_read',
    method: 'GET',
    url: '/v1/Explains/Scenic/read',
  },

  // 【列表】获取景点列表
  // doc: http://192.168.2.18:3000/project/141/interface/api/8999
  {
    funcName: 'ScenicSpot_query',
    method: 'GET',
    url: '/v1/Explains/ScenicSpot/query',
  },

  // 【查看】查看指定景点
  // doc: http://192.168.2.18:3000/project/141/interface/api/9005
  {
    funcName: 'ScenicSpot_read',
    method: 'GET',
    url: '/v1/Explains/ScenicSpot/read',
  },

  // 【列表】获取景点讲解音频列表
  // doc: http://192.168.2.18:3000/project/141/interface/api/9131
  {
    funcName: 'ScenicSpotVoice_query',
    method: 'GET',
    url: '/v1/Explains/ScenicSpotVoice/query',
  },

  // 【列表】获取我的讲解音频列表
  // doc: http://192.168.2.18:3000/project/141/interface/api/9137
  {
    funcName: 'ScenicSpotVoice_query_mine',
    method: 'GET',
    url: '/v1/Explains/ScenicSpotVoice/query_mine',
  },

  // 【查看】查看指定景点讲解音频
  // doc: http://192.168.2.18:3000/project/141/interface/api/9143
  {
    funcName: 'ScenicSpotVoice_read',
    method: 'GET',
    url: '/v1/Explains/ScenicSpotVoice/read',
  },

  // 【列表】获取首页banner广告列表
  // doc: http://192.168.2.18:3000/project/141/interface/api/9185
  {
    funcName: 'Scenic_get_banner_ad',
    method: 'GET',
    url: '/v1/Explains/Scenic/get_banner_ad',
  },

  // 【列表】获取景区的所有景点信息
  // doc: http://192.168.2.18:3000/project/141/interface/api/9485
  {
    funcName: 'Scenic_get_subordinate_info',
    method: 'GET',
    url: '/v1/Explains/Scenic/get_subordinate_info',
  },
]
