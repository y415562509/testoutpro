import { login } from '@/api/login.js'

const getDefaultState = () => {
  return {
    token: sessionStorage.getItem('token')
  }
}

const state = getDefaultState()

const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState())
  },
  SET_TOKEN: (state, token) => {
    state.token = token
  }
}

const actions = {
  // user login
  login ({ commit }, userInfo) {
    const { username, password } = userInfo
    return new Promise((resolve, reject) => {
      login({ username: username.trim(), password: password }).then(res => {
        commit('SET_TOKEN', res.data.token)
        sessionStorage.setItem('token', res.data.token)
        resolve(res)
      }).catch(error => {
        reject(error)
      })
    })
  }

  // // get user info
  // getInfo ({ commit, state }) {
  //   return new Promise((resolve, reject) => {
  //     // commit('SET_NAME', res.userType)
  //     // commit('SET_AVATAR', 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif')
  //     resolve()
  //     // getInfo(state.token).then(response => {
  //     //   const { data } = response

  //     //   if (!data) {
  //     //     reject('Verification failed, please Login again.')
  //     //   }

  //     //   const { name, avatar } = data

  //     //   commit('SET_NAME', name)
  //     //   commit('SET_AVATAR', avatar)
  //     //   resolve(data)
  //     // }).catch(error => {
  //     //   reject(error)
  //     // })
  //   })
  // },

  // user logout
  // logout ({ commit, state }) {
  //   return new Promise((resolve, reject) => {
  //     logout(state.token).then(() => {
  //       removeToken() // must remove  token  first
  //       resetRouter()
  //       commit('RESET_STATE')
  //       resolve()
  //     }).catch(error => {
  //       reject(error)
  //     })
  //   })
  // },

  // remove token
  // resetToken ({ commit }) {
  //   return new Promise(resolve => {
  //     removeToken() // must remove  token  first
  //     commit('RESET_STATE')
  //     resolve()
  //   })
  // }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
