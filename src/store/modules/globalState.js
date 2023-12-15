export default {
  namespaced: true,
  state: () => ({
    isLoading: false,
    error: null,
  }),
  mutations: {
    SET_LOADING(state, isLoading) {
      state.isLoading = isLoading
    },
    SET_ERROR(state, error) {
      state.error = error
    },
  },
  actions: {
    setLoading({ commit }, isLoading) {
      commit('SET_LOADING', isLoading)
    },
    setError({ commit }, error) {
      commit('SET_ERROR', error)
    },
  },
  getters: {
    isLoading: (state) => state.isLoading,
    error: (state) => state.error,
  },
}
