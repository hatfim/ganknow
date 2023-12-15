import profileMock from '@/store/data/profile'

const state = () => ({
  userProfile: {},
})

const mutations = {
  setUserProfile(state, profile) {
    state.userProfile = profile
  },
}

const actions = {
  fetchUserProfile({ commit }, name) {
    commit('setUserProfile', profileMock)
  },
}

const getters = {
  getProfile: (state) => state.userProfile,
  getSocialMedia: (state) => {
    const result = {}
    Object.entries(state.userProfile.profile).forEach(([key, value]) => {
      if (key.includes('Url')) {
        const newKey = key.replace('Url', '')
        result[newKey] = value
      }
    })
    return result
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}
