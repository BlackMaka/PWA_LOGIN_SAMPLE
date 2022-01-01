export default {
  state: {
    isLoading: false,
    errorMessage: "",
  },
  mutations: {
    fnSetLoading(state, payload) {
      state.isLoading = payload;
    },
    fnSetErrorMessage(state, payload) {
      state.errorMessage = payload;
    },
  },
  getters: {
    fnGetLoading(state) {
      return state.isLoading;
    },
    fnGetErrorMessage(state) {
      return state.errorMessage;
    },
  },
  actions: {},
};
