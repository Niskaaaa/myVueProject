//直接更新state的多个方法的对象

import{
    RECEIVE_SHOPS,
    RECEIVE_CATEGORYS,
    RECEIVE_ADDRESS 
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
}