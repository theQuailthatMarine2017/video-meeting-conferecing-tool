import store from '../store/index'

export default (to, from, next) => {

  if (localStorage != null) {

  	//User Has Token and User Info Stored Local So Auto Sign Triggered

  	var token = localStorage.getItem("token")
    var user_account = {
      fullnames:localStorage.getItem("user_fullnames"),
      email:localStorage.getItem("user_email"),
      mobile:localStorage.getItem("user_mobile"),
    }

    console.log(token)

    store.commit('AddUser', user_account);
    store.commit('AddToken', token);

    next();

  } else {

  	localStorage.removeItem("token");
    localStorage.removeItem("user");

    next("/");
  }
};