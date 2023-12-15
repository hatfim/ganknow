import feedsMock from '@/store/data/feed'

const state = () => ({
  feeds: [],
  feed: {},
})

const mutations = {
  SET_FEEDS(state, feeds) {
    state.feeds = feeds
  },
  SET_FEED(state, feeds) {
    state.feeds = feeds
  },
}

const actions = {
  fetchUserFeed({ commit }) {
    commit('SET_FEEDS', feedsMock)
  },
  fetchFeed({ commit }, id) {
    const feed = feedsMock.filter((item) => item.id === id)
    commit('SET_FEED', feed[0])
    return feed[0]
  },
}

const getters = {
  getFeeds: (state) => state.feeds,
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}
