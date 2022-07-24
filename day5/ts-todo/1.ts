/**
 * 数组中里面内容的类型，用interface
 */
interface Array1{
    checked:boolean,
    id:number,
    value:string
}
// 用type对数组中的数据进行类型赋值
type Todolist = Array<Array1>

/**获取ul标签 */
       //获取标签 
let ul: HTMLUListElement = document.getElementsByTagName('ul')[0]

// 获取底部的按钮

// 未选中的标签
let weixuan:HTMLElement | null=document.getElementById('weixuan')
// 已选中的标签
let yixuan:HTMLElement | null=document.getElementById('yixuan')
// 清空的标签
let qing:HTMLElement | null=document.getElementById('qing')

/**定义新的数组 */
// 引用type对数组中数据进行类型赋值的标签Todolist
let todoArray:Todolist=[]

/**
 * 定义一个数组中自增的id
 */
let nextId :number = 1


/**
 * 获取新增数据内容
 */
function add(event:{keyCode:number}){
    if(!event||event.keyCode===13){
        // 获取到input框的内容
        // @ts-ignore     //隐藏报错
        let inputValue:string=document.getElementsByClassName('q4')[0].value
        if(inputValue){
            circulation(inputValue)
            // @ts-ignore
            document.getElementsByClassName('q4')[0].value=''
        }
    }
}

/**
 * 新增数据，并且保证数据id的唯一性
 */
function circulation(inputValue:string){
    // 首先获取ul标签
    // 存储数据，li标签的循环
    if(todoArray.length>0){
        nextId++
    }
    let addvalue:Array1={
        checked:false,
        id:nextId,
        value:inputValue
    }
    todoArray.push(addvalue)
    circulationHtml(todoArray)
}

/**
 * 根据数据的变化进行生产html
 */
function circulationHtml(data:Todolist,checkId?:number){
    ul.innerHTML=''
    data.forEach((item)=>{
        // 创建li标签
        let li:HTMLElement=document.createElement('li')
        if(item.id==checkId&&item.checked){
            li.className='completed'
        }else if(item.checked){
            li.className='need-completed'
        }else{
            li.className=''
        }
        li.id=`${item.id}`
        if(item.id==checkId&&item.checked){}
        li.innerHTML=`
            <div class='li-style-div'>
            <input type="checkbox" class="checkbox" id=${item.id} ${item.checked ? 'checked' :null} 
            onchange="changeCheckboxDate(this)"></input>
            <p class="li-style-div-content">${item.value}</p>
            </div>
            <button class= ${item.id == checkId && item.checked ? ' completed ' : item.checked ? "need-completed button-close " : "button-close"}  
            id=${item.id}  onclick=deleteDate(this)>X</button>
        `;
        ul.append(li)
    })
    changeLeftItem(data)
}

/**
 * 删除
 */
function deleteDate(ele:Array1){
    todoArray = todoArray.filter(item=>item.id!=ele.id)
    circulationHtml(todoArray)
}

/**
 * 选中的时候改变数据结构,并且添加样式
 */
function changeCheckboxDate(ele: Array1) {
    todoArray.forEach(item => {
        if (item.id == ele.id) {
            item.checked = !item.checked
        }
    })
    circulationHtml(todoArray, ele.id)
}

/**
 * 左下角条数的变化
 */
function changeLeftItem(data: Todolist) {
    let docuemnt: HTMLElement | null = document.getElementById('item-current')
    if (docuemnt) {
        docuemnt.innerText = data.length <= 0 ? '无事项' : data.length + '事项'
    }
}

/**
 * 待完成的事项
 * 获取待办事件,并且更新视图
 */
function toBeCompleted() {
    let result: Array1[] = todoArray.filter(item => !item.checked)
    circulationHtml(result)
    footerButton('completed_todo')
}

/**
 * 清空所有
 */

function clearAll() {
    todoArray = []
    ul.innerHTML = ''
    footerButton('clear_completed')
}

/**
 * 查看所有
 */
function viewAllInfo() {
    circulationHtml(todoArray)
    footerButton('allinfo')
}

/**
 * 定义底部按钮接口类型
 */
interface ButtonArry {
    name: HTMLElement | null,
    key: string
}
/**
 * 底部元素新增样式
 */

function footerButton(className: string): void {
    const buttonArry: Array<ButtonArry> = [
        {
            name: weixuan,
            key: "weixuan"
        },
        {
            name: yixuan,
            key: "yixuan"
        },
        {
            name: qing,
            key: "qing"
        },
    ]
    buttonArry.forEach(item => {
        if (item && item.key === className) {
             //@ts-ignore
           item.name.classList.add('clickButton')
        } else {
             //@ts-ignore
            item.name.classList.remove('clickButton')
        }
    })
}