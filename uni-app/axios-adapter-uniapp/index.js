/* global uni */
"use strict";

// var utils = require("axios/lib/utils");
var settle = require("axios/lib/core/settle");
// var cookies = require("axios/lib/helpers/cookies");
var buildURL = require("axios/lib/helpers/buildURL");
var buildFullPath = require("axios/lib/core/buildFullPath");
// var parseHeaders = require("axios/lib/helpers/parseHeaders");
// var isURLSameOrigin = require("axios/lib/helpers/isURLSameOrigin");
// var createError = require("axios/lib/core/createError");

function isUploadFile(config) {
  if (config.filePath && config.name) {
    return true;
  }
  if (config.files) {
    return true;
  }
  return false;
}

/**
 * 参数配置参考：
 *   > axios          https://www.npmjs.com/package/axios#request-config
 *   > uniapp request https://uniapp.dcloud.io/api/request/request
 *   > uniapp upload  https://uniapp.dcloud.io/api/request/network-file
 * @param {object} config
 */
module.exports = function uniappAdapter(config = {}) {
  return new Promise(function dispatchUniApp(resolve, reject) {
    const fullPath = buildFullPath(config.baseURL, config.url);
    const requestData = config.data;
    const requestHeaders = config.headers;

    const isUpload = isUploadFile(config);
    const dataKey = isUpload ? "formData" : "data";

    const uniConfig = {
      ...config,
      url: buildURL(fullPath, config.params, config.paramsSerializer),
      [dataKey]: requestData,

      // uniapp 用的是 header
      header: requestHeaders,
    };

    if (isUpload) {
      delete requestHeaders["Content-Type"]; // Let the browser set it
    }

    // 不知道什么情况会用上
    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || "";
      var password = unescape(encodeURIComponent(config.auth.password)) || "";
      requestHeaders.Authorization = "Basic " + btoa(username + ":" + password);
    }

    let requestTask = null;
    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!requestTask) {
          return;
        }

        requestTask.abort();
        reject(cancel);
        // Clean up request
        requestTask = null;
      });
    }

    uniConfig.complete = function (response) {
      // 暂时不明白为什么要判断 responseType === 'text'，也许返回结果是有多种格式的，但是目前没碰到。
      // var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var result = {
        data: response.data,
        status: response.statusCode,
        statusText: response.errMsg,
        header: response.header,
        config: config,
        // request: request
      };

      settle(resolve, reject, result);
    };
    // Send the request
    if (isUpload) {
      requestTask = uni.uploadFile(uniConfig);
    } else {
      requestTask = uni.request(uniConfig);
    }
  });
};
