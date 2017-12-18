const DEVELOPMENT = 0
const DEV_API = 'http://192.168.112.23:8003/api'
const SER_API = 'http://zhxy.dianguanbao.com/api'
const API = DEVELOPMENT ? DEV_API: SER_API

// let accesstoken = () => (localStorage.getItem('smart_xy_accsstoken') || '')

const filter = (str) => { // 特殊字符含义
    str += '' // 隐式转换
    str = str.replace(/%/g, '%25')
    str = str.replace(/\+/g, '%2B')
    str = str.replace(/ /g, '%20')
    str = str.replace(/\//g, '%2F')
    str = str.replace(/\?/g, '%3F')
    str = str.replace(/&/g, '%26')
    str = str.replace(/=/g, '%3D')
    str = str.replace(/#/g, '%23')
    return str
}
// const queryStr = (data) => {
//     const query = []
//     if (!data.accesstoken) {
//         data.accesstoken = accesstoken()
//     }
//     Object.keys(data).forEach((k) => query.push(`${k} = ${filter(data[k])}`))
//     return query.join('&')
// }

export default {
    async get (url) {
        // const search = queryStr(data)
        const arr = [`${API}${url}`]
        // arr.push(search)
        // if(search) {
        //     arr.push(search)
        // }
        return fetch(arr.join('?')).then(response => response.json())
    },
    async post (url, data = {}) {
        const body = queryStr(data)
        const arr = [`${API}${url}`]
        return fetch(arr.join('?'), {
            body,
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then(response => response.json())
    }
}
