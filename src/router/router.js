import App from '../index.vue'

const home = r => require.ensure([], () => r(require('../page/home/home.vue')), 'home')
const login = r => require.ensure([], () => r(require('../page/login/login.vue')), 'login')

export default [{
    path: '/',
    component: App, //顶层路由，对应index.html
    children: [ //二级路由。对应App.vue
        //地址为空时跳转home页面
        {
            path: '',
            redirect: '/login'
        },
        //首页城市列表页
        {
            path: '/home',
            component: home
        },
        {
            path: '/login',
            component: login
        }
    ]
}]