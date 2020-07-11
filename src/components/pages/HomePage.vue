<template>
    <div>
        Home:{{ msg }}
        <button @click="msg = '我是修改之后的数据'">修改数据</button>
    </div>
</template>
<script>
export default {
    name:"Home",
    data(){
        return{
            msg:"我是修改之前的数据"
        }
    }
}
</script>