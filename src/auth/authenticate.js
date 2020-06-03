import {store} from '../store/index'

export default (to, from, next) => {

  if (localStorage.getItem("token") != null && localStorage.getItem("user").length > 0) {
    
    store.getters.user = localStorage.getItem("user").user_account
    store.getters.token = localStorage.getItem("token").token

    next();

  } else {

  	localStorage.removeItem("token");
    localStorage.removeItem("user");
    
    next("/");
  }
};