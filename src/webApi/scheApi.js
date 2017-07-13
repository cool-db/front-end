/**
 * Created by dustar on 2017/7/14.
 */
const util = require('../util/httpUtil')

function listSches (projectId) {
  return util.httpGet(util.baseURL + 'schedule/list/?projectId=' + projectId)
}

module.exports = {
  listSches
}
