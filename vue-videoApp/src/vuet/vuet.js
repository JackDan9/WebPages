import Vue from 'vue'
import Vuet from 'vuet'
// import utils from 'utils'
import http from 'http'

Vue.use(Vuet)
export default new Vuet({
    pathJoin: '-',
    modules: {
        view: {
            home: {
                data() {
                    return {
                        data: {
                            ads: [],
                            charity: [],
                            ft_ads: [],
                            news: [],
                            say: [],
                            shop: [],
                            loading: true,
                            done: false
                        }
                    }
                },
                async fetch ({state, params, path}) {
                    if (params.routeWatch === true) {
                        this.reset(path)
                    } else if (params.routeWatch === false) {
                        return {}
                    }
                    // params.routeWatch 没有参数，则是上拉加载触发的调用。
                    // const {tab = ''} = route.query
                    // const query = {
                    //     tab,
                    //     mdrender: false,
                    //     limit: 20,
                    //     page: state.page
                    // }
                    const res = await http.get('/index/view/')
                    const data = params.routeWatch ? res.data : [...state.data, ...res.data]
                    return {
                        data,
                        loading: false,
                        done: res.data
                    }
                }
            }
        }
    }
})
