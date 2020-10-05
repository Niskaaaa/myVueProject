<template>
<div>
    <div class="shop_container">
        <ul class="shop_list" v-if="shops.length">
            <li class="shop_li border-1px" v-for="(shop,index) in shops" :key="index" @click="$router.push('/shop')">
                <a>
                    <div class="shop_left">
                        <img class="shop_img" :src="baseImgUrl+shop.image_path">
                    </div>
                    <div class="shop_right">
                        <section class="shop_detail_header">
                            <h4 class="shop_title ellipsis">{{shop.name}}</h4>
                            <ul class="shop_detail_ul">
                                <li class="supports" v-for="(support,index) in shop.supports" :key="index">{{support.icon_name}}</li>
                            </ul>
                        </section>
                        <section class="shop_rating_order">
                            <section class="shop_rating_order_left">
                                <Star :score="shop.rating" :size="24" />
                                <div class="rating_section">
                                    {{shop.rating}}
                                </div>
                                <div class="order_section">
                                    月售{{shop.recent_order_num}}单
                                </div>
                            </section>
                            <section class="shop_rating_order_right">
                                <span class="delivery_style delivery_right">{{shop.delivery_mode.text}}</span>
                            </section>
                        </section>
                        <section class="shop_distance">
                            <p class="shop_delivery_msg">
                                <span>¥20起送</span>
                                <span class="segmentation">/</span>
                                <span>配送费约¥5</span>
                            </p>
                        </section>
                    </div>
                </a>
            </li>
        </ul>
        <ul v-if="!shops.length">
            <li v-for="items in 6" :key="items">
                <img src="./images/shop_back.svg" alt="back">
            </li>
        </ul>
    </div>
</div>
</template>

<script>
import {
    mapState
} from 'vuex'
import Star from '../Star/Star.vue'
export default {
    data() {
        return {

            baseImgUrl: 'http://cangdu.org:8001/img/'
        }
    },
    created() {},
    computed: {
        ...mapState({
            shops: (state) => state.state.shops,
        })
    },
    components: {
        Star
    }

}
</script>

<style lang="stylus" scoped>
@import '../../assets/mixins.styl';
@import './ShopList.styl';
</style>
