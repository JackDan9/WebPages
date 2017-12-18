import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
    routes,
    mode: 'history',
    base: '/smart_xy/',
})
router.beforeEach(({meta, path}, from, next) => {
    const {auth = true} = meta
    const isLogin = Boolean(localStorage.getItem('smart_xy_accesstoken')) //
    if(auth && !isLogin && path !== '/login') {
        let to = {path: 'login'}
        return next(to)
    }
    next()
})
export default router