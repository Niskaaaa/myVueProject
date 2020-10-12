<template>
<div>
    <div class="goods">
        <div class="menu-wrapper" ref="menuWrapper">
            <ul>
                <!--current-->
                <!--currentIndex-->
                <li class="menu-item" v-for="(good, index) in goods" :key="index" :class="{current: currentIndex===index}" @click="clickMenuItem(index)"> <span class="text bottom-border-1px"> <img class="icon" v-if="good.icon" :src="good.icon"> {{good.name}} </span> </li>
            </ul>
        </div>
        <div class="foods-wrapper">
            <ul ref="foodsWarpperUl">
                <li class="food-list food-list-hook" v-for="(good, index) in goods" :key="index" :class="{current:index==currentIndex}">
                    <h1 class="title">{{good.name}}</h1>
                    <ul>
                        <li class="food-item bottom-border-1px" v-for="(food, index) in good.foods" :key="index">
                            <div class="icon"> <img width="57" height="57" :src="food.icon"> </div>
                            <div class="content">
                                <h2 class="name">{{food.name}}</h2>
                                <p class="desc">{{food.description}}</p>
                                <div class="extra"> <span class="count">月售{{food.sellCount}}份</span> <span>好评率{{food.rating}}%</span> </div>
                                <div class="price"> <span class="now">￥{{food.price}}</span> <span class="old" v-if="food.oldPrice">￥{{food.oldPrice}}</span> </div>
                                <div class="cartcontrol-wrapper"> CartControl </div>
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</div>
</template>

<script>
import BScroll from 'better-scroll'
import {
    mapState
} from 'vuex'
//列表显示之后创建

export default {
    data() {
        return {
            scrollY: 0,
            tops: []
        }
    },
    created() {},
    computed: {
        ...mapState({

            goods: (state) => state.state.goods,
            //categorys: (state) => state.state.categorys,
            //userInfo: (state) => state.state.userInfo,

        }),
    },
    methods: {},
    mounted() {

        this.$store.dispatch('getShopGoods', () => { // 数据更新后执行，通知更新
            this.$nextTick(() => { // 列表数据更新显示后执行
                new BScroll('.menu-wrapper')
                new BScroll('.foods-wrapper')
            })
        })
    }
}
</script>

<style lang="stylus" scoped>
@import '../../../assets/mixins.styl';
@import './ShopGoods.styl';
</style>
