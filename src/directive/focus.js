import Vue from "vue"
// 全局指令
Vue.directive("focus", {
    inserted(el) {
        el.focus(); // focus是js的获取input焦点的方法
    }
})

Vue.directive('red',{
    inserted(el){
        el.style.color = '#ff0000'
    }
})