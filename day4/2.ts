/**
 * 原生ajax
 */
// 创建ajax
let ajax = new XMLHttpRequest()
// 制作发送方法和url
ajax.open('get','https://ghowehfowfsadgfeiohgoewihfgoieahiogfhiodshfishfhsaifuhrdsoiw')
// 发送数据
ajax.send()
// 判断是不是返回成功和状态码
ajax.onreadystatechange = function(){
    if(ajax.status===200 && ajax.readyState===4){
        console.log(ajax.response)
    }
}


/**
 * interface
 */
// 是否请求成功  状态码的封装
// enum Qaz{
//     // 成功
//     Success=200,
//     // 连接成功
//     Radey =4
// }
// // 定义Aaa
// interface Aaa{
//     Sss:string,
//     Url:string,
//     data?:any
// }

// function get(aaa:Aaa){
//     let ajax = new XMLHttpRequest()
//     // 请求方法和url路径
//     ajax.open(aaa.Sss,aaa.Url)
//     ajax.send(aaa.data)
//     // 判断请求地址
//     ajax.onreadystatechange = function(){
//         if(ajax.status===Qaz.Success&&ajax.readyState===Qaz.Radey){
//             console.log('我是成功的')
//         }
//     }
// }
// const Aaa = {Sss:'get',Url:'fhoehgfoehfoefoeaf'}
// get(Aaa)



// /**是否请求成功  状态码的封装 */
// enum Status{
//     /**成功 */
//     Success = 200,
//     /**连接成功 */
//     ReadyStatus = 4
// }
// /**定义params */
// interface IParams{
//     method:string,
//     url:string,
//     data?:any
// }
// function get(params:IParams){
// let ajax = new XMLHttpRequest()
// // method 方法和url请求
// ajax.open(params.method,params.url)
// ajax.send(params.data)
// // 判断请求地址
// ajax.onreadystatechange = function(){
//     if(ajax.status === Status.Success&&ajax.readyState === Status.ReadyStatus){
//         console.log('我是成功的')
//     }
// }
// }
// const params = {method:'get',url:'fhoshfoihihfoihaofiiaof'}
// get(params)



/**是否请求成功  状态码的封装 */
enum Status{
    /**成功 */
    Success = 200,
    /**连接成功 */
    ReadyStatus = 4
}
/**定义params */
interface IParams{
    method:string,
    url:string,
    data?:any
}
function get(params:IParams){
let ajax = new XMLHttpRequest()
// method 方法和url请求
ajax.open(params.method,params.url)
ajax.send(params.data)
// 判断请求地址
ajax.onreadystatechange = function(){
    if(ajax.status === Status.Success&&ajax.readyState === Status.ReadyStatus){
        console.log('我是成功的')
    }
}
}
const params = {method:'get',url:'fhoshfoihihfoihaofiiaof'}
get(params)