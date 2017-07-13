/**
 * Created by dustar on 2017/7/14.
 */
const util = require('../util/httpUtil')

function listFiles (projectId) {
  return util.httpGet(util.baseURL + 'file/list?projectId=' + projectId)
}

module.exports = {
  listFiles
}
