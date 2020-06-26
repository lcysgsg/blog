## NODE

### 方便的切换 node 版本

- Linux: `$ npm install -g n`
- Windows: [nvm](https://github.com/coreybutler/nvm-windows)

## NPM

### 管理 npm 下载源

- `npm install nrm −g`
- `nrm ls` 查看可选源
- `nrm use REGISTRY-NAME`
  - e.g. `nrm use taobao`

### 修改 npm 配置文件

- `npm config set REGISTRY_URL`

E.g. `npm config set http://registry.npm.taobao.org`

## 安装 `node-sass` 容易失败

- 网络不好，换源解决
