import firebase from "firebase/app";
import "firebase/auth";

import router from "@/router";

export default {
  state: {
    user: null,
  },
  mutations: {
    fnSetUser(state, payload) {
      state.user = payload;
    },
  },
  getters: {
    fnGetUser(state) {
      return state.user;
    },
    fnGetAuthStatus(state) {
      return state.user != null;
    },
  },
  actions: {
    fnRegisterUser({ commit }, payload) {
      commit("fnSetLoading", true);
      firebase
        .auth()
        .createUserWithEmailAndPassword(payload.email, payload.password)
        .then((userinfo) => {
          commit("fnSetUser", {
            email: userinfo.email,
          });
          commit("fnSetLoading", false);
          commit("fnSetErrorMessage", "");
          router.push("/main");
        })
        .catch((e) => {
          commit("fnSetErrorMessage", e.message);
          commit("fnSetLoading", false);
        });
    },
    fnDoLogin({ commit }, payload) {
      commit("fnSetLoading", true);
      firebase
        .auth()
        .signInWithEmailAndPassword(payload.email, payload.password)
        .then((userinfo) => {
          commit("fnSetUser", {
            id: userinfo.uid,
            name: userinfo.displayName,
            email: userinfo.email,
            photoURL: userinfo.photoURL,
          });
          commit("fnSetLoading", false);
          commit("fnSetErrorMessage", "");
          router.push("/main");
        })
        .catch((e) => {
          commit("fnSetErrorMessage", e.message);
          commit("fnSetLoading", false);
        });
    },
    fnDoGoogleLogin_Popup({ commit }) {
      commit("fnSetLoading", true);
      var Provider = new firebase.auth.GoogleAuthProvider();
      Provider.addScope("profile");
      Provider.addScope("email");
      firebase
        .auth()
        .signInWithPopup(Provider)
        .then((userinfo) => {
          commit("fnSetUser", {
            id: userinfo.uid,
            name: userinfo.displayName,
            email: userinfo.email,
            photoURL: userinfo.photoURL,
          });
          commit("fnSetLoading", false);
          commit("fnSetErrorMessage", "");
          router.push("/main");
        })
        .catch((e) => {
          commit("fnSetErrorMessage", e.message);
          commit("fnSetLoading", false);
        });
    },
    fnDoLoginAuto({ commit }, userinfo) {
      commit("fnSetUser", {
        id: userinfo.uid,
        name: userinfo.displayName,
        email: userinfo.email,
        photoURL: userinfo.photoURL,
      });
      commit("fnSetLoading", false);
      commit("fnSetErrorMessage", "");
    },
    fnDoLogout({ commit }) {
      firebase.auth().signOut();
      commit("fnSetUser", null);
      router.push("/");
    },
  },
};
