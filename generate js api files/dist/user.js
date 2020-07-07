/**
 * 用户 null
 * {@link http://192.168.2.18:3000/project/141/interface/api/cat_1259 | doc}
 */
import { http } from "@/utils/uni/http";

/**
 * 获取身份码
 * {@link http://192.168.2.18:3000/project/141/interface/api/9659 | doc}
 */
export function user_get_id_code(data) {
  return http.request({
    method: "POST",
    url: "/v1/user/get_id_code",
    data,
  });
}
