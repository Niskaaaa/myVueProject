<template>
<div>
    <div class="cartcontrol">
        <transition name="move">
            <div class="iconfont icon-remove-circle-outlin" v-if="food.count" @click="updateFoodCount(false)"></div>
        </transition>
        <div class="cart-count">{{food.count}}</div>
        <div class="iconfont icon-add-circle-outline" @click.stop="updateFoodCount(true)"></div>
    </div>
</div>
</template>

<script>
export default {
    props: {
        count: Number,
        food: Object

    },
    data() {
        return {}
    },
    created() {},
    computed: {},
    methods: {
        updateFoodCount(isAdd) {
            this.$store.dispatch('updateFoodCount', {
                isAdd,
                food: this.food
            })

        }
    },
}
</script>

<style lang="stylus" scoped>
@import "../../common/stylus/mixins.styl"
@import "./CartControl.styl"
</style>
