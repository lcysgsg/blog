import axios from "axios";
import adaptersUniApp from "./adapters/uniapp";
import errorCodeRes from "./helper/errorCodeRes";
import errorCodeHttp from "./helper/errorCodeHttp";
import {
  filterObjectNullVal,
  generateSign,
  isUploadFile,
} from "./helper/utils";

const instance = axios.create({
  baseURL: globalConfig.BASE_API,
  timeout: 15000,
  headers: {
    platform: globalConfig.PLATFORM,
    time: Date.parse(new Date()) / 1000,
  },
  adapter: adaptersUniApp,
});

// request拦截器
instance.interceptors.request.use(
  (config) => {
    // console.log("[info] interceptors.request :>> ", config);

    let data = filterObjectNullVal(config.data);
    if (config.method === "get") {
      config.params = data;
      delete config.data;
    }
    if (config.method === "post") {
      if (isUploadFile(config)) {
        data = filterObjectNullVal(config.formData);
        config.formData = data;
      }
    }

    // 生成签名
    config.headers.sign = generateSign(data, globalConfig.SIGN_KEY);
    config.headers.token = $store.state.account.userInfo.token || "";

    return config;
  },
  (error) => {
    console.error("interceptors.request.catch: ", error);
    throw error;
  }
);

// respone拦截器
instance.interceptors.response.use(
  (response) => {
    // console.log("interceptors.response :>> ", response);
    // 服务端返回的状态码不等于200，则reject()
    if (response.status !== 200) {
      return Promise.reject(response);
    }
    if (typeof response.data === "string") {
      response.data = JSON.parse(response.data);
    }
    // 如果接口错误码不为0，则进行错误处理
    const isInvalidResult = response.data.error_code !== 0;
    if (isInvalidResult) {
      errorCodeRes(response);
      return Promise.reject(response);
    }

    // 把服务器时间放入结果
    // 比对时间会用到
    if (
      typeof response.data.result === "object" &&
      response.data.result !== null
    ) {
      response.data.result.INTERCEPTOR_serverTime = response.data.time;
    }
    return response.data.result;
  },

  // HTTP 状态码 错误处理
  (error) => {
    if (axios.isCancel(error)) {
      console.log(
        "[info] interceptors.response.catch::Request canceled",
        error
      );
    } else {
      errorCodeHttp(error);
    }
    throw error;
  }
);

export default instance;
