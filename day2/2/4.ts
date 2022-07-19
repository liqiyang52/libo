/**
 * 课堂讲的
 */

// ----------------------------------------

/**
 * number
 */
        // 错误的示范
        // let num:number=123
        // num='111'
    // 正确示范
    // let num:number = 123
    // num = 456
    // console.log(num)

// ------------------------------------------

/**
 * boolean
 */
        //错误示范
        // let qq:boolean=1
        // console.log(qq)
    // 正确示范
    // let qq:boolean=true
    // console.log(qq)

// -------------------------------------------

/**
 * string
 */
        // 错误示范
        // let qq:string=12
        // console.log(qq)
    // 正确示范
    // let qq:string = '小崔'
    // console.log(qq)

// ---------------------------------------------

/**
 * array
 */
// 第一种--字面量的方法  let 名字:类型[] = []
// let arr1:number[] = [1,2,3,4,5,6]
// let arr2:string[] = ['1','2','3','4','5']
// let arr3:boolean[] = [true,false,true,true]
// console.log(arr1);
// console.log(arr2);
// console.log(arr3);

// 第二种--数组泛型 Array<类型>
// let arr4: Array<number> = [1,2,3,4,5,6]
// let arr5: Array<string> = ['1','2','3','4','5']
// let arr6: Array<boolean> = [false,true,true,false]
// console.log(arr4);
// console.log(arr5);
// console.log(arr6);
// 旧的数组方法也都可以用
// arr1.push(6)
// console.log(arr1);

/**
 * undefined和null
 */
// undefined 和 null 是两个基本数据类型，既是类型又是值
// let u: undefined = undefined;
// let n: null = null;
// console.log(u,n);




/**
 * 对象
 */
// let obj2:{name:string, age:number}
// obj2 = {name:'李博', age:21}
// let arr = `my name is  ${obj2.name} age is ${obj2.age}`
// console.log(arr);
// document.write(arr)



/**
 * 元组
 */
// let yuanzu: [name:string, age:number, sex:boolean, height:number] = ['崔宇彤',19,true,170]
// console.log(yuanzu[0]);
// console.log(yuanzu[1]);
// console.log(yuanzu[2]);
// console.log(yuanzu[3]);
// let ju1 = `my name is ${yuanzu[0]} age is ${yuanzu[1]} sex is ${yuanzu[2]} i am ${yuanzu[3]} cm`
// console.log(ju1);
// document.write(ju1)


/**
 * 枚举
 */
// 注意枚举和对象相似但是写法不一样，枚举是等于号，并且表示赋值
// enum Color {
//     /**
//      * 红色
//      */
//     Red = 1,
//     /**
//      * 蓝色
//      */
//     Blue = 2,
//     /**
//      * 灰色
//      */
//     Grey = 3
// }
// let c:Color = Color.Blue
// console.log(c);  // 2


/**
 * any
 */
// let value:any
// value = 12
// value = '123'
// value = true
// const a:any[] = [12,'123',true]
// console.log(a);



/**
 * void类型
 */
// function name1(): void  {
//     console.log('没返回值');  
// }
//  function name2(): string{  
//     return 'My Name is string'
// }


/**
 * never 就是用来表示报错的
 */
// function error(message:string):never {
//     throw new Error(message)
// }
// function fail() {
//     return error('fail')
// }


/**
 * unknown
 */
// 和any用法差不多，但是比any安全


/**
 * 交叉类型(&)
 */
// interface type1 {
//     name2:string,
//     age2:number
// }
// interface type2 {
//     sex:boolean
// }
// type allin = type1 & type2
// let zijie:allin = {name2:'cuiyutong',age2:21,sex:true}



/**
 * 联合类型(|)
 */
// let alltype:number | string
// alltype = 1
// alltype = 'ddd'
// 不能将类型“boolean”分配给类型“string | number”
// alltype = false