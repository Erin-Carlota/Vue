<template>
    <div>
        MyComponent:{{ title }}:{{ age }}
        <ul>
            <li v-for="(item,index) in banner" :key="index">{{item }}</li>
        </ul>
        <p v-if="user">{{ user.username }}</p>
    </div>
</template>
<script>
export default {
    name:"MyComponent",
    data(){
        return{

        }
    },
    // props:["title"]
    props:{
        title:{
            type:Number
        },
        age:{
            type:[Number,String],
            default:1
        },
        banner:{
            type:Array,
            required:true
        },
        user:{
            type:Object,
            default:function(){
                return{
                    username:"iwen"
                }
            }
        }
    }
}
</script>
<style lang="less" scoped>

li{
    list-style: none;
}

</style>