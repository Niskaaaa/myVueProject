<template>
<div id="app">
    <img src="./assets/logo.png">

    <router-view />
    <FooterGuide />
</template>

<script>
/* eslint-disable indent */
import FooterGuide from './components/FooterGuide/FooterGuide.vue'
export default { // eslint-disable-next-line indent
    components: { // eslint-disable-next-line indent
        FooterGuide

    }
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
