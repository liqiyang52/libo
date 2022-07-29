/**
 * 思路：
 * 1.要获取到添加到标签里面的标签，获取标签
 * 2.弄好随机抽选的数据  数据里面要包括  id  name  还有楼层
 * 3.定义类型 用interface 定义数据里面数据的类型
 * 4.获取点击按钮的按钮
 * 5.对按钮的事件进行处理
 * 6.把获取到的随机的name  放入一个空的标签里面
 * 7.开始指定一二层，既然有lou这个属性，就是楼层
 * 8.直接判断楼层，就可以指定想要随机的楼层
 * 9.把获取到的数据放到标签就完事了
 */

// 获取到存放数据的标签
let ul1:HTMLUListElement = document.getElementsByTagName('ul')[0]
// 随机出来的添加到的标签，获取到  span标签
let span:HTMLSpanElement = document.getElementsByTagName('span')[1]
let span1:HTMLSpanElement = document.getElementsByTagName('span')[0]
// 定义数据
let list = [
    {
        lou:1,
        name:'一层卷饼',
        id:1
    },
    {
        lou:1,
        name:'一层包子',
        id:2
    },
    {
        lou:1,
        name:'一层快餐',
        id:3
    },
    {
        lou:1,
        name:'一层面',
        id:4
    },
    {
        lou:1,
        name:'一层汉堡',
        id:5
    },
    {
        lou:2,
        name:'二层麻辣烫',
        id:6
    },
    {
        lou:2,
        name:'二层凉面',
        id:7
    },
    {
        lou:2,
        name:'二层粉',
        id:8
    },
    {
        lou:2,
        name:'二层快餐',
        id:9
    }
]
// 定义类型
interface arr {
    lou:number,   //对比的是食堂的一层二层
    name:string,  //对比的是店家
    id:number     //每一个特有的id 方便查询
}
// 定义出食堂的名单
const list1:Array<arr> = list

// 获取点击按钮
let button1:HTMLButtonElement = document.getElementsByTagName('button')[0]
let button2:HTMLButtonElement = document.getElementsByTagName('button')[1]
let button3:HTMLButtonElement = document.getElementsByTagName('button')[2]
let button4:HTMLButtonElement = document.getElementsByTagName('button')[3]

// 渲染数据 由于是渲染  不需要返回值  所以调用 void  
function xuanran():void{
    ul1.innerHTML='' //清空ul1中的数据
    list1.forEach(item=>{  //遍历一下所有的数据
        let li = document.createElement('li')  
        //创建li标签，把遍历的数据放li标签，然后存放到ul 进行渲染页面
        li.innerHTML=`
        <span>${item.name}</span>
        `
        ul1.appendChild(li)  //把已经存放数据的li标签  放进ul中
    })
}
// 调用函数  进行渲染
xuanran()
// var dan1 = list1[Math.floor(Math.random()*list1.length)]
// var dan2 = list1[Math.floor(Math.random()*list1.length)]
// 单抽
function danchou(){
    var dan1 = list1[Math.floor(Math.random()*list1.length)]
    span.innerHTML=dan1.name
}
function shuangchou(){
    var dan1 = list1[Math.floor(Math.random()*list1.length)]
    var dan2 = list1[Math.floor(Math.random()*list1.length)]
    span.innerHTML=`
    ${dan1.name},${dan2.name}`
}
function yiceng(){
    let yilou = []
    list1.forEach(item=>{
        if(item.lou==1){
            yilou.push(item)
            // var yi = yilou
            // console.log(yi)
            var yi = yilou[Math.floor(Math.random()*yilou.length)]
            console.log(yi)
            span.innerHTML=yi.name
        }
    })
}

function erceng(){
    let yilou = []
    list1.forEach(item=>{
        if(item.lou==2){
            yilou.push(item)
            // var yi = yilou
            // console.log(yi)
            var yi = yilou[Math.floor(Math.random()*yilou.length)]
            console.log(yi)
            span.innerHTML=yi.name
        }
    })
}



    function showTime() {
        var date = new Date();
        var year = date.getFullYear();
        var month = date.getMonth() + 1;  //因为month属性从0开始所以加1
        var day = date.getDate();   // 日
        var hour = date.getHours();
        var minute = date.getMinutes();
        var second = date.getSeconds();
        // @ts-ignore
        second = second < 10 ? "0" + second : second;
        var current = year + "-" + month + "-" + day +  " " + hour + ":" + minute + ":" + second;
        document.getElementById("time").innerHTML = current;
    }

    setInterval("showTime()", 1000);//每隔1000毫秒（即1秒）显示一次当前时间

