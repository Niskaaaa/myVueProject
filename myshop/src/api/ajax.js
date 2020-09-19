import axios from 'axios';//返回值是promise对象
export default function ajax(url, data = {}, type = 'GET') {
    return new Promise(function (resolve, reject) {
        //执行异步ajax
        let promise;
        if (type === 'GET') {
            let dataStr = ''
            Object.keys(data).forEach(key => {
                dataStr += `${key}=${data[key]}&`
            })
            if (dataStr !== '') {
                dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'));
                url = `${url}?${dataStr}`
            }
            promise = axios.get(url)

        }
        else promise = axios.post(url, data)
        promise.then(function (response) {
            resolve(response.data)

        }).catch(function (error) {
            reject(error)

        })
    })
}//用promise里面再包一层promise，直接返回response.data，而不是response