import userService from '@/services/userService'

const state = () => ({
  users: [],
})

const mutations = {
  SET_USERS(state, users) {
    state.users = users
  },
}

const actions = {
  async fetchUsers({ commit, dispatch }) {
    dispatch('globalState/setLoading', true, { root: true })
    dispatch('globalState/setError', null, { root: true })

    try {
      const data = await userService.fetchUsers()
      commit('SET_USERS', data)
    } catch (error) {
      dispatch('globalState/setError', error.message || 'Error fetching users', {
        root: true,
      })
    } finally {
      dispatch('globalState/setLoading', false, { root: true })
    }
  },
}

const getters = {
  getUsers: (state) => state.users,
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}
