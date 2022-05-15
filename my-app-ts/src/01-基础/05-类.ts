class Bus {
  private _list: Array<any> = [] // 私有变量
  public name: string = 'lzr'
  protected age: number = 100

  subscribe (cb: any) {
    this._list.push(cb)
  }

  dispatch() {
    this._list.forEach((cb: any) => {
      cb && cb()
    })
  }
}

class Child extends Bus {
  aa () {
    console.log(this.name, this.age)
  }
}

var child = new Child()
console.log(child.name, child.aa())

export default {}