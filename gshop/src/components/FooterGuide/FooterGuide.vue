<template>
<div class="footer_guide">
    <!--外卖-->
    <span class="guide_item" :class="{on: '/Msite' === $route.path}" @click="goto('/Msite')">
        <span class="item_icon">
            <i class="iconfont iconshop"></i>
        </span>
        <span>footer</span>
    </span>
    <!--搜索-->
    <span>
        ……
    </span>
</div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>

<!--以首页模块为例，其余模块结构相同-->
