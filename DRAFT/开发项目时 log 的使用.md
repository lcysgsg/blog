我开发时喜欢用 `console[*]`  做调试，久而久之就感觉到 `console` 中分级的必要。

为每一行日志增加前缀和颜色是不错的办法。

[info]  辅助，可以忽略

[warning] 警告，最好注意并清楚对应问题

[error] 错误，一定要清楚问题

[自定义] 总有自定义的需要

## 封装 log 函数

- [ ] 前缀——不知道是利用 `console` 的 api 还是自己设置颜色
- [ ] 缓存日志，可用于提交日志到后台以供分析。
  - [ ] 可配置记录开关
  - [ ] 可配置记录级别
- [ ] 运行环境
  - [ ] 开发环境，输出所有级别日志
  - [ ] 生产环境，仅输出 [error] 到控制台