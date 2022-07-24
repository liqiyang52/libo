// new 新的请求http
let ajax = new XMLHttpRequest()
ajax.open('get','gsgsed')
ajax.send()
ajax.onreadystatechange = function(){
    if(ajax.status===200&&ajax.readyState===4){
        console.log('我是返回成功的值')
    }
}

interface Iparams {
    methods: string,
    url: string,
    data?: any
}

enum Status {
    Success = 200,
    ReadyState = 4
}

function getAjax(params: Iparams) {
    let ajax = new XMLHttpRequest();
    ajax.open(params.methods, params.url)
    ajax.send(params.data)
    ajax.onreadystatechange = function() {
        if(ajax.status ===Status.Success && ajax.readyState === Status.ReadyState) {
            console.log('我们可以用了');
        }
    }
}

/**
 * 为函数和函数参数定义类型
 * type
 *    1. 类型别名
 * 
 * 
 * 
 * 不一样的点: 
 *    1. type是赋值,进行别名的修改
 *    2. interface 声明一个类型
 *    3. type 可以声明基础类型数据, interface只能声明对象
 *    4. interface可以使用extends进行继承,但是type不可以,因为是类型别名,属于复制的一种
 *    5. interface 可以重复声明,自动合并一起,
 *    6. type不可以重复声明
 *  
 * 
 * 相同点: 
 *      1. type和interface都可以声明对象和类型
 */


type IParams = {
    methods: string,
    url: string,
    data?: any
}

enum Status {
    Success = 200,
    ReadyState = 4
}

function getAjax(params: IParams) {
    let ajax = new XMLHttpRequest();
    ajax.open(params.methods, params.url)
    ajax.send(params.data)
    ajax.onreadystatechange = function () {
        if (ajax.status === Status.Success && ajax.readyState === Status.ReadyState) {
            console.log('我们可以用了');
        }
    }
}

// type用来声明基础类型
type user = string

//接收一个字符串类型的数据，返回一个user类型(字符串类型)的数据
function Input(str: user): user {
    return str.slice(0, 2)
}
//把返回结果赋值给userInput
let userInput = Input('hello')
//重新给其赋值一个字符串类型的值,没有报错,说明用type声明的字符串类型生效
userInput = 'new'

/**
 * interface继承  extends
 */

//扩展接口
interface Animal{
    name:string
}
interface Bear extends Animal{
    honey:boolean
}
// //声明一个类型为Bear类型的对象，要求既要有name，也要有honey。说明用extends扩展接口成功
const bear:Bear={
    name:'winie',
    honey:true
}
console.log(bear.name);
console.log(bear.honey);

// -------------type-----------------不能使用extends进行继承
type Animal = {
    name:string
}
type Bear = {
    honey:boolean
}
// //声明一个类型为Bear类型的对象，要求既要有name，也要有honey。说明用extends扩展接口成功
const bear:Bear={
    name:'winie',
    honey:true
}
console.log(bear.name);
console.log(bear.honey);


/**
 * interface继承type类型
 */

interface Animal{
    name:string
}

type Bear = {
    honey:boolean
}

interface Animal extends Bear {
    color: string
}

const bear:Animal={
    name:'winie',
    color: 'red',
    honey: true,
}

/**
 * 可选参数? 是在对象中使用的, 接口声明和类型别名 ---- 重点!!!
 */

 type Add = (x: number, y: number) => number;
 let add: Add = (arg1: string, arg2: string): string => arg1 + arg2;
 
 add(1, 2); // right
 add(1, 2, 3); // error 应有 2 个参数，但获得 3 个
 add(1); // error 应有 2 个参数，但获得 1 个