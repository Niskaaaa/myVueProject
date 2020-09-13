<template>
<div id="app">
    APP
    <router-view />
    <FooterGuide />
</div>
</template>

<script>
/* eslint - disable */
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
export default {
    components: {
        FooterGuide
    }
}
</script>

<style lang="stylus" scoped>
@import './assets/index.styl';
@import './assets/mixins.styl';
</style>
