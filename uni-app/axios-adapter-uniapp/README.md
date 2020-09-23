uni-app 的 axios adapter

利用 axios params.adapter 对 uni-app 的 `uni.request` 和 `uni.uploadFile` 做了适配

从原有的 `xhr.js` 修改而来

保留了中止请求的 `cancelToken` 用法

```
import axios from "axios";
import axiosAdapterUniapp from "axios-adapter-uniapp";

const instance = axios.create({
  baseURL: 'BASEURL.com',
  adapter: axiosAdapterUniapp,
});
```
