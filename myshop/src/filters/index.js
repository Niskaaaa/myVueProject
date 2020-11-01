import Vue from 'vue'
import format from 'date-fns/format'
Vue.filter('date-format',function(value){
    return format(value, formatStr || 'YYYY-MM-DD HH:mm:ss')
    //return moment(value).format('YYYY-MM-DD HH:mm:ss')
})