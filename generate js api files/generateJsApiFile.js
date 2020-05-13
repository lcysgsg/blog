const fs = require('fs')
const originSource = require('./apiPath.json')

// fs.writeFile('apiFile.js', result, function (err) {
//   if (err) {
//     return console.error(err)
//   }
//   console.log('数据写入成功！')
// })

handleSrouce(originSource)

function handleSrouce(source) {
  source.forEach((module) => {
    // "/api/Advise/update" => "Advise"
    const fileName = module.list[0].path.match(/\/.*?\/(.*)\//)[1]
    const fileContent = generateJsApiFile(module.list)

    fs.writeFile(`./dist/${fileName}.js`, fileContent, function (err) {
      if (err) return console.error(err)
      console.log('数据写入成功！')
    })
  })
}

function generateJsApiFile(list) {
  let result = `
import config from '@/config/index'
import { http } from '@/utils/http'
`
  list.forEach((item) => {
    const funcName = reservedWord(item.path.match(/\/.*\/(.*)/)[1])
    result += `
export function ${funcName}(data) {
    return http.request({
        method: '${item.method}',
        url: '${item.path}',
        data,
    })
}
`
  })
  return result
}

function reservedWord(word) {
  switch (word) {
    case 'delete':
      return 'del'
  
    default:
      return word
  }
}
