<template>
    <div>
        <slot :user="user"></slot>
        <slot name="head" :msg="msg">我是默认值1</slot>
        SlotChild
        <slot name='foot'>我是默认值2</slot>
        <p>{{ $parent.message }}</p>
    </div>
</template>
<script>
export default {
    name:"SlotChild",
    data(){
        return{
            msg:"我是插槽数据",
            user:{
                name:"iwens"
            }
        }
    }
}
</script>