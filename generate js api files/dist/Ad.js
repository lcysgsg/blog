/**
 * 广告 广告
 * {@link http://192.168.2.18:3000/project/141/interface/api/cat_1175 | doc}
 */
import { http } from "@/utils/uni/http";

/**
 * 【列表】获取广告列表
 * {@link http://192.168.2.18:3000/project/141/interface/api/9179 | doc}
 */
export function Ad_query(data) {
  return http.request({
    method: "GET",
    url: "/v1/Ad/query",
    data,
  });
}
