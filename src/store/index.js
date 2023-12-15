import { createStore } from 'vuex'

import feeds from './modules/feeds'
import globalState from './modules/globalState'
import profile from './modules/profile'
import users from './modules/users'

export default createStore({
  modules: {
    globalState,
    users,
    feeds,
    profile,
  },
})
