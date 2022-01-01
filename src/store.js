import Vue from "vue";
import Vuex from "vuex";

import VuexPersistence from "vuex-persist";
import modCommon from "./store-mod/common";
import modProvider from "./store-mod/provider";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    common: modCommon,
    provicer: modProvider,
  },
  plugins: [
    new VuexPersistence({
      storage: window.localStorage,
    }).plugin,
  ],
});
