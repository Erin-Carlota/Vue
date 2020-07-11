<template>
    <div>
        SlotParent
        <SlotChild>
            <template v-slot:head="slotProps">
                <h3>我是头部{{ demo }}:{{ slotProps.msg }}</h3>
            </template>
            <template #foot>
                <h3>我是底部{{ demo }}</h3>
            </template>
            <template v-slot:default="{ user }">
                <h3>哈哈哈:{{ user.name }}</h3>
            </template>
            <!-- <template slot="default" slot-scope="slotProps">
                <h3>哈哈哈:{{ slotProps.user.name }}</h3>
            </template> -->
        </SlotChild>
    </div>
</template>
<script>
import SlotChild from "./SlotChild";

export default {
    name: "SlotParent",
    data() {
        return {
            demo: "我是demo",
            message:"我是SlotParent的数据!!"
        };
    },
    components: {
        SlotChild
    }
};
</script>