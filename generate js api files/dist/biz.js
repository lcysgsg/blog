/**
 * 拼团部落(商家端) 拼团部落(商家端)
 * {@link http://192.168.2.18:3000/project/141/interface/api/cat_1253 | doc}
 */
import { http } from "@/utils/uni/http";

/**
 * 【列表】旅游产品列表获取
 * {@link http://192.168.2.18:3000/project/141/interface/api/9629 | doc}
 */
export function Tour_Product_query(data) {
  return http.request({
    method: "GET",
    url: "/v1/biz/Tour/Product/query",
    data,
  });
}

/**
 * 【详情】获取旅游产品详情
 * {@link http://192.168.2.18:3000/project/141/interface/api/9641 | doc}
 */
export function Tour_Product_read(data) {
  return http.request({
    method: "GET",
    url: "/v1/biz/Tour/Product/read",
    data,
  });
}

/**
 * 【列表】拼团订单列表获取
 * {@link http://192.168.2.18:3000/project/141/interface/api/9653 | doc}
 */
export function Tour_TourTuanOrder_queryForBiz(data) {
  return http.request({
    method: "GET",
    url: "/v1/biz/Tour/TourTuanOrder/queryForBiz",
    data,
  });
}

/**
 * 【发起拼团】发起拼团接口
 * {@link http://192.168.2.18:3000/project/141/interface/api/9683 | doc}
 */
export function Tour_Product_startTuan(data) {
  return http.request({
    method: "POST",
    url: "/v1/biz/Tour/Product/startTuan",
    data,
  });
}
