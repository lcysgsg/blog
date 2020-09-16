/**
 * 错误返回码 统一处理
 */
export default function apiErrorCodeHandling(errorObj) {
  // console.error('apiErrorCodeHandling: ', console.log(JSON.stringify(errorObj)))
  // 错误返回码
  let error_code = Number(errorObj.data.error_code);
  let message = errorObj.data.message || "";
  switch (error_code) {
    // 登录错误
    case 10001:
      // message = `${message}`
      break;
    // 系统繁忙
    case -1:
    case 10002: // 参数丢失
    case 10003: // 参数错误
    case 10004: // 权限错误fa
    case 10005: // 签名错误
    case 10006: // 参数非法
    case 10007: // 验证错误
    case 10008: // 数据错误
      message = `${message}【${error_code}】`;
      break;
    case 99999:
      message = `${message}`;
      break;

    // token过期
    case 30004:
      // message = `ERROR_CODE:${error_code}::TOKEN_EXPIRE`
      message = `登录已失效，请重新登录`;
      // $store.dispatch("account/handleTokenInvalid");
      uni.navigateTo({
        url: "/pages/authPage/authUser",
      });
      break;

    default:
      message = `ERROR_CODE:${error_code}::UNKNOWN ERROR`;
      break;
  }
  uni.showToast({
    title: message,
    duration: 3000,
    icon: "none",
  });
}
