function test1(a: string, b: string, c?: number): string {
  console.log(a.substring(0, 1) + b.substring(0, 1))
  return a.substring(0, 1) + b.substring(0, 1)
}
var myname: string = test1('aaa', 'bbb', 100)
console.log(myname)


interface Ifunc{
  (a: string, b: string, c?: number):string
}
var myfunc2: Ifunc = function test2(a: string, b: string): string {
  console.log(a.substring(0, 1) + b.substring(0, 1))
  return a.substring(0, 1) + b.substring(0, 1)
}

interface IObj {
  name: string,
  age: number,
  getName: (name: string) => string
}

var obj2: IObj = {
  name: 'lzr',
  age: 100,
  getName: (name: string) => {
    return name
  }
}
var name: string = obj2.getName('aaa')
console.log(name)

export default {}