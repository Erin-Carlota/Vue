<template>
  <div id="app">
    <!-- <MyComponent :title="num" :age="age" :banner="banner" demo="hello"></MyComponent> -->
    <ul>
      <li>hello</li>
      <li>world</li>
    </ul>
    <hr>
    <!-- <Parent /> -->
    <hr>
    <!-- <SlotParent /> -->
    <hr>
    <keep-alive include="Home">
      <component v-bind:is="currentPage"></component>
    </keep-alive>
    <button @click="changeComponent">切换组件</button>
    <hr>
    <p>{{ $root.foo }}</p>
    <p>{{ $root.getVue() }}</p>
    <hr>
    <!-- <ComponentInstance /> -->
    <hr>
    <AnimComponent />
    <hr>
    <DirectiveComponent />
  </div>
</template>

<script>

import MyComponent from "./components/MyComponent"
import Parent from "./components/group/Parent"
import SlotParent from "./components/slotComponents/SlotParent"

// import HomePage from "./components/pages/HomePage"
// 异步加载
const HomePage = () => import("./components/pages/HomePage");
import UserPage from "./components/pages/UserPage"
import ComponentInstance  from "./components/ComponentInstance"

import AnimComponent from "./components/AnimComponent"
import DirectiveComponent from "./components/directiveComponent"

export default {
  name: 'App',
  data(){
    return{
      num:100,
      age:"300",
      banner:["导航","新闻"],
      currentPage:UserPage,
      flag:true
    }
  },
  components: {
    MyComponent,
    Parent,
    SlotParent,
    HomePage,
    UserPage,
    ComponentInstance,
    AnimComponent,
    DirectiveComponent
  },
  methods:{
    changeComponent(){
      if(this.flag){
        this.currentPage = HomePage
      }else{
        this.currentPage = UserPage
      }
      this.flag = !this.flag
    }
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
