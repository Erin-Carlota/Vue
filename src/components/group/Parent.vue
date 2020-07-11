<template>
    <div>
        Parent:{{ msg }}:{{ username }}:{{ msg2 }}
        <!-- <Child @update:msg2Event="getMsg2Handle" @onEvent="getMsgHandle" @myChange="getChangeHandle"/> -->
        <Child :msg2Event.sync="msg2" @onEvent="getMsgHandle" @myChange="getChangeHandle"/>
    </div>
</template>
<script>

import Child from "./Child"

export default {
    name:"Parent",
    data(){
        return{
            msg:"",
            username:"",
            msg2:""
        }
    },
    components:{
        Child
    },
    methods:{
        getMsgHandle(data){
            this.msg = data
        },
        getChangeHandle(data){
            this.username = data
        },
        getMsg2Handle(data){
            console.log(data);
        }
    }
}
</script>