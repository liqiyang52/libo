// 1. 没有只读属性,设置并修改 
// interface Obj{
//     0:string;
//     1:string
// }
// const obj:Obj={
//     0:'小崔',
//     1:'宝'
// }
// obj[1]='宝贝'
// console.log(obj)
// 2. 为什么const 声明的对象可以修改呀
interface Obj{
    0:string;
    1:string
}
const obj:Obj={
    0:'小崔',
    1:'宝'
}
obj[1]='宝贝'
console.log(obj)
/**
 * 因为const声明的对象中  没有添加readonly属性
 * 加上这个属性之后  就不可以进行修改了
 */