<template>
  <div class="da">
    <div class="da1">
<input type="text" placeholder="请输入搜索的内容">
    </div>
    <table>
      <thead>
        <tr class="tr1">
          <th>编号</th>
          <th>名称</th>
          <th>价格</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in shuju" :key="item.id">
          <td>{{item.id}}</td>
          <td>{{item.goods_name}}</td>
          <td>{{item.price}}</td>
        </tr>
      </tbody>
    </table>
    <div class="da2">
      <span>每页<input type="number" class="input" />条,共10条</span>
      <ul>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
      </ul>
    </div>
  </div>
</template>
<script>
import list from '/public/data.json'
export default {
  
  data(){
    return{
      shuju:[]
    }
  },

  methods: {
    // 获取数据
    xuanran(){
      this.shuju = list.data
      console.log(list)
      console.log(this.shuju)
    },
  },
  created() {
      this.xuanran()
    },
}
</script>
<style scope>
 *{
   margin: 0;
   padding: 0;
 }
 .da{
   width: 100%;
   height: 100%;
 }
 .da1{
   text-align: center;
 }
 table{
   width: 100%;
   text-align: center;
 }
 .tr1{
   background-color: rgb(106, 165, 241);
   height: 60px;
   color: white;
 }
 td{
   border-right: solid 1px red;
   border-bottom: solid 1px red;
 }
 .input{
   width: 30px;
 }
 .da2{
   width: 100%;
   display: flex;
   justify-content: space-around;
   margin-top: 15px;
   font-size: 20px;
 }
 ul{
   display: flex;
 }
 li{
   list-style: none;
   width: 25px;
   height: 25px;
   border: 1px solid #4498b9;
   text-align: center;
   line-height: 25px;
 }
</style>