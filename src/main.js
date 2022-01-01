import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

import firebase from "firebase/app";
import "@/datasources/firebase";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  created() {
    firebase.auth().onAuthStateChanged((userinfo) => {
      if (userinfo) {
        store.dispatch("fnDoLoginAuto", userinfo);
      }
    });
  },
  render: (h) => h(App),
}).$mount("#app");
