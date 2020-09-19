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
    reqFoodTypes
} from './api'
export default {
    async mounted() {
        console.log("1")
        const result = await reqFoodTypes()
        console.log(result)

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
