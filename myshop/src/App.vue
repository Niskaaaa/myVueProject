<template>
<div id="app">

    <router-view />
    <FooterGuide v-show="$route.meta.showFooter" />
</div>
</template>

<script>
/* eslint - disable */
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
import {
    mapActions
} from 'vuex'
/* import {
    reqFoodTypes,
    reqAddress
} from './api' */

export default {
    /*   async mounted() {
          this.$store.dispatch('getAddress')

     
     }, */

    mounted() {
        this.getAddress()

    },
    methods: {
        ...mapActions(['getAddress']) //一个数组转为用逗号分隔的参数序列

    },
    components: {
        FooterGuide
    }
}
</script>

<style lang="stylus" scoped>
@import './assets/index.styl';
@import './assets/mixins.styl';
</style>
