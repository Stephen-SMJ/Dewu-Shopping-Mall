import Vue from 'vue'
import Router from 'vue-router'
import Category from "./components/Category"
import detail from "./components/navlinks/detail"
import page1 from "./components/navlinks/page1"
import page2 from "./components/navlinks/page2"
import page3 from "./components/navlinks/page3"
import page4 from "./components/navlinks/page4"
import page5 from "./components/navlinks/page5"
import page6 from "./components/navlinks/page6"
import page7 from "./components/navlinks/page7"
import page8 from "./components/navlinks/page8"
import page9 from "./components/navlinks/page9"
import change from "@/pages/SHOP/components/navlinks/change";
Vue.use(Router);

const routes = [
    {
        path: '/shop/change',
        name: 'change',
        component: change,
        meta:{title:"虚拟换装"}
    },
    {
        path: '/shop/category',
        name: 'Category',
        component: Category,
        meta:{title:"分类"}
    },
    {
        path: '/shop/page1',
        name: 'page1',
        component: page1,
        meta:{title:"购物"}
    },
    {
        path: '/shop/page2',
        name: 'page2',
        component: page2,
        meta:{title:"购物"}
    },
    {
        path: '/shop/page3',
        name: 'page3',
        component: page3,
        meta:{title:"购物"}
    },
    {
        path: '/shop/page4',
        name: 'page4',
        component: page4,
        meta:{title:"购物"}
    },
    {
        path: '/shop/page5',
        name: 'page5',
        component: page5,
        meta:{title:"购物"}
    },
    {
        path: '/shop/page6',
        name: 'page6',
        component: page6,
        meta:{title:"购物"}
    },
    {
        path: '/shop/page7',
        name: 'page7',
        component: page7,
        meta:{title:"购物"}
    },
    {
        path: '/shop/page8',
        name: 'page8',
        component: page8,
        meta:{title:"购物"}
    },
    {
        path: '/shop/page9',
        name: 'page9',
        component: page9,
        meta:{title:"购物"}
    },
    {
        path: '/detail',
        name: 'detail',
        component: detail,
        props: route =>({id:route.query.id}),
        meta:{title:"商品详情"}
    },

];


//将路由暴露出去
export default routes
