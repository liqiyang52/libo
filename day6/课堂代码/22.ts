// 抽象类的定义
// abstract class 类名 {}

abstract class Animal {
    name: string
    constructor(name:string){
        this.name = name
    }
    getName():string{
        return this.name
    }
}

let a = new Animal('小明') //报错  无法创建抽象类的实例。ts(2511)

abstract class Animal {
    name: string
    constructor(name:string){
        this.name = name
    }
    getName():string{
        return this.name
    }
}
// 狗类继承 动物类
class Dog extends Animal {
    constructor(name:string){
        super(name)
    }
}

class Animal {
    name: string
    constructor(name:string){
        this.name = name
    }
    abstract eat():string // 报错：抽象方法只能出现在抽象类中。
}

abstract class Animal {
    name: string
    constructor(name:string){
        this.name = name
    }
    abstract eat():string
}

abstract class Animal {
    name: string
    constructor(name:string){
        this.name = name
    }
    abstract eat():string{ // 报错：方法“eat”不能具有实现，因为它标记为抽象
        return ''
    }
}

abstract class Animal {
    name: string
    constructor(name:string){
        this.name = name
    }
    abstract eat():string
}

// let a = new Animal('小明')


class Dog extends Animal {
    constructor(name:string){
        super(name)
    }
    // 派生类中具体实现抽象方法
    eat(): string {
        return this.name
    }
}

// 类型接口
class 类型 implements 接口名 {}

class Animal implements IAnimal { 
    name: string;
    constructor(name:string){
        this.name = name
    }
}
// 报错：类“Animal”错误实现接口“IAnimal”。类型 "Animal" 中缺少属性 "eat"，但类型 "IAnimal" 中需要该属性
class Animal implements IAnimal {
    eat(): string {
        return ''
    }
}
// 报错： 类“Animal”错误实现接口“IAnimal”。类型 "Animal" 中缺少属性 "name"，但类型 "IAnimal" 中需要该属性。
class Animal implements IAnimal {
    name: string;
    constructor(name:string){
        this.name = name
    }
    eat(): string {
        return ''
    }
}
// 正确


// 接口继承
interface Ianimal {
    name: string
}
// interface 接口一 extends 接口二 {}
interface IPeople extends Ianimal {
    work():void
}

class Coder implements IPeople {
    name: string
    constructor(name){
        this.name = name
    }
    work(): void {
        
    }
}