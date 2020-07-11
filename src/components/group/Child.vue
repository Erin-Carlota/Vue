<template>
    <div>
        Child
        <input type="text" v-model="username" @keyup="changeHandle">
        <p>{{ username }}</p>
        <button @click="sendMsgHandle">发送数据</button>
        <button @click="sendMsg2Handle">发送数据2</button>
    </div>
</template>
<script>
export default {
    name:"Child",
    data(){
        return{
            msg:[1,2,3],
            username:"",
            msg2:"数据"
        }
    },
    methods:{
        sendMsgHandle(){
            this.$emit('onEvent',this.msg)
        },
        changeHandle(){
            this.$emit("myChange",this.username)
        },
        sendMsg2Handle(){
            this.$emit("update:msg2Event",this.msg2)
        }
    }
}
</script>