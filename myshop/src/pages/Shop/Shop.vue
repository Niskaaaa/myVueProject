<template>
  <div>
    <ShopHeader/>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/shop/goods" replace>点餐</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/shop/ratings" replace>评价</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/shop/info" replace>商家</router-link>
      </div>
    </div>
    <keep-alive>
      <router-view/>
    </keep-alive>
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
