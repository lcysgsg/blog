var path = require("path")
var fs = require("fs")

const NAME = "yapi"
var configCache = { }

function isFile (file) {
  var result = fs.existsSync(file) && fs.statSync(file).isFile()
  return result
}

function eachParent (file, callback) {
  var dir = isFile(file) ? path.dirname(file) : file
  var loc = path.resolve(dir)
  do {
    var result = callback(loc)
    if (typeof result !== "undefined") return result
  } while (loc !== (loc = path.dirname(loc)))
  return undefined
}

function parsePackage (file) {
  var config = JSON.parse(fs.readFileSync(file))
  // 防呆，可能很多人拼成 browserlist 吧
  //   if (config.browserlist && !config.browserslist) {
  //     throw new Error(
  //       "`browserlist` key instead of `browserslist` in " + file
  //     )
  //   }
  var list = config[NAME]
  //   if (Array.isArray(list) || typeof list === "string") {
  //     list = { defaults: list }
  //   }
  //   for (var i in list) {
  //     check(list[i])
  //   }

  return list
}

// function check (section) {
//   if (Array.isArray(section)) {
//     for (var i = 0; i < section.length; i++) {
//       if (typeof section[i] !== 'string') {
//         throw new Error(FORMAT)
//       }
//     }
//   } else if (typeof section !== 'string') {
//     throw new Error(FORMAT)
//   }
// }

module.exports = {
//   loadConfig: function loadConfig (opts) {
//     if (process.env.BROWSERSLIST) {
//       return process.env.BROWSERSLIST
//     } else if (opts.config || process.env.BROWSERSLIST_CONFIG) {
//       var file = opts.config || process.env.BROWSERSLIST_CONFIG
//       if (path.basename(file) === "package.json") {
//         return pickEnv(parsePackage(file), opts)
//       } else {
//         return pickEnv(module.exports.readConfig(file), opts)
//       }
//     } else if (opts.path) {
//       return pickEnv(module.exports.findConfig(opts.path), opts)
//     } else {
//       return undefined
//     }
//   },
  readConfig: function readConfig (file) {
    if (!isFile(file)) {
      throw new Error("Can't read " + file + " config")
    }
    return module.exports.parseConfig(fs.readFileSync(file))
  },

  findConfig: function findConfig (from) {
    from = path.resolve(from)

    var passed = []
    var resolved = eachParent(from, function (dir) {
      if (dir in configCache) {
        return configCache[dir]
      }

      passed.push(dir)

      var config = path.join(dir, "browserslist")
      var pkg = path.join(dir, "package.json")
      var rc = path.join(dir, ".browserslistrc")

      var pkgBrowserslist
      if (isFile(pkg)) {
        try {
          pkgBrowserslist = parsePackage(pkg)
        } catch (e) {
          if (e.name === "Error") throw e
          console.warn(
            "[Browserslist] Could not parse " + pkg + ". Ignoring it."
          )
        }
      }

      if (isFile(config) && pkgBrowserslist) {
        throw new Error(
          dir + " contains both browserslist and package.json with browsers"
        )
      } else if (isFile(rc) && pkgBrowserslist) {
        throw new Error(
          dir + " contains both .browserslistrc and package.json with browsers"
        )
      } else if (isFile(config) && isFile(rc)) {
        throw new Error(
          dir + " contains both .browserslistrc and browserslist"
        )
      } else if (isFile(config)) {
        return module.exports.readConfig(config)
      } else if (isFile(rc)) {
        return module.exports.readConfig(rc)
      } else {
        return pkgBrowserslist
      }
    })
    if (!process.env.BROWSERSLIST_DISABLE_CACHE) {
      passed.forEach(function (dir) {
        configCache[dir] = resolved
      })
    }
    return resolved
  },
}
