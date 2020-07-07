/**
 * 一图一码 一图一码
 * {@link http://192.168.2.18:3000/project/141/interface/api/cat_1229 | doc}
 */
import { http } from "@/utils/uni/http";

/**
 * 【列表】获取酒店列表
 * {@link http://192.168.2.18:3000/project/141/interface/api/9491 | doc}
 */
export function Hotel_query(data) {
  return http.request({
    method: "GET",
    url: "/v1/One/Hotel/query",
    data,
  });
}

/**
 * 【详情】获取酒店详情
 * {@link http://192.168.2.18:3000/project/141/interface/api/9497 | doc}
 */
export function Hotel_read(data) {
  return http.request({
    method: "GET",
    url: "/v1/One/Hotel/read",
    data,
  });
}

/**
 * 【列表】获取场馆列表
 * {@link http://192.168.2.18:3000/project/141/interface/api/9503 | doc}
 */
export function Venue_query(data) {
  return http.request({
    method: "GET",
    url: "/v1/One/Venue/query",
    data,
  });
}

/**
 * 【详情】获取场馆详情
 * {@link http://192.168.2.18:3000/project/141/interface/api/9509 | doc}
 */
export function Venue_read(data) {
  return http.request({
    method: "GET",
    url: "/v1/One/Venue/read",
    data,
  });
}

/**
 * 【列表】获取场地列表
 * {@link http://192.168.2.18:3000/project/141/interface/api/9515 | doc}
 */
export function VenuePlace_query(data) {
  return http.request({
    method: "GET",
    url: "/v1/One/VenuePlace/query",
    data,
  });
}

/**
 * 【详情】获取场地详情
 * {@link http://192.168.2.18:3000/project/141/interface/api/9521 | doc}
 */
export function VenuePlace_read(data) {
  return http.request({
    method: "GET",
    url: "/v1/One/VenuePlace/read",
    data,
  });
}

/**
 * 【列表】获取景区列表
 * {@link http://192.168.2.18:3000/project/141/interface/api/9527 | doc}
 */
export function Scenic_query(data) {
  return http.request({
    method: "GET",
    url: "/v1/One/Scenic/query",
    data,
  });
}

/**
 * 【查看】查看指定景区
 * {@link http://192.168.2.18:3000/project/141/interface/api/9533 | doc}
 */
export function Scenic_read(data) {
  return http.request({
    method: "GET",
    url: "/v1/One/Scenic/read",
    data,
  });
}

/**
 * 【列表】获取景点列表
 * {@link http://192.168.2.18:3000/project/141/interface/api/9539 | doc}
 */
export function ScenicSpot_query(data) {
  return http.request({
    method: "GET",
    url: "/v1/One/ScenicSpot/query",
    data,
  });
}

/**
 * 【查看】查看指定景点
 * {@link http://192.168.2.18:3000/project/141/interface/api/9545 | doc}
 */
export function ScenicSpot_read(data) {
  return http.request({
    method: "GET",
    url: "/v1/One/ScenicSpot/read",
    data,
  });
}

/**
 * 【列表】获取停车场列表
 * {@link http://192.168.2.18:3000/project/141/interface/api/9551 | doc}
 */
export function Parking_query(data) {
  return http.request({
    method: "GET",
    url: "/v1/One/Parking/query",
    data,
  });
}

/**
 * 【列表】获取餐厅列表
 * {@link http://192.168.2.18:3000/project/141/interface/api/9587 | doc}
 */
export function Restaurant_query(data) {
  return http.request({
    method: "GET",
    url: "/v1/One/Restaurant/query",
    data,
  });
}

/**
 * 【详情】获取餐厅详情
 * {@link http://192.168.2.18:3000/project/141/interface/api/9593 | doc}
 */
export function Restaurant_read(data) {
  return http.request({
    method: "GET",
    url: "/v1/One/Restaurant/read",
    data,
  });
}
