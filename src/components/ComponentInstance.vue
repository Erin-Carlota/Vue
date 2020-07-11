<template>
    <div>
        <p>{{ msg }}</p>
        <button @click="msg = '生命周期钩子函数重新渲染'">修改数据</button>
    </div>
</template>
<script>
export default {
    name: "Life",
    data() {
        return {
            msg:"生命周期钩子函数"
        };
    },
    beforeCreate() {
        // 做初始化操作
        console.log("组件创建之前:beforeCreate");
    },
    created() {
        // 做初始化操作
        console.log("组件创建之后:created");
    },
    beforeMount(){
        // 判断组件渲染之前要做的额外事前
        console.log("组件渲染之前:beforeMount");
    },
    mounted(){
        // 网络请求
        console.log("组件渲染之后:mounted");
    },
    beforeUpdate(){
        console.log("数据更新之前:beforeUpdate");
    },
    updated(){
        console.log("数据更新之后:updated");
    },
    beforeDestory(){
        // 将组件中需要清除掉的在次函数中清除
        // 定时器、持续事件、组件数据清空、清除未完成的网络请求
        console.log("组件销毁之前:beforeDestory");
    },
    destoryed(){
        console.log("组件销毁之后:destoryed");
    }
};
</script>