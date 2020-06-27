const fs = require("fs-extra")
const axios = require("axios")

const OPTIONS = {
  host: "http://192.168.2.18:3000",
  path: "/api/interface/list_menu",
  token: "61c7de9df7ce219f29cfbf68d36cb20f9ac647db150cda9f594df7075b15d23b",
  projectId: 141,
  outputDir: "./dist-onefile",
}

console.log(`┗|｀O′|┛ 正在链接目的地 ${OPTIONS.host}${OPTIONS.path}`)
axios.get(`${OPTIONS.host}${OPTIONS.path}?token=${OPTIONS.token}`).then(res => {
  console.log("┗|｀O′|┛ 链接成功")
  // 参考 ./listMenu.json
  const result = res.data
  handleSrouce(result.data)
})

// TEST:
// const listMenu = require("./listMenu.json")
// handleSrouce(listMenu.data)
async function handleSrouce (source) {
  // console.log(`┗|｀O′|┛ 先清一波旧数据 ${OPTIONS.outputDir}`)
  // await fs.emptyDir(OPTIONS.outputDir)
  console.log(`┗|｀O′|┛ 开始写入 ${OPTIONS.outputDir}`)
  let fileContent = "export default {"
  source.forEach((module) => {
    if (module.list.length === 0) return
    // "/api/Advise/update" => "Advise"
    const firstPath = module.list[0].path
    const fileName = getPathWords(firstPath, "1,2")
    // console.log(`  - ${fileName}.js`)
    fileContent += `
  /**
   * ==================================================
   *  ${module.name}
   *  ${module.desc}
   * ==================================================
   */
  ${fileName}: [`
    fileContent += generateJsApiContent(module.list)
    fileContent += `  ],
`
  })
  fileContent += `}
`
  const fileName = "apiConfig"
  fs.writeFile(`${OPTIONS.outputDir}/${fileName}.js`, fileContent)
  console.log(`┗|｀O′|┛ 对 ${OPTIONS.outputDir}/${fileName}.js 数据写入完成！`)
}

function generateJsApiContent (list) {
  let result = ""
  list.forEach((item) => {
    const funcName = reservedWord(getPathWords(item.path, 2))
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

function reservedWord (word) {
  switch (word) {
    case "delete":
      return "del"

    default:
      return word
  }
}

// /v1/Advise/update
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
