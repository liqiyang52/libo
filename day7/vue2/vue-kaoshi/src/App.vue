<template>
  <div>
    <input type="text" v-model="qq" @blur="ss()">
    <thead>
      <tr class="q1">
        <th>编号 <img src="./assets/arrow-red.png" @click="pai1()"  alt=""></th>
        <th>名称</th>
        <th>价格 <img src="./assets/arrow-down.png" @click="pai2()"  alt=""></th>
      </tr>
      <tbody>
        <tr class="q2" v-for="item in arr" :key="item.id">
          <td>{{item.id}}</td>
          <td>{{item.goods_name}}</td>
          <td>{{item.price}}</td>
        </tr>
      </tbody>
    </thead>
    <div class="db">
      <p>
        每页<input
          type="text"
          class="ipt"
          v-model="value1"
          @keyup.enter="ts()"
        />条，共10条
      </p>
      <ul>
      </ul>
    </div>
  </div>
</template>
<script>
import list from './assets/data.json'
export default {
  components:{
    list
  },
  data(){
    return{
      arr:'',
      id:'',
      aa:0,
      bb:0,
      qq:'',
      value1:''
    }
  },
  methods:{
  
    // 搜索功能
    ss(){
      // 把所有的数据获取到
      var ss1 = this.arr
      // 判断双向绑定的数据是不是自己想要的数据  如果是的话，把数据放到新的数组中
      var ss2 = ss1.filter((item)=>{
        return item.goods_name.includes(this.qq)
      })
      // 把全部数据的值 进行赋值  让双向绑定的值 进行复制  如果返回的true就赋值  如果fales就没有数据
      this.arr = ss2
      // 判断双向绑定的数据是不是为空  如果是空的话
      if(this.qq==''){
        // 就对全部数据进行重新赋值
        this.arr = list.data
      }
    },
    xuanran(){
      // 获取到json中的全部的数据
     this.arr = list.data
    },
    pai3(){
      // 获取到数据的id
      var id1 = this.arr.forEach(item=>{
        this.id = item.id
      })
    },
    pai2(){
      // 判断bb是不是为0
      if(this.bb == 0){
        // 如果是的话，对她进行倒叙
        this.arr = this.arr.sort(function(a,b){
          // b-a的方式进行倒叙
          return b.price - a.price
        })
        this.bb = 1
      }else{
        // 和上面一样
        this.arr = this.arr.sort(function(a,b){
          return a.price - b.price
        })
        this.bb = 0
      }
    },
    pai1(){
      // 同上
      if(this.aa == 0){
        this.arr = this.arr.sort(function(a,b){
          return b.id - a.id
        })
        this.aa = 1
      }else{
        this.arr = this.arr.sort(function(a,b){
          return a.id - b.id
        })
        this.aa = 0
      }
    }
  },
  created(){
    this.xuanran()
    this.pai3()
  }
}
</script>
<style scope>
img{
  width: 25px;
  height: 20px;
  display: inline-block;
}
*{
  padding: 0;
  margin: 0;
}
 .q1{
   width: 1536px;
   height: 30px;
   display: flex;
   justify-content: space-between;
   background-color: #929191;
   margin-top: 10px;
   line-height: 30px;
 }
 th{
   width: 100%;
   height: 100%;
 }
 .q2{
   width: 1536px;
   height: 30px;
   display: flex;
   justify-content: space-between;
   /* background-color: #929191; */
   margin-top: 10px;
   line-height: 30px;
 }
 td{
   width: 100%;
   height: 100%;
   text-align: center;
 }
 .db {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
p {
  width: 40%;
}
ul {
  width: 40%;
  /* margin: 0px; */
  /* padding: 0px; */
  text-align: right;
  margin-right: 300px;
}
span {
  display: inline-block;
  padding: 5px 10px;
  border: 1px solid #000;
  /* margin: 0px 5px; */
}
</style>