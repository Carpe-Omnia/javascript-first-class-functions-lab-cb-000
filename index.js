function countdown(callback) {
  window.setTimeout(callback(), 2000)
}
var doubler = 2
var tripler = 3
function createMultiplier(variable) {
  var mult = 1
  if (variable === 2) {mult = 2}
  if(variable === 3) {mult = 3}
  return function(base) {
    return base * mult
  }
}
