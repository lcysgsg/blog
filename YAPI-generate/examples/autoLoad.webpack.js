const http = require("./http.webpack")

// 参数：1. 你要引入文件的目录 2.是否要查找该目录下的子级目录 3.匹配要引入的文件
const modulesFiles = require.context("../dist-modules", true, /\.js$/)
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  // set './app.js' => 'app'
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, "$1")
  const apiList = modulesFiles(modulePath)

  modules[moduleName] = generateFunc(apiList)
  return modules
}, {})

function generateFunc (apiList) {
  const result = {}
  apiList.foeEach(e => {
    result[e.funcName] = function (data, options) {
      return http({
        url: e.url,
        method: e.method,
        data,
      })
    }
  })
}
export default modules
