/**
 * 通用社交功能 通用社交功能
 * {@link http://192.168.2.18:3000/project/141/interface/api/cat_1211 | doc}
 */
import { http } from "@/utils/uni/http";

/**
 * 【评论-创建】创建评论接口
 * {@link http://192.168.2.18:3000/project/141/interface/api/8759 | doc}
 */
export function Comment_save(data) {
  return http.request({
    method: "POST",
    url: "/v1/Comment/save",
    data,
  });
}

/**
 * 【点赞-创建】点赞
 * {@link http://192.168.2.18:3000/project/141/interface/api/9407 | doc}
 */
export function Like_save(data) {
  return http.request({
    method: "POST",
    url: "/v1/Like/save",
    data,
  });
}

/**
 * 【点赞-删除】取消点赞
 * {@link http://192.168.2.18:3000/project/141/interface/api/9413 | doc}
 */
export function Like_delete(data) {
  return http.request({
    method: "POST",
    url: "/v1/Like/delete",
    data,
  });
}

/**
 * 【评论-列表】获取评论列表
 * {@link http://192.168.2.18:3000/project/141/interface/api/9419 | doc}
 */
export function Comment_query(data) {
  return http.request({
    method: "GET",
    url: "/v1/Comment/query",
    data,
  });
}

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

/**
 * 【认证】用户实名认证
 * {@link http://192.168.2.18:3000/project/141/interface/api/9605 | doc}
 */
export function UserCertification_auth(data) {
  return http.request({
    method: "POST",
    url: "/v1/UserCertification/auth",
    data,
  });
}

/**
 * 【评论-创建】创建旅行社评论接口
 * {@link http://192.168.2.18:3000/project/141/interface/api/9623 | doc}
 */
export function CompanyComment_save(data) {
  return http.request({
    method: "POST",
    url: "/v1/biz/CompanyComment/save",
    data,
  });
}
