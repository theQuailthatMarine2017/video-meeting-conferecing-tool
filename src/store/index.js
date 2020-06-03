import Vuex from "vuex";
import Vue from "vue";
import meetings from "./modules/meetings";
import user_auth from "./modules/userauth";


// Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
  modules: {
    meetings,
    user_auth
  }
});