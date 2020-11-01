<template>
  <div class="ratings" ref="ratings">
    <div class="ratings-content">
      <div class="overview">
        <div class="overview-left">
          <h1 class="score">{{info.score}}</h1>
          <div class="title">综合评分</div>
          <div class="rank">高于周边商家 99%</div>
        </div>
        <div class="overview-right">
          <div class="score-wrapper">
            <span class="title">服务态度</span>
            <Star :score="info.serviceScore" :size="36" /> <span class="score">{{info.serviceScore}}</span>
          </div>
          <div class="score-wrapper">
            <span class="title">商品评分</span>
            <Star :score="info.foodScore" :size="36" /> <span class="score">{{info.foodScore}}</span>
          </div>
          <div class="delivery-wrapper">
            <span class="title">送达时间</span>
            <span class="delivery">{{info.deliveryTime}} 分钟</span>
          </div>
        </div>
      </div>
      <div class="split"></div>
      <div class="ratingselect">

        <div class="rating-type border-1px">
          <span class="block positive" :class="selectType===2?'active':''" @click="selectType=2">
            全部<span class="count">{{ratings.length}}</span>
          </span>
          <span class="block positive"  :class="selectType===0?'active':''" @click="selectType=0">
            满意<span class="count">{{positiveSize}}</span>
          </span>
          <span class="block negative"  :class="selectType===1?'active':''" @click="selectType=1">
            不满意<span class="count" >{{ratings.length-positiveSize}}</span>
          </span>
        </div>
        <div class="switch" :class="{on:onlyShowText}" @click="onlyShowText=!onlyShowText">
          <span class="iconfont icon-check_circle"></span>
          <span class="text">只看有内容的评价</span>
        </div>
      </div>
      <div class="rating-wrapper">
        <ul>
          <li class="rating-item" v-for="(rating,index) in filterRatings" :key="index">
            <div class="avatar">
              <img
                width="28"
                height="28"
                src="rating.avatar"
              />
            </div>
            <div class="content">
              <h1 class="name">{{rating.username}}</h1>
              <div class="star-wrapper">
                <Star :score="rating.score" :size="24" /> <span class="delivery">{{rating.deliveryTime}}</span>
              </div>
              <p class="text">{{rating.text}}</p>
              <div class="recommend">
                <span class="iconfont" :class="rating.rateType===0?'icon-thumb_up':'icon-thumb_down'"></span>
                <span class="item" v-for="(item,index) in rating.recommend" :key="index">{{item}}</span>
              </div>
              <div class="time">{{rating.rateTime|date-format}}</div>
            </div>
          </li>

        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import {mapGetters, mapState} from 'vuex' 
import BScroll from 'better-scroll'
import Star from '../../../components/Star/Star.vue'
export default {
  data() {
    return {
        onlyShowText:true,
        selectType:2
    };
  },
  mounted(){
      this.$store.dispatch('getShopRatings',()=>{
          this.$nextTick(()=>{
              new BScroll(this.$refs.ratings,{click:true})

          })
      })
  },
  created() {},
  computed: {
        ...mapState({

            info: (state) => state.state.info,
            ratings: (state) => state.state.ratings
            //categorys: (state) => state.state.categorys,

        }),
        ...mapGetters(['positiveSize']), 
        filterRatings(){
            const{ratings,onlyShowText,selectType}=this
            //过滤
            return ratings.filter(rating=>{
                const{rateType,text} =rating
                return (selectType===2||selectType===rateType)&&(!onlyShowText||text.length>0)
            })
        }
  },
  methods: {},
  components:{
      Star
  }
};
</script>

<style lang="stylus" scoped>
@import '../../../assets/mixins.styl';
@import './ShopRatings.styl';

</style>
