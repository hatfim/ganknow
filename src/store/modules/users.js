import { userService } from '@/services/userService'

const state = () => ({
  user: {},
  users: [],
})

const mutations = {
  SET_USERS(state, users) {
    state.users = users
  },
  SET_CURRENT(state, user) {
    state.user = user
  },
}
const actions = {
  async fetchUsers({ commit, dispatch }) {
    dispatch('globalState/setLoading', true, { root: true })
    dispatch('globalState/setError', null, { root: true })

    try {
      const response = await userService.fetchUsers()
      const data = await response.json()
      commit('SET_USERS', data)
    } catch (error) {
      dispatch('globalState/setError', error, { root: true })
    } finally {
      dispatch('globalState/setLoading', false, { root: true })
    }
  },

  fetchCurrentUser({ commit }) {
    const user = {}
    commit('SET_CURRENT', user)
  },
}

const getters = {
  users: (state) => state.users,
  user: (state) => state.user,
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}
