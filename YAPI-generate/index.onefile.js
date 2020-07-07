const fs = require("fs-extra")
const axios = require("axios")
const path = require("path")
const execPath = process.cwd()

function parsePackage (file) {
  var config = JSON.parse(fs.readFileSync(file))
  var list = config.yapiconfig
  return list
}

const OPTIONS = {
  // host 是 yapi 的地址
  host: "http://192.168.2.18:3000",
  // 获取新项目接口一般就是改 token，
  token: "61c7de9df7ce219f29cfbf68d36cb20f9ac647db150cda9f594df7075b15d23b",
  // projectId: 141, // 基本没用上过
  path: "/api/interface/list_menu",
  outputDir: path.resolve(execPath, "./dist-onefile"),
  fileName: "apiConfig",
}

/**
 * 主要处理函数
 * @param {array} source yapi源数据
 */
function handleSrouce () {
  // console.log(`┗|｀O′|┛ 先清一波旧数据 ${OPTIONS.outputDir}`)
  console.log("┗|｀O′|┛ 程序启动~")
  console.log(`┗|｀O′|┛ 正在链接目的地 ${OPTIONS.host}${OPTIONS.path}`)
  axios.get(`${OPTIONS.host}${OPTIONS.path}?token=${OPTIONS.token}`).then(res => {
    console.log("┗|｀O′|┛ 链接成功")
    // 可参考 ./listMenu.json
    const result = res.data
    const source = result.data
    console.log(`┗|｀O′|┛ 开始写入 ${OPTIONS.outputDir}`)
    fs.writeFile(`${OPTIONS.outputDir}/${OPTIONS.fileName}.js`, generateJsApiContent(source))
    console.log(`┗|｀O′|┛ 对 ${OPTIONS.outputDir}/${OPTIONS.fileName}.js 数据写入完成！`)
  })
}

/**
 * 拼接内容
 * @param {array} list yapi数组
 */
function generateJsApiContent (source) {
  // 生成一段
  const genrSingleConent = function (list) {
    let result = ""
    list.forEach((item) => {
      const funcName = reservedWord(getPathWords(item.path, -2))
      console.log(funcName)
      result += `
      // ${item.title}
      // doc: ${OPTIONS.host}/project/${item.project_id}/interface/api/${item._id}
      {
        funcName: "${funcName}",
        method: "${item.method}",
        url: "${item.path}",
      },
  `
    })
    return result
  }

  let fileContent = "export default {"
  source.forEach((module) => {
    if (module.list.length === 0) return
    // "/api/Advise/update" => "Advise"
    const firstPath = module.list[0].path
    const fileName = getPathWords(firstPath, "1,2")
    fileContent += `
  /**
   * ==================================================
   *  ${module.name}
   *  ${module.desc}
   * ==================================================
   */
  ${fileName}: [`
    fileContent += genrSingleConent(module.list)
    fileContent += `  ],
`
  })
  fileContent += `}
`

  return fileContent
}

/**
 * 防止与保留字冲突
 * @param {string} word 单词
 */
function reservedWord (word) {
  switch (word) {
    case "delete":
      return "del"

    default:
      return word
  }
}

/**
 * 根据位置取路径上的单词
 *   - getPathWords('/v1/Advise/update', 1) => 'Advise_update'
 * @param {string} path 路径
 * @param {string|number} sliceIdx 同 Array.prototype.splice(index)
 * @param {string} divider 链接函数名的符号
 */
function getPathWords (path, sliceIdx, divider = "_") {
  // 统一成方便处理的模样 => v1/Advise/update
  path = path[0] === "/" ? path.replace("/", "") : path
  const arr = path.split("/")
  let startIndex = sliceIdx
  let endIndex = arr.length
  if (isNaN(sliceIdx)) {
    // 3,4 => startIndex = 3 , endIndex = 4
    [startIndex, endIndex] = sliceIdx.split(",")
  }
  return arr.slice(startIndex, endIndex).join(divider)
}

module.exports = handleSrouce
