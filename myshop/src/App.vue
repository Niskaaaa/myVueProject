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
    reqFoodTypes,
    reqAddress
} from './api'
export default {
    async mounted() {
        this.$store.dispatch('getAddress')

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
