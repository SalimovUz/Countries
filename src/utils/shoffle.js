export function shoffle(array) {
  return array 
  .map((value) => ({value, sort: Math.random()}))
  .sort((a,b) => a.sort - b.sort)
  .map(({value}) => value)
} 


