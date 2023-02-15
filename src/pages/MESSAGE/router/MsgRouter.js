import Vue from "vue";
import Router from "vue-router";
import Chat from "@/pages/MESSAGE/Chat";

Vue.use(Router);

const routes = [
    {
        path: "/message/FriendChat",
        name: Chat,
        component: Chat,
        meta: {title: "消息-好友"}
    },
    {
        path: "/message/chat",
        name: Chat,
        component: Chat,
        meta: {title: "消息-聊天"}
    }
]
//将路由暴露出去
export default routes
