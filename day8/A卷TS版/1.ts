// 获取到tbody标签
let tbody:HTMLTableSectionElement =  document.getElementsByTagName('tbody')[0]
let span:HTMLSpanElement = document.getElementsByTagName('span')[0]
let span1:HTMLSpanElement = document.getElementsByTagName('span')[1]
// 设置属性
interface shuxing{
    id:number,
    goods_name:string,
    price:number
}
let arr:Array<shuxing> =[
    {
      "id": 1,
      "goods_name": "vivo 手机 p30",
      "price": 1242
    },
    {
      "id": 2,
      "goods_name": "苹果手机 iphone plus",
      "price": 45000
    },
    {
      "id": 3,
      "goods_name": "宝马 X7 4驱",
      "price": 750000
    },
    {
      "id": 4,
      "goods_name": "宝马 5系 2驱",
      "price": 450000
    },
    {
      "id": 5,
      "goods_name": "锤子手机 200G",
      "price": 2000
    },
    {
      "id": 6,
      "goods_name": "华为手机 P40",
      "price": 5000
    },
    {
      "id": 7,
      "goods_name": "红米 手机",
      "price": 1200
    },
    {
      "id": 8,
      "goods_name": "海尔电冰箱 3匹",
      "price": 980
    },
    {
      "id": 9,
      "goods_name": "苹果笔记本电脑 i9",
      "price": 20000
    },
    {
      "id": 10,
      "goods_name": "精品手机 华为 200G",
      "price": 3200
    }
  ]

  let arr1:Array<shuxing> = arr
  let cuiid:boolean=true
  let cuijg:boolean=true
//   渲染
// 封装一个xuangran函数  参数就是把属性放入
function xuanran(arr2:Array<shuxing>){
    // 先把tbody清空
    tbody.innerHTML=''
    // 遍历参数的数据e为形参
    arr2.forEach(e=>{
        // 创建tr标签
        let tr = document.createElement('tr')
        // 在tr标签里面用超级字符串添加td标签
        tr.innerHTML=`
                <td>${e.id}</td>
                <td>${e.goods_name}</td>
                <td>${e.price}</td>
        `
        // 把添加好的tr放入tbody中  进行添加数据  遍历完成
        tbody.appendChild(tr)
    })
    // 在span标签添加上数据的总长度
    span.innerHTML = String(arr1.length)
     // 获取到input框
     let numipt : HTMLInputElement = document.getElementsByTagName('input')[1]
     // 获取到总页数  数据的总长度 / 输入框输入的数字  进行向上取整 获取到应该有的页数
     let ym:number = Number(Math.ceil(arr1.length/Number(numipt.value)))
    //  清空span1的内容
    span1.innerHTML=''
    // for循环出ym的长度
    for(let i =0;i<ym;i++){
        // 创建一个span标签
        let span=document.createElement('span')
        // 在span标签上进行添加
        span.innerHTML=`
        <button onclick="go(this)">
        ${String(i+1)}
        </button>
        `
        // 把添加完成的span放入span1中
        span1.appendChild(span)
    }

}
// 对参数进行赋值  数据
// 调用函数
xuanran(arr1)

// 对id进行排序
// 封装pxid进行对id的排序 参数e对比button按钮
function pxid(e:HTMLButtonElement){
    // 判断cuiid  最初设置是true
    if(cuiid){
        arr1.sort(function(a,b){
            // 通过sort进行排序
            return b.id-a.id
        })
        e.innerHTML='排序1'
        // 进行参数e找到button按钮
        cuiid =false
        // 对cuiid最后进行赋值为fales
    }else{
        arr1.sort(function(a,b){
            // 通过sort进行排序
            return a.id-b.id
        })
        e.innerHTML='排序2'
        // 找到button为排序2的
        cuiid = true
        // 对cuiid赋值为true
    }
    xuanran(arr1)
    // 进行渲染页面
}
// 对照价格进行排序
// 封装pxjg函数  对价格进行排序  e还是找button的按钮
function pxjg(e:HTMLButtonElement){
    // 判断 cuijg  默认设置是true
    if(cuijg){
        // 全部数据进行sort排序
        arr1.sort(function(a,b){
            return b.price-a.price
            // 找到price价格 进行排序
        })
        // 找到button按钮 为排序1
        e.innerHTML = '排序1'
        // 对cuijg赋值为false
        cuijg = false
    }else{
        // 对所有数据 进行sort排序
        arr1.sort(function(a,b){
            return a.price-b.price
        })
        // 找到button为排序2的button按钮
        e.innerHTML='排序2'
        // 对cuijg进行为true的赋值
        cuijg = true
    }
    // 进行渲染
    xuanran(arr1)
}
// 搜索
// 封装ss的函数  e参数 找到input框
function ss(e:HTMLInputElement){
    // let出input内的内容
    let value = e.value
    // 对所有的数据中的goods_name进行filter过滤  找到对应的数据
    var arr = arr1.filter(e=>{
        // 对找到的数据  放到一个数组中
        return e.goods_name.includes(value)
    })
    xuanran(arr)
}
// 分页
// 封装分页的函数 e参数 找到input框
function fenye(e:HTMLInputElement){
    // 判断输入框的内容不能为空
    if(e.value!=''){
        // 通过总数据的长度 比如是10，用10/输入框的数字  从而获取到页面的数量
        let ym :number =Number(Math.ceil(arr1.length/Number(e.value)))
        // 把span1的数据清空
        span1.innerHTML=''
        // 通过for循环把获取到页面数量 
        for(let i =0; i< ym;i++){
            // 创建span标签
            let span = document.createElement('span')
            // 在创建的span标签中添加数据
            span.innerHTML=`
            <button onclick="go(this)">
            ${String(i + 1)}
            </button>
            `
            span1.appendChild(span)
            // 把创建好的span标签放到span1中
        }
        // 获取到想要获取到的input框
        let numipt:HTMLInputElement = document.getElementsByTagName('input')[1]
        // 获取到想要获取的button按钮
        let btn:HTMLButtonElement = document.getElementsByTagName('button')[2]
        // 点击分页的按钮  让他-1*input框的数据
        let ksindex = (Number(btn.innerHTML.trim())-1)*Number(numipt.value)
        // 点击分页的按钮  让他*input框的数据
        let jsindex = Number(btn.innerHTML.trim())*Number(numipt.value)
        // 把获取到的数据传入arr3这个数组中
        let arr3 = arr.slice(ksindex,jsindex)
        // 进行渲染数据
        xuanran(arr3)
    }
    // 让输入的数值只能小于10
    if(Number(e.value)>10){
        e.value='10'
    }
    // 让输入的数值不能小于1
    if(Number(e.value)<1){
        e.value='1'
    }
}
// 点击分页按钮
// 封装一个go的函数 参数e获取到button按钮
function go(e:HTMLButtonElement){
    // 获取到想要获取到的input按钮
    let numipt : HTMLInputElement = document.getElementsByTagName('input')[1]
    // 点击分页的按钮  让他-1*input框的数据
    let ksindex = (Number(e.innerHTML.trim())-1)*Number(numipt.value)
    // 点击分页的按钮  让他*input框的数据
    let jsindex = Number(e.innerHTML.trim())*Number(numipt.value)
    // 把获取到的数据传入arr3这个数组中
    let arr3 = arr.slice(ksindex,jsindex)
    // 进行渲染数据
    xuanran(arr3)
}
