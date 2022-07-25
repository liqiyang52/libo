// 类
// 修饰符
// 公共的
class Point {
    public x: number;
    public y: number;
    constructor(x: number, y: number) {
      this.x = x;
      this.y = y;
    }
    public getPosition() {
      return `(${this.x}, ${this.y})`;
    }
  }

//   私有的
class Parent {
    private age: number;
    constructor(age: number) {
      this.age = age;
    }
  }
  const p = new Parent(18);
  console.log(p); // { age: 18 }
  console.log(p.age); // error 属性“age”为私有属性，只能在类“Parent”中访问
  console.log(Parent.age); // error 类型“typeof ParentA”上不存在属性“age”
  class Child extends Parent {
    constructor(age: number) {
      super(age);
      console.log(super.age); // 通过 "super" 关键字只能访问基类的公共方法和受保护方法
    }
  }

//   保护修饰符
class Parent {
    protected age: number;
    constructor(age: number) {
      this.age = age;
    }
    protected getAge() {
      return this.age;
    }
  }
  const p = new Parent(18);
  console.log(p.age); // error 属性“age”为私有属性，只能在类“ParentA”中访问
  console.log(Parent.age); // error 类型“typeof ParentA”上不存在属性“age”
  class Child extends Parent {
    constructor(age: number) {
      super(age);
      console.log(super.age); // undefined
      console.log(super.getAge());
    }
  }
  new Child(18)


//   readonly修饰符
class UserInfo {
    readonly name: string;
    constructor(name: string) {
      this.name = name;
    }
  }
  const user = new UserInfo("Lison");
  user.name = "haha"; // error Cannot assign to 'name' because it is a read-only property

// 静态属性
class Parent {
    public static age: number = 18;
    public static getAge() {
      return Parent.age;
    }
    constructor() {
      //
    }
  }
  const p = new Parent();
  console.log(p.age); // error Property 'age' is a static member of type 'Parent'
  console.log(Parent.age); // 18


//   可选类属性
class Info {
    name: string;
    age?: number;
    constructor(name: string, age?: number, public sex?: string) {
      this.name = name;
      this.age = age;
    }
  }
  const info1 = new Info("lison");
  const info2 = new Info("lison", 18);
  const info3 = new Info("lison", 18, "man");
//   取存器
class UserInfo {
    private _fullName: string;
    constructor() {}
    get fullName() {
      return this._fullName;
    }
    set fullName(value) {
      console.log(`setter: ${value}`);
      this._fullName = value;
    }
  }
  const user = new UserInfo();
  user.fullName = "Lison Li"; // "setter: Lison Li"
  console.log(user.fullName); // "Lison Li"
//   抽象类
abstract class People {
    constructor(public name: string) {}
    abstract printName(): void;
  }
  class Man extends People {
    constructor(name: string) {
      super(name);
      this.name = name;
    }
    printName() {
      console.log(this.name);
    }
  }
  const m = new Man(); // error 应有 1 个参数，但获得 0 个
  const man = new Man("lison");
  man.printName(); // 'lison'
  const p = new People("lison"); // error 无法创建抽象类的实例