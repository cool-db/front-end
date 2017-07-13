const util = require('../util/httpUtil.js')

function createTask (name, creatorId, progressId, content="默认内容") {
  return util.httpPost(util.baseURL + 'task', {
    name: name,
    creatorId: creatorId,
    progressId: progressId,
    content: content
  })
}

function deleteTask (projectId, taskId, userId) {
  return util.httpDel(util.baseURL + 'task', {projectId: projectId, taskId: taskId, userId: userId})
}

function getTaskList (projectId) {
  return util.httpGet(util.baseURL + 'task/list?projectId=' +  projectId)
}

function updateInfo (taskId, userId, name, content, ddl, ownerId, emergencyType) {
  return util.httpPut(util.baseURL + 'task', {
    taskId: taskId,
    name: name,
    userId: userId,
    content: content,
    ddl: ddl,
    ownerId: ownerId,
    emergencyType: emergencyType
  })
}


function getInfo (taskId) {
  return util.httpGet(util.baseURL + 'task/?taskId=' + taskId)
}

function updateState (taskId, userId, state) {
  return util.httpPut(util.baseURL + 'task/state', {
    taskId: taskId,
    userId: userId,
    state: state
  })
}

function createSubTask (subtaskContent, taskId, userId) {
  return util.httpPost(util.baseURL + 'subtask', {
    subtaskContent: subtaskContent,
    taskId: taskId,
    userId: userId
  })
}

function deleteSubTask (subtaskId, userId) {
  return util.httpDel(util.baseURL + 'subtask', {subtaskId: subtaskId, userId: userId})
}

function getSubtaskList (subtaskId) {
  return util.httpGet(util.baseURL + 'subtask/list/?subtaskId=' + subtaskId)
}

function updateSubtaskInfo (subtaskId, subtaskExecutorId) {
  return util.httpPut(util.baseURL + 'subtask', {
    subtaskId: subtaskId,
    subtaskExecutorId: subtaskExecutorId
  })
}

function updateSubtaskState (subtaskId, userId) {
  return util.httpPut(util.baseURL + 'subtask/state', {
    subtaskId: subtaskId,
    userId: userId
  })
}

function addMember (taskId, userId, participatorId) {
  return util.httpPost(util.baseURL + 'task/participator', {
    taskId: taskId,
    userId: userId,
    participatorId: participatorId
  })
}

function deleteMember (taskId, participatorIds) {
  return util.httpDel(util.baseURL + 'task/participator', {
    taskId: taskId,
    participatorIds: participatorIds
  })
}

function getMemberList (taskId) {
  return util.httpGet(util.httpGet + 'task/participator/list?taskId=' + taskId)
}

function deleteAttachFile (fileId, taskId, userId) {
  return util.httpPost(util.baseURL + 'task/attachment', {
    fileId: fileId,
    taskId: taskId,
    userId: userId
  })
}

function updateTaskOrder (taskId, userId, progressIdTo) {
  return util.httpPut(util.baseURL + 'task/order', {
    taskId: taskId,
    userId: userId,
    progressIdTo: progressIdTo
  })
}

module.exports = {
  createTask,
  deleteTask,
  getTaskList,
  updateInfo,
  getInfo,
  updateState,
  createSubTask,
  deleteSubTask,
  getSubtaskList,
  updateSubtaskInfo,
  updateSubtaskState,
  addMember,
  deleteMember,
  getMemberList,
  deleteAttachFile,
  updateTaskOrder
}
