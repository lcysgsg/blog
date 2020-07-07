/**
 * 旅行社评论 旅行社评论
 * {@link http://192.168.2.18:3000/project/141/interface/api/cat_1247 | doc}
 */
import { http } from "@/utils/uni/http";

/**
 * 【旅行社评论-列表】获取旅行社评论的列表
 * {@link http://192.168.2.18:3000/project/141/interface/api/9425 | doc}
 */
export function CompanyComment_query(data) {
  return http.request({
    method: "GET",
    url: "/v1/CompanyComment/query",
    data,
  });
}
