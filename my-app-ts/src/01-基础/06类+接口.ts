interface Ifunc {
  getName: () => string,
  getAge: () => number
}

class A implements Ifunc{
  b1 () {

  }
  b2 () {

  }
  getName () {
    return 'aaa'
  }
  getAge () {
    return 18
  }
}

class B implements Ifunc{
  getName () {
    return 'bbb'
  }
  getAge () {
    return 18
  }
}

class C implements Ifunc{
  getName () {
    return 'CCC'
  }
  getAge () {
    return 18
  }
}

function init (obj: Ifunc) {
  obj.getName()
  obj.getAge()
}

var objA = new A()
var objB = new B()
var objC = new C()

init(objA)
init(objB)
init(objC)


export default {}