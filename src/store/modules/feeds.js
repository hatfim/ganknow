const state = () => ({
  feeds: [],
})

const mutations = {
  SET_FEEDS(state, feeds) {
    state.feeds = feeds
  },
}

const actions = {
  async fetchFeeds({ commit }) {
    const feeds = []
    commit('SET_FEEDS', feeds)
  },
}

const getters = {
  feeds: (state) => state.feeds,
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}
