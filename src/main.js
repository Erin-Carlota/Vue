import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
// import "./directive/focus"

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  data: {
    foo: 1
  },
  methods:{
    getVue(){
      return "Hello"
    }
  }
}).$mount('#app')
