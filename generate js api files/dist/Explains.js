/**
 * 人人讲解 人人讲解
 * {@link http://192.168.2.18:3000/project/141/interface/api/cat_1151 | doc}
 */
import { http } from "@/utils/uni/http";

/**
 * 【列表】获取景区列表
 * {@link http://192.168.2.18:3000/project/141/interface/api/8981 | doc}
 */
export function Scenic_query(data) {
  return http.request({
    method: "GET",
    url: "/v1/Explains/Scenic/query",
    data,
  });
}

/**
 * 【查看】查看指定景区
 * {@link http://192.168.2.18:3000/project/141/interface/api/8987 | doc}
 */
export function Scenic_read(data) {
  return http.request({
    method: "GET",
    url: "/v1/Explains/Scenic/read",
    data,
  });
}

/**
 * 【列表】获取景点列表
 * {@link http://192.168.2.18:3000/project/141/interface/api/8999 | doc}
 */
export function ScenicSpot_query(data) {
  return http.request({
    method: "GET",
    url: "/v1/Explains/ScenicSpot/query",
    data,
  });
}

/**
 * 【查看】查看指定景点
 * {@link http://192.168.2.18:3000/project/141/interface/api/9005 | doc}
 */
export function ScenicSpot_read(data) {
  return http.request({
    method: "GET",
    url: "/v1/Explains/ScenicSpot/read",
    data,
  });
}

/**
 * 【列表】获取景点讲解音频列表
 * {@link http://192.168.2.18:3000/project/141/interface/api/9131 | doc}
 */
export function ScenicSpotVoice_query(data) {
  return http.request({
    method: "GET",
    url: "/v1/Explains/ScenicSpotVoice/query",
    data,
  });
}

/**
 * 【列表】获取我的讲解音频列表
 * {@link http://192.168.2.18:3000/project/141/interface/api/9137 | doc}
 */
export function ScenicSpotVoice_query_mine(data) {
  return http.request({
    method: "GET",
    url: "/v1/Explains/ScenicSpotVoice/query_mine",
    data,
  });
}

/**
 * 【查看】查看指定景点讲解音频
 * {@link http://192.168.2.18:3000/project/141/interface/api/9143 | doc}
 */
export function ScenicSpotVoice_read(data) {
  return http.request({
    method: "GET",
    url: "/v1/Explains/ScenicSpotVoice/read",
    data,
  });
}

/**
 * 【列表】获取首页banner广告列表
 * {@link http://192.168.2.18:3000/project/141/interface/api/9185 | doc}
 */
export function Scenic_get_banner_ad(data) {
  return http.request({
    method: "GET",
    url: "/v1/Explains/Scenic/get_banner_ad",
    data,
  });
}

/**
 * 【列表】获取景区的所有景点信息
 * {@link http://192.168.2.18:3000/project/141/interface/api/9485 | doc}
 */
export function Scenic_get_subordinate_info(data) {
  return http.request({
    method: "GET",
    url: "/v1/Explains/Scenic/get_subordinate_info",
    data,
  });
}
