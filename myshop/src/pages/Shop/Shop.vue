<template>
<div>
    <ShopHeader />
    <div class="tab">
        <div class="tab-item">

            <router-link to="/shop/goods">
                点餐
            </router-link>
        </div>
        <div class="tab-item">

            <router-link to="/shop/ratings">
                评价
            </router-link>
        </div>
        <div class="tab-item">

            <router-link to="/shop/info">
                商家
            </router-link>
        </div>
    </div>
    <router-view />

</div>
</template>

<script>
import ShopHeader from '../../components/ShopHeader/ShopHeader.vue'
export default {
    data() {
        return {}
    },
    mounted() {
        this.$store.dispatch('getShopInfo')
    },
    computed: {},
    methods: {},
    components: {
        ShopHeader
    }
}
</script>

<style lang="stylus" scoped>
@import "../../common/stylus/mixins.styl"
@import "./Shop.styl"
</style>
