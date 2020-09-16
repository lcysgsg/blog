/**
 * HTTP 状态码 错误处理
 */
export default function httpCodeHandling(response) {
  console.error("httpCodeHandling: ", JSON.stringify(response));

  if (!response || response.errMsg === "request:fail abort") {
    uni.showToast({
      title: `无法连接至服务器`,
      icon: "none",
      duration: 2000,
    });
    return false;
  }

  const code = response.statusCode;
  switch (code) {
    case 404:
      uni.showToast({
        title: "接口不存在",
        icon: "none",
        duration: 2000,
      });
      break;
    case 408:
      uni.showToast({
        title: "服务器繁忙,请稍后再试",
        icon: "none",
        duration: 2000,
      });
      break;
    case 500:
      uni.showToast({
        title: "服务器错误,请稍后再试",
        icon: "none",
        duration: 2000,
      });
      break;
    default:
      uni.showToast({
        title: `UNHANDLED_HTTP_CODE:${code}`,
        icon: "none",
        duration: 2000,
      });
      break;
  }
}
