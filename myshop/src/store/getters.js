//基于state的getter计算属性对象

export default {
    totalCount(state){
        return state.state.cartFoods.reduce((preTotal,food)=>preTotal+food.count,0)

    } ,   totalPrice(state){
        return state.state.cartFoods.reduce((preTotal,food)=>preTotal+food.count*food.price,0)

    }
}

