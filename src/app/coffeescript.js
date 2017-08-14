const mainfest = require('./coffeescript-manifest')

export function getLatestVersion () {
  return mainfest.versions[0]
}

export function getAllVersions () {
  return mainfest.versions
}

export function getCompiler (version) {
  return mainfest.compilers.filter(c => c.VERSION === version)[0]
}
