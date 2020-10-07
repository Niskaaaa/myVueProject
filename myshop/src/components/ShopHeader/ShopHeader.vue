<template>
<div class="shop-header">
    <nav class="shop-nav">
        <a class="back" @click="$router.back()">
            <i class="iconfont icon-arrow_left"></i>
        </a>
    </nav>
    <div class="shop-content">
        <img class="content-image">
        <div class="header-content">
            <h2 class="content-title">
                <span class="content-tag">
                    <span class="mini-tag">品牌</span>
                </span>
                <span class="content-name">{{}}</span>
                <i class="content-icon"></i>
            </h2>
            <div class="shop-message">
                <span class="shop-message-detail">{{}}</span>
                <span class="shop-message-detail">月售{{}}单</span>
                <span class="shop-message-detail">
                    {{}}
                    <span>约{{}}分钟</span>
                </span>
                <span class="shop-message-detail">距离{{}}</span>
            </div>
        </div>
    </div>

    <div class="shop-header-discounts">
        <div class="discounts-left">
            <div class="activity">
                <span class="content-tag">
                    <span class="mini-tag">{{}}</span>
                </span>
                <span class="activity-content ellipsis">{{}}</span>
            </div>
        </div>
        <div class="discounts-right">
            {{}}个优惠
        </div>
    </div>

    <transition name="fade">
        <div class="shop-brief-modal" style="display:none">
            <div class="brief-modal-content">
                <h2 class="content-title">
                    <span class="content-tag">
                        <span class="mini-tag">品牌</span>
                    </span>
                    <span class="content-name">{{i}}</span>
                </h2>
                <ul class="brief-modal-msg">
                    <li>
                        <h3>{{}}</h3>
                        <p>评分</p>
                    </li>
                    <li>
                        <h3>{{}}单</h3>
                        <p>月售</p>
                    </li>
                    <li>
                        <h3>{}</h3>
                        <p>约{{}}分钟</p>
                    </li>
                    <li>
                        <h3>{{}}元</h3>
                        <p>配送费用</p>
                    </li>
                    <li>
                        <h3>{{}}</h3>
                        <p>距离</p>
                    </li>
                </ul>
                <h3 class="brief-modal-title">
                    <span>公告</span>
                </h3>
                <div class="brief-modal-notice">
                    {{}}
                </div>
                <div class="mask-footer">
                    <span class="iconfont icon-close"></span>
                </div>
            </div>
            <div class="brief-modal-cover"></div>
        </div>
    </transition>

    <transition name="fade">
        <div class="activity-sheet" style="display:none">
            <div class="activity-sheet-content">
                <h2 class="activity-sheet-title">优惠活动</h2>

                <div class="activity-sheet-close">
                    <span class="iconfont icon-close"></span>
                </div>
            </div>
            <div class="activity-sheet-cover"></div>
        </div>
    </transition>
</div>
</template>

<script>
import {
    mapState
} from 'vuex'
export default {
    computed: {

    }

}
</script>

<style lang="stylus" scoped>
@import "../../common/stylus/mixins.styl"
@import "./ShopHeader.styl"
</style>
