import {store} from '../store/index'
import { Loading, QSpinnerGears } from 'quasar'

export default (to, from, next) => {

  if (localStorage.getItem("token") != null && localStorage.getItem("user").length > 0) {

  	//User Has Token and User Info Stored Local So Auto Sign Triggered
    
    store.getters.user = localStorage.getItem("user").user_account
    store.getters.token = localStorage.getItem("token").token

    next();

  } else {

  	localStorage.removeItem("token");
    localStorage.removeItem("user");

    next("/");
  }
};