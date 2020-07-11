<template>
    <div>
        <div>
            <button @click="flag = !flag">切换</button>
            <transition name="fade">
                <p v-if="flag">HelloAnim</p>
            </transition>
        </div>
        <div>
            <button @click="flagAnim = !flagAnim">切换</button>
            <transition
                name="custom-classes-transition"
                enter-active-class="animated rollIn"
                leave-active-class="animated rollOut"
            >
                <p v-if="flagAnim">HelloAnim</p>
            </transition>
        </div>
    </div>
</template>
<script>
export default {
    name: "Anim",
    data() {
        return {
            flag: true,
            flagAnim: true
        };
    }
};
</script>
<style scoped>
.fade-enter,
.fade-leave-to {
    opacity: 0;
    font-size: 15px;
}

.fade-enter-to,
.fade-leave {
    opacity: 1;
    font-size: 30px;
}

.fade-enter-active,
.fade-leave-active {
    transition: all 1s;
}
</style>