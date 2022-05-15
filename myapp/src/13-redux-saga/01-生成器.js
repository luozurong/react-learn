function *test() {
  console.log(11111)
  var input1 = yield '111-输出'
  console.log(22222, input1)
  var input2 = yield '222-输出'
  console.log(33333, input2)
  var input3 = yield '333-输出'
  console.log(33333, input3)
}

var lzr = test()
var res1 = lzr.next('aaa')
console.log(res1)
var res2 = lzr.next('bbb')
console.log(res2)
var res3 = lzr.next('ccc')
console.log(res3)
var res4 = lzr.next('ddd')
console.log(res4)

function *test1() {
  setTimeout(() => {
    console.log('111-success')
    hmc1.next()
  }, 1000)
  yield
  setTimeout(() => {
    console.log('222-success')
    hmc1.next()
  }, 1000)
  yield
  setTimeout(() => {
    console.log('333-success')
    hmc1.next()
  }, 1000)
  yield
}
var hmc1 = test1()
hmc1.next()
