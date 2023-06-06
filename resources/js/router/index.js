import { createRouter, createWebHistory } from "vue-router";

//import pages
import homePage from "../components/pages/home/index.vue";
import login from "../components/auth/login.vue";
import register from "../components/auth/register.vue";
import update from "../components/auth/update.vue";
import inicio from "../components/principal.vue";
//PAginas Nuevas

//import Not Found
import notFound from "../components/notFound.vue";

//Narvab todos
const routes = [
    {
        name: "Home",
        path: "/home",
        component: homePage,
        meta: {
            requiresAuth: true,
        },
    },


    {
        name: "Login",
        path: "/login",
        component: login,
        meta: {
            requiresAuth: false,
        },
    },

    {
        name: "Register",
        path: "/register",
        component: register,
        meta: {
            requiresAuth: false,
        },
    },

    {
        name: "Update",
        path: "/update",
        component: update,
        meta: {
            requiresAuth: true,
        },
    },

    {
        name: "Inicio",
        path: "/",
        component: inicio,
        meta: {
            requiresAuth: false,
        },
    },

    //Not Found
    {
        name: "NotFound",
        path: "/:pathMatch(.*)*",
        component: notFound,
        meta: {
            requiresAuth: false,
        },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, form) => {
    if (to.meta.requiresAuth && !localStorage.getItem("data")) {
        return { name: "Login" };
    }

    if (!to.meta.requiresAuth && localStorage.getItem("data")) {
        return { name: "Home" };
    }
});

export default router;
