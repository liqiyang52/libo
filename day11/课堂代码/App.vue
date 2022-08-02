<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/> -->

  
  <div>
  <h1>我是vue3</h1>
  我叫:{{name}} <br>
  我今年{{age}}岁了<br>
  我是{{sex}}孩子 <br>
  <button @click="arr">点我试试看</button>
  </div>
</template>
<script lang='ts'>
/**
vue3
vue3中是没有this指向的  setup是一个函数 
vue3中的setup执行顺序是高于vue2中的created的

ref
定义函数的响应式

 */
import {ref} from 'vue'
export default {
  setup(){
    let name = '颜帅'
    let age = 108
    let sex = ref('男')
    const arr = () =>{
      alert(`我是${name},我${age}岁,我是${sex.value}孩子`)
      if(sex.value=='男'){
        sex.value='女'
      }else{
        sex.value='男'
      }
    }
    return{
      name,
      age,
      arr,
      sex
    }
  }
}
</script>
<style lang="scss">
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

// nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
button{
  width: 100px;
  height: 50px;
  border-radius: 100px;
  background-color: rgb(0, 255, 42);
}
</style>
