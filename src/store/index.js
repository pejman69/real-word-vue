import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      id: 'abc789', name: 'pejman mowloudi'
    },
    categories: [
      'sustain',
      'pejman',
      'peshawa',
      'food',
      'communtiy'
    ],
    events: [
      { id: 1, title: '...', organizer: true },
      { id: 2, title: '...', organizer: false },
      { id: 3, title: '...', organizer: true },
      { id: 4, title: '...', organizer: false }
    ]
  },
  mutations: {},
  actions: {},
  modules: {},
  getters: {
    getEventById: state => id => {
      return state.events.find(event => event.id === id )
    }
  }
})
