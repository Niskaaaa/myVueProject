<template>
<div class="food" v-if="isShow">
    <div class="food-content">
        <div class="image-header"> <img v-lazy="food.image">
            <p class="foodpanel-desc">{{food.info}}</p>
            <div class="back" @click="toggleShow"> <i class="iconfont icon-arrow_left"></i> </div>
        </div>
        <div class="content">
            <h1 class="title">{{food.name}}</h1>
            <div class="detail"> <span class="sell-count">月售 {{food.sellCount}} 份</span> <span class="rating">好评率 {{food.rating}}%</span> </div>
            <div class="price"> <span class="now">￥{{food.price}}</span> <span class="old" style="display: none;">￥{{food.oldPrice}}</span> </div>
            <div class="cartcontrol-wrapper">
                <CartControl :food="food" />
            </div>
        </div>
    </div>
    <div class="food-cover" @click="toggleShow()"></div>
</div>
</template>

<script>
import CartControl from '../CartControl/CartControl.vue'
export default {
    data() {
        return {
            isShow: false
        }
    },
    created() {},
    computed: {},
    methods: {

        toggleShow() {
            this.isShow = !this.isShow
        }
    },
    props: {
        food: Object

    },
    components: {
        CartControl
    }

}
</script>

<style lang="stylus" scoped>
@import "../../common/stylus/mixins.styl";
@import "./Food.styl"
</style>
