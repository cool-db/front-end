/**
 * Created by xueyingchen.
 */
export const addNamespace = (np) => (str) => `${np}/${str}`

export const getList = (f, number) => Array.apply(null, new Array(number)).map(() => f())

export const getIndexByAttr = (value, list, attr) => {
  for (let i in list) {
    if (list[i][attr] === value) {
      return i
    }
  }
  return -1
}

export const extractItem = (list1, list2) => {
  const sum1 = list1.reduce((acc, item) => {
    return acc + item.taskId
  }, 0)
  
  const sum2 = list2.reduce((acc, item) => {
    return acc + item.taskId
  }, 0)
  
  return Math.abs(sum1 - sum2)
}
