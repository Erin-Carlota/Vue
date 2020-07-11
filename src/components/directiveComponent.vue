<template>
    <div>
        自定义指令
        <input v-focus type="text">
        <p v-red>{{ msg }}</p>
        <button @click=" msg = '嘿嘿嘿' ">修改</button>
    </div>
</template>
<script>
export default {
    name:"dir",
    data(){
        return{
            msg:"哈哈哈哈"
        }
    },
    // 局部指令，只能在当前组件中使用
    directives:{
        focus:{
            inserted(el){
                el.focus();
            }
        },
        red:{
            bind(el,binding,vnode,oldVnode){
                console.log("初始化");
            },
            inserted(el,binding,vnode,oldVnode){
                el.style.color = '#ff0000'
            },
            update(el,binding,vnode,oldVnode){
                console.log("指令有更新的时候调用");
            },
            componentUpdated(el,binding,vnode,oldVnode){
                console.log("指令有更新的时候调用!!");
            },
            unbind(el,binding,vnode,oldVnode){
                console.log("解绑调用");
            }
        }
    }
}
</script>
