import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        name:"Home",
        path:'/home',
        component:() => import('../components/pages/home/index.vue'),
        meta:{
            requiresAuth:true
        }
    },

    {
        name:'Login',
        path:"/iniciar-sesion",
        component:() => import("../components/auth/login.vue"),
        meta:{
            requiresAuth:false
        }
    },

    {
        name:"Register",
        path:"/registro",
        component:() => import("../components/auth/register.vue"),
        meta:{
            requiresAuth:false
        }
    },

    {
        name:'Update',
        path:"/actualizar",
        component: () => import("../components/auth/update.vue"),
        meta:{
            requiresAuth:true
        }
    },

    {
        name:'Inicio',
        path:"/",
        component: () => import("../components/principal.vue"),
        meta:{
            requiresAuth:false
        }
    },

    //Not Found
    {
        name:'NotFound',
        path:"/:pathMatch(.*)*",
        component: () => import("../components/notFound.vue"),
        meta:{
            requiresAuth:false
        }
    }
]

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