
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix) return [];
  return matrix.reduce((akk, element, index) => {
    if (index % 2 !== 0) element = element.reverse();
    akk = akk.concat(element); return akk}, [])  
}
