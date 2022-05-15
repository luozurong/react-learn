interface IObj{
  name: string,
  age: number,
  location?: string, // 可选属性
  [propName: string]: any
}

var obj1: IObj = {
  name: 'lzr',
  age: 100,
  location: '桂平',
  grade: 5
}

console.log(obj1.age)
export default {}