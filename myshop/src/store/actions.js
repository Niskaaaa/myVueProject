
//间接更新state的多个方法的对象

import{
    RECEIVE_SHOPS,
    RECEIVE_CATEGORYS,
    RECEIVE_ADDRESS 
} from './mutation-types'

import{
    reqAddress,
    reqFoodCategorys,
    reqShops
} from '../api'


export default {
    //异步获取地址
    async getAddress({commit,state}){
        //发送异步ajax请求
        //console.log(state)


        const geohash = state.state.longitude+','+state.state.latitude
        const result = await reqAddress(geohash)
        if(result.code==0){
            const address = result.data
            console.log(address.name)            
            commit(RECEIVE_ADDRESS,{address})        

        }
        //提交一个mutation
    },

    //商家列表
    async getCategorys({commit,state}){
        //发送异步ajax请求
        // const geohash = state.longtitude+','+state.longtitude
        
        const result = await reqFoodCategorys()
        if(result.code==0){
            const categorys = result.data
            commit(RECEIVE_CATEGORYS,{categorys})
        }
        //提交一个mutation
    },
    async getShops({commit,state}){
        //发送异步ajax请求
        const {longitude,latitude} = state
        const result = await reqShops(longitude,latitude)
        if(result.code==0){
            const shops = result.data
            console.log("1")
            console.log(shops)
            commit(RECEIVE_SHOPS,{shops})
        }
        //提交一个mutation
    }
}