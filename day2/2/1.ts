/**
 * 1.用两种方式创建Boolean类型的数组
 */
// let qq:Array<boolean> = [false,false,true]
// let ww:boolean[]=[false,true]
// console.log(qq)
// console.log(ww)

/**
 * 2.工厂模式创建对象
 *   构造函数创建对象
 */

// function newCar(name, color) {
//     var c:any = new Object();
//     c.name = name;
//     c.color = color;
//     return c;
// }
// let car1 = new newCar('BENZ', 'white');
// console.log(car1);

// function qq(name,age){
//     this.name = name
//     this.age = age
//     this.aa = function(){
//         console.log(this.name)
//     }
// }
// let qqq = new qq('shabi',22)
// console.log(qqq)

/**
 * 3.将对象造个句子
 */
// let qq:{name:string,age:number}
// qq={name:'傻逼',age:18}
// let ww = `你是:${qq.name} 年龄:${qq.age}`
// document.write(ww)

/**
 * 4.找一个数组中修改源数组的方式，找一下数组中那些方式是可以使用的，那些事不可以使用
 */
// let arr = [1,2,3,4,5]
// arr.push(6)
// arr.splice(1,2)
// console.log(arr)

/**
 * 5.为什么类型断言左后是number
 */
// let some : any;
// some = 123;
// some = '123';
// let somee = (<string>some).length
/**
 * 因为some设置是any类型的  any类型的特点是可以是任何类型
 * 下面有number string 两种类型 但是如果没有指定的话 默认是number
 */

 /**
  * 6.函数有哪几种  总结
  * 
  * 1匿名函数:定义时候咩有任何变量引用的函数
  * 2回调函数:一个函数作为对象交给其他函数使用
  * 3递归函数:循环调用函数本身
  * 4构造函数:构造函数习惯上首字母大写，用来新建实例对象
  */