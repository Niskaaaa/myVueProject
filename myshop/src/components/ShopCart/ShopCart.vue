<template>
<div>
    <div class="shopcart">
        <div class="content">
            <div class="content-left" @click="toggleShow()">
                <div class="logo-wrapper">
                    <div class="logo" :class="{highlight:totalCount}"> <i class=" iconfont icon-shopping_cart highlight"></i> </div>
                    <div class="num" v-if="totalCount">{{totaloCount}}</div>
                </div>
                <div class="price" :class="{highlight:totalCount}">￥{{totalPrice}}</div>
                <div class="desc">另需配送费￥{{info.deliveryPrice}} 元</div>
            </div>
            <div class="content-right">
                <div class="pay" :class="payClass"> {{payText}} </div>
            </div>
        </div>
        <div class="shopcart-list" v-show="isShow">
            <div class="list-header">
                <h1 class="title">购物车</h1> <span class="empty">清空</span>
            </div>
            <div class="list-content">
                <ul>
                    <li class="food" v-for="(food,index) in cartFoods" :key="index"> <span class="name">红枣山药糙米粥</span>
                        <div class="price"><span>￥10</span></div>
                        <div class="cartcontrol-wrapper">
                            <CartControl :food="food" />
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class=" list-mask" v-show="isShow" @click="toggleShow()" style=" display: none;">
    </div>
</div>
</template>

<script>
import {
    mapGetters,
    mapState
} from 'vuex'
import CartControl from '../CartControl/CartControl.vue'
export default {
    data() {
        return {
            isShow: false
        }
    },
    created() {},
    computed: {
        ...mapState({
            cartFoods: (state) => state.state.cartFoods,
            info: (state) => state.state.info,
        }),

        ...mapGetters({
            totalCount: (state) => state.state.totalCount,
            totalPrice: (state) => state.state.totalPrice,
        }),
        payClass() {

            const {
                totalPrice
            } = this

            const {
                minPrice
            } = this.info

            return totalPrice >= minPrice ? 'enough' : 'not-enough'

        },
        payText() {
            const {
                totalPrice
            } = this

            const {
                minPrice
            } = this.info

            if (totalPrice === 0)
                return `￥${minPrice}元起送`

            else if (totalPrice < minPrice) {
                return `还差￥${minPrice-totalPrice}元起送`
            } else return '结算'

        }
    },
    methods: {
        toggleShow() {
            this.isShow = !this.isShow
        }
    },
    components: {
        CartControl
    }
}
</script>

<style lang="stylus" scoped>
@import "../../common/stylus/mixins.styl";
@import "./ShopCart.styl"
</style>
