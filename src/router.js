import firebase from "firebase/app";
import "firebase/auth";
import Vue from "vue";
import VueRouter from "vue-router";
//import Home from './views/Home.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "start",
    component: () => import("@/components/StartPage.vue"),
  },
  {
    path: "/main",
    name: "main",
    component: () => import("@/components/MainPage.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/components/LoginPage.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () => import("@/components/RegisterPage.vue"),
  },
  {
    path: "/*",
    name: "error",
    component: () => import("@/components/ErrorPage.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const needAuth = to.matched.some((record) => record.meta.needAuth);
  const checkAuth = firebase.auth().currentUser;

  if (needAuth && !checkAuth) {
    next("/login");
  } else {
    next();
  }
});

export default router;
