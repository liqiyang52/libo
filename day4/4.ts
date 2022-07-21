/**
 * 索引签名
 * 绕开多余属性时，[]中间的内容是可变的
 */
interface Role {
    [id:number]:string
}
let role:Role = {
    0:'libo',
    1:'admin'
}
// let crole:Role = {
// //     不能将类型“{ A: string; C: string; }”分配给类型“Role”。
// //   对象文字可以只指定已知属性，并且“"A"”不在类型“Role”中
//     "A":'cui',
//     "C":'yu'
// }






/**
 * 数组模式
 */
let rolearr:Role = ['li','bo']
rolearr[0] = 'cuiyut'
/**
 * 想要东西不可修改，只能读取----使用readonly
 */
interface role {
    readonly [id: number]:string
}
const rolegai:role = {
    0:'cui'
}
// 类型“role”中的索引签名仅允许读取
// rolegai[0] = 'admin'
const obj = {
    123:'a',
    // 标识符“'123'”重复
    // '123':'b'
}







/**
 * 接口继承
 * extends是继承的标识
 */
// 公共接口类型定义
interface ve {
    color:string
}
interface ve2 extends ve {
    radius:number
}
interface ve3 extends ve {
    length:number
}
// 类型“{}”缺少类型“ve2”中的以下属性: radius, color
// let useve2:ve2 = { }
let useve2:ve2 = {
    radius:13,
    color:'red'
}
let useve3:ve3 = {
    length:21,
    color:'red'
}






/**
 * 混合类型
 */
/**
 * js中可以手动添加对象属性
 */
// 这样容易被污染
// let count = 0
// const counts = () => count++
// 闭包写法1
// const count1 = (() => {
//     return () = {
//     }
// })()
// 闭包写法2
// const count1 = (() => {
//     function aa() {
//     }
//     return aa
// })()
const counts = (() => {
    let count = 0
    return () => {
        return ++count
    }
})()
console.log(counts()); //1
console.log(counts()); //2







/**
 * 混合接口
 */
interface conter {
    // 没有返回值的函数
    ():void
    count:number
}
// 其声明类型不为 "void" 或 "any" 的函数必须返回值
const getconter = ():conter => {
    const c = () => {
        c.count++
    }
    c.count = 0
    return c
}
const counte1:conter = getconter()
counte1()
console.log(counte1.count); //1
counte1()
console.log(counte1.count); //2