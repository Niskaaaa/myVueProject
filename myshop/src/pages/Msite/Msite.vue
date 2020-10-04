<template>
<section class="msite">
    <!--首页头部-->
    <HeaderTop class="msite_header" :title="address.name" to="/search">
        <router-link class="header_search" slot="left">
            <i class="iconfont icon-search"></i>
        </router-link>

        <router-link class="header_login" slot="right" :to="userInfo._id?'/userinfo':'/login'">
            <span class="header_login_text" v-if="!userInfo._id">登录|注册</span>
            <span class="header_login_text" v-else><i class="iconfont icon-icon-person"></i></span>

        </router-link>
    </HeaderTop>
    <nav class="msite_nav">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-container" v-if="categorys.length">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" v-for="(categorys, index) in categorysArr" :key="index">
                            <a href="javascript:" class="link_to_food" v-for="(category, index) in categorys" :key="index">
                                <div class="food_container">
                                    <img :src="baseImageUrl+category.image_url">
                                </div>
                                <span>{{category.title}}</span>
                            </a>
                        </div>

                    </div>
                    <!-- Add Pagination -->
                    <div class="swiper-pagination"></div>
                </div>

            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
        </div>
    </nav>
    <!--首页附近商家-->
    <div class="msite_shop_list">
        <div class="shop_header">
            <i class="iconfont icon-xuanxiang"></i>
            <span class="shop_header_title">附近商家</span>
        </div>
        <ShopList>
        </ShopList>
    </div>
</section>
</template>

<script>
import Swiper from 'swiper'
import '../../../node_modules/swiper/css/swiper.min.css'
// If you use Swiper 6.0.0 or higher
import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
import ShopList from '../../components/ShopList/ShopList.vue'
import {
    mapState
} from 'vuex'
export default {

    data() {
        return {
            baseImageUrl: 'https://fuss10.elemecdn.com'
        }

    },

    mounted() {

        this.$store.dispatch('getCategorys');
        this.$store.dispatch('getShops')

    },
    components: {
        HeaderTop,
        Swiper,
        ShopList
    },

    computed: {
        ...mapState({

            address: (state) => state.state.address.address,
            categorys: (state) => state.state.categorys,
            userInfo: (state) => state.state.userInfo,

        }),
        categorysArr() {
            const {
                categorys
            } = this

            // 准备空的2维数组
            const arr = []
            // 准备一个小数组(最大长度为8)
            let minArr = []
            // 遍历categorys
            categorys.forEach(c => {
                // 如果当前小数组已经满了, 创建一个新的
                if (minArr.length === 8) {
                    minArr = []
                }
                // 如果minArr是空的, 将小数组保存到大数组中
                if (minArr.length === 0) {
                    arr.push(minArr)
                }
                // 将当前分类保存到小数组中
                minArr.push(c)
            })
            console.log(arr)
            return arr
        }

    },
    watch: {
        categorys(value) { // categorys数组中有数据了, 在异步更新界面之前执行
            // 使用setTimeout可以实现效果, 但不是太好
            /*setTimeout(() => {
              // 创建一个Swiper实例对象, 来实现轮播
              new Swiper('.swiper-container', {
                loop: true, // 可以循环轮播
                // 如果需要分页器
                pagination: {
                  el: '.swiper-pagination',
                },
              })
            }, 100)*/

            // 界面更新就立即创建Swiper对象
            this.$nextTick(() => { // 一旦完成界面更新, 立即调用(此条语句要写在数据更新之后)
                // 创建一个Swiper实例对象, 来实现轮播
                new Swiper('.swiper-container', {
                    loop: true, // 可以循环轮播
                    // 如果需要分页器
                    pagination: {
                        el: '.swiper-pagination',
                    },
                })

                new BScroll('.miste-content-wrapper', {
                    click: true
                })
            })

        }
    },
}
</script>

<style lang="stylus" scoped>
@import '../../assets/mixins.styl';
@import './Msite.styl';
</style>
