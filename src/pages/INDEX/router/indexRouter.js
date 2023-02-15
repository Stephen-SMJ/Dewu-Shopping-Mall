import PostNew from "@/pages/INDEX/PostNew";
import IndexLive from "@/pages/INDEX/IndexLive";
import Vue from "vue";
import Router from "vue-router";
import Vplayer from "@/pages/INDEX/vplayer";
import livePic from "@/pages/INDEX/livePic";

Vue.use(Router);

const routes = [
    {
        path: "/home/indexRecommend",
        redirect: "/home",
        meta: {title: "首页-推荐"}
    },
    {
        path: "/home/indexPost",
        name: PostNew,
        component: PostNew,
        meta: {title: "首页-发布"}
    },
    {
        path: "/home/indexLive",
        name: IndexLive,
        component: Vplayer,
    },
    {
        path: "/home/livePic",
        name: livePic,
        component: livePic
    }
]
//将路由暴露出去
export default routes
