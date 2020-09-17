<template>
<section class="search">
    <HeaderTop title="搜索">

    </HeaderTop>
    <form class="search_form" action="#">
        <input type="search" name="search" placeholder="请输入商家或美食名称" class="search_input">
        <input type="submit" name="submit" class="search_submit">
    </form>
</section>
</template>

<script>
import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
export default {
    components: {
        HeaderTop
    }

}
</script>

<style lang="stylus" scoped>
@import '../../assets/mixins.styl';
@import './Search.styl';
</style>
