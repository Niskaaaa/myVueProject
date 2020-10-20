//直接更新state的多个方法的对象
import Vue from 'vue'
import{
    RECEIVE_SHOPS,
    RECEIVE_CATEGORYS,
    RECEIVE_ADDRESS,
    RECEIVE_USER_INFO,
    RESET_USER_INFO,
    RECEIVE_INFO,
    RECEIVE_RATINGS,
    RECEIVE_GOODS,
    INCREAMENT_FOOD_COUNT,
    DECREAMENT_FOOD_COUNT
} from './mutation-types'

export default {
    [RECEIVE_ADDRESS](state,{address}){
        //console.log(state)
        //console.log(address)
        state.state.address.address = address
        //console.log(address.name)
    },

    [RECEIVE_CATEGORYS](state,{categorys}){
        console.log(state)
        state.state.categorys = categorys
        console.log(categorys)
    },
    [RECEIVE_SHOPS](state,{shops}){
        state.state.shops = shops
    },

    [RECEIVE_USER_INFO](state,{userInfo}){
        state.state.userInfo=userInfo
    },

  [RESET_USER_INFO] (state) {
    state.state.userInfo = {}
  },
  [RECEIVE_INFO](state, {info}) {
    state.state.info = info
  },

  [RECEIVE_RATINGS](state, {ratings}) {
    state.state.ratings = ratings
  },

  [RECEIVE_GOODS](state, {goods}) {
    state.state.goods = goods
  },


  
  [INCREAMENT_FOOD_COUNT](state, {food}) {
    if(!food.count){
      Vue.set(food,'count',1)//让新增的属性也有数据绑定
      state.state.cartFoods.push(food)
    }
    else food.count++;

  },

  
  [DECREAMENT_FOOD_COUNT](state, {food}) {
    if(food.count){
    food.count--;
    if(food.count===0)
    state.state.cartFoods.splice(state.cartFoods.indexOf(food),1)      
    }

  },
}