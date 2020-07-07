/**
 * 拼团部落 拼团部落
 * {@link http://192.168.2.18:3000/project/141/interface/api/cat_1103 | doc}
 */
import { http } from "@/utils/uni/http";

/**
 * 【订单-取消】取消拼团订单
 * {@link http://192.168.2.18:3000/project/141/interface/api/9401 | doc}
 */
export function TourTuanOrder_cancel(data) {
  return http.request({
    method: "POST",
    url: "/v1/Tour/TourTuanOrder/cancel",
    data,
  });
}

/**
 * 【列表】获取需求列表
 * {@link http://192.168.2.18:3000/project/141/interface/api/8735 | doc}
 */
export function Demand_query(data) {
  return http.request({
    method: "GET",
    url: "/v1/Tour/Demand/query",
    data,
  });
}

/**
 * 【创建】创建拼团需求
 * {@link http://192.168.2.18:3000/project/141/interface/api/8765 | doc}
 */
export function Demand_save(data) {
  return http.request({
    method: "POST",
    url: "/v1/Tour/Demand/save",
    data,
  });
}

/**
 * 【详情】获取拼团需求详情
 * {@link http://192.168.2.18:3000/project/141/interface/api/8771 | doc}
 */
export function Demand_read(data) {
  return http.request({
    method: "GET",
    url: "/v1/Tour/Demand/read",
    data,
  });
}

/**
 * 【列表】拼团列表获取
 * {@link http://192.168.2.18:3000/project/141/interface/api/8873 | doc}
 */
export function Tuan_query(data) {
  return http.request({
    method: "GET",
    url: "/v1/Tour/Tuan/query",
    data,
  });
}

/**
 * 【详情】获取拼团详情
 * {@link http://192.168.2.18:3000/project/141/interface/api/8951 | doc}
 */
export function Tuan_read(data) {
  return http.request({
    method: "GET",
    url: "/v1/Tour/Tuan/read",
    data,
  });
}

/**
 * 【订单-确认】生成订单让用户确认
 * {@link http://192.168.2.18:3000/project/141/interface/api/9155 | doc}
 */
export function TourTuanOrder_confirm(data) {
  return http.request({
    method: "POST",
    url: "/v1/Tour/TourTuanOrder/confirm",
    data,
  });
}

/**
 * 【订单-下订单】生成订单让用户确认
 * {@link http://192.168.2.18:3000/project/141/interface/api/9161 | doc}
 */
export function TourTuanOrder_commit(data) {
  return http.request({
    method: "POST",
    url: "/v1/Tour/TourTuanOrder/commit",
    data,
  });
}

/**
 * 【订单-详情】查看订单详情
 * {@link http://192.168.2.18:3000/project/141/interface/api/9197 | doc}
 */
export function TourTuanOrder_detail(data) {
  return http.request({
    method: "GET",
    url: "/v1/Tour/TourTuanOrder/detail",
    data,
  });
}

/**
 * 【列表】拼团订单列表获取
 * {@link http://192.168.2.18:3000/project/141/interface/api/9341 | doc}
 */
export function TourTuanOrder_query(data) {
  return http.request({
    method: "GET",
    url: "/v1/Tour/TourTuanOrder/query",
    data,
  });
}

/**
 * 【列表】获取我的需求列表
 * {@link http://192.168.2.18:3000/project/141/interface/api/9209 | doc}
 */
export function Demand_query_mine(data) {
  return http.request({
    method: "GET",
    url: "/v1/Tour/Demand/query_mine",
    data,
  });
}

/**
 * 【订单-支付】支付拼团订单
 * {@link http://192.168.2.18:3000/project/141/interface/api/9347 | doc}
 */
export function TourTuanOrder_pay(data) {
  return http.request({
    method: "POST",
    url: "/v1/Tour/TourTuanOrder/pay",
    data,
  });
}
