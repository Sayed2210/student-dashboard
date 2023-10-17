import { createStore } from "vuex";
import axios from "axios";
export default createStore({
  state: {
    users: [],
  },
  getters: {
    getUsers: (state) => state.users,
  },
  mutations: {
    setUsers(state, users) {
      state.users = users;
    },
  },
  actions: {
    async fetchUsers(context) {
      const response = await axios.get("https://randomuser.me/api/?results=5");
      context.commit("setUsers", response.data.results);
    },
  },
});
