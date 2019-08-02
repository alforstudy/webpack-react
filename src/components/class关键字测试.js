console.log("-----------------------")
class ShengWu{
    constructor(name,age){
        this.name = name
        this.age = age
    }
    say(){
        console.log("不说人话")
    }
}


function Person(name,age){
    this.name = name
    this.age = age
}
Person.info = "人"
//实例属性可以通过实例直接访问
//静态属性只能通过类来访问
let p1 = new Person("张三",14)

//实例方法
Person.prototype.say = function (){
    console.log("说人话")
}
//静态方法
Person.say = function(){
    console.log("类说人话")
}

console.log(p1)
console.log(p1.info)
console.log(Person.info)
p1.say()
//类不能调用实例方法
Person.say()




console.log("-------------------------------------------")

//实例属性可以通过实例直接访问
//静态属性只能通过类来访问
//class 语法糖 定义的 类 可以使用 static 修饰变量 使得该变量成为静态变量
//class区间内只能写构造器  实例变量、方法  类变量、方法
class Animal extends ShengWu{
    constructor(name,age,address){
        super(name,age)
        this.address = address
    }
    static info = "动物"
    static say(){
        console.log("类不说人话")
    }
}

let a1 = new Animal("111",3)
console.log(a1)
console.log(a1.info)
console.log(Animal.info)
a1.say()
//类不能调用实例方法，同名情况可以
Animal.say()


