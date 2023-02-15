import Vue from 'vue'
import Router from 'vue-router'
import home from "@/pages/Home"
import message from "@/pages/MESSAGE/Message"
import shopcart from "@/pages/SHOPCART/Shopcart"
import my from "@/pages/MY/My"
import shop from "@/pages/SHOP/Shop"
import login from "@/pages/LOGIN/Login"
import register from "@/pages/REGISTER/Register"
import indexRouter from "@/pages/INDEX/router/indexRouter"
import MsgRouter from "@/pages/MESSAGE/router/MsgRouter";
import ShopRouter from "@/pages/SHOP/shopRouter"

Vue.use(Router);

const routes = [
    {
        path: "/",
        redirect: "/home"
    },
    {
        path: '/home',
        name: 'home',
        component: home,
        meta: {title: "首页"}
    },
    {
        path: '/message',
        name: 'message',
        component: message,
        meta: {title: "消息"}
    },
    {
        path: '/shopcart',
        name: 'Shopcart',
        component: shopcart,
        meta: {title: "购物车"}
    },
    {
        path: '/my',
        name: 'my',
        component: my,
        meta: {title: "我的"}
    },
    {
        path: '/shop',
        name: 'shop',
        component: shop,
        meta: {title: "购物"}
    },
    {
        path: '/user/login',
        name: 'login',
        component: login,
        meta: {title: "登录"}
    },
    {
        path: '/user/register',
        name: 'register',
        component: register,
        meta: {title: "注册"}
    },
    {
        path: '/msg',
        name: 'msg',
        component: message,
        meta: {title: "msg"}
    },
    ...indexRouter,
    ...MsgRouter,
    ...ShopRouter
];

//路由实例化
const router = new Router({
    routes,
    //给当前激活的一个路由添加一个类
    linkExactActiveClass: "mui-active"
});
// 添加路由守卫，动态的设置标题
router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title
    }
    next()
});
//将路由暴露出去
export default router
