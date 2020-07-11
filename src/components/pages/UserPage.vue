<template>
    <div>
        User:{{ msg }}
        <button @click="msg = '哈哈哈哈'">修改数据</button>
    </div>
</template>
<script>
export default {
    name:"User",
    data(){
        return{
            msg:"呵呵呵呵"
        }
    }
}
</script>