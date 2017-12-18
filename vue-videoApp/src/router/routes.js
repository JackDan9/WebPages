import App from '../App'
import Home from '../pages/home/home'
/**
 *
 */
export default [
    {
        path: '/',
        component: App,
        children: [
            {
                path: '/',
                name: 'home',
                meta: {auth: false},
                component: Home
            }
        ]
    }
]