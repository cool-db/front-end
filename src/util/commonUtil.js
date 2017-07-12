/**
 * Created by xueyingchen.
 */
export const addNamespace = (np) => (str) => `${np}/${str}`

export const getList = (item, number) => [].fill.call(new Array(number),Object.assign({}, item))