// 第一种写法
var list: string[] = ['1', '2', '3', '4']
list.push('dadada')

for (var i in list) {
  list[i].substring(0, 1)
}

var list2: number[] = [1, 2, 3, 4]
list2.push(5)

var list3: (number | string)[] = [1,2,3,4, '5']
list3.push('6')

// 第二种写法
var myList1: Array<string> = ['1', '2', '3']
myList1.push('4')

var myList2: Array<number> = [1, 2, 3]
myList2.push(4)

var myList3: Array<number | string> = [1, '2', 3]
myList3.push(5)

export default {}