import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/components/pages/HomePage.vue";
import PostPage from "@/components/pages/PostPage.vue";
import UserPage from "@/components/pages/UserPage.vue";

const routes = [
    { path: "/", name: "home", component:HomePage },
    { path: "/posts", name: "posts", component:PostPage },
    { path: "/users", name: "users", component:UserPage },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;