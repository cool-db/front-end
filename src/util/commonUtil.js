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