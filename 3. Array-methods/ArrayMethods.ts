class myArray{
    data:any
    length:number

    constructor() {
        this.data = {}
        this.length = 0
    }
    push(item: any){
        this.data[this.length] = item
        this.length += 1
    }
}

const myArr =  new myArray()
myArr.push("Shelby")
myArr.push("Jackson")
myArr.push("Mary")
myArr.push("Janette")

console.log(myArr)