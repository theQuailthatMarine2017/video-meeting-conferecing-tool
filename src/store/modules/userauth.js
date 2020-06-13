import axios from 'axios';
import { Notify } from 'quasar'

export default {
  state: {
    err:null,
    token:null,
    user:null,
    newuser:false,
    verify:null,
  },
  getters: {
    err: state => state.err,
    verify: state => state.verify,
    user: state => state.user,
    token: state => state.token,
    newuser: state => state.newuser
  },
  mutations: {
    AddToken(state, data){

        state.token = data;
    },
    AddUser(state,data){

        state.user = data;
    },
    VerifyUser(state,data){

      state.verify = data
    },
    AddError(state,data){

        state.err = data;
    },
    clearError(state){

        state.err = null;
    },
    LoggOff(state){

        state.token = null;
        state.err = null;
        state.user = null;
        state.newuser = false;
    },
    NewUser(state, data){

        state.newuser = data;
    }
  },
  actions: {
    login({commit}, data) {


          axios.post('http://localhost:7200/api/shirikia/login', data).then( response => {

            console.log(response.data);

            Notify.create({

                  type:'positive',
                  color:'green',
                  position:'top-right',
                  textColor:'white',
                  caption:'Login Succesful',
                  message:'Welcome Back!',
                  timeout:6000
                  
                })
            
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("user_email", response.data.user_account.email);
            localStorage.setItem("user_mobile", response.data.user_account.mobile);
            localStorage.setItem("user_fullnames", response.data.user_account.fullnames);
            localStorage.setItem("user_occupation", response.data.user_account.occupation);

            commit("AddUser", response.data.user_account);
            commit("AddToken",response.data.token);


          }).catch( err => {

              console.log("Request Error App: " + err);
              commit("AddError", err)

          })

    },
    createuser({commit}, data) {


      axios.post('http://localhost:7200/api/shirikia/create-account', data).then( response => {

            console.log(response.data)
            
            localStorage.setItem("user_fullnames", response.data.account_create.fullnames);
            localStorage.setItem("user_email", response.data.account_create.email);
            localStorage.setItem("user_occupation", response.data.account_create.occupation);
            localStorage.setItem("user_mobile", response.data.account_create.mobile);
            localStorage.setItem("user_password", response.data.account_create.password);

            commit("VerifyUser", response.data.verified)

      }).catch( err => {

            console.log("Request Error App: " + err);
            commit("AddError", err.title)
          

      })
    },
    verifyuser({commit}, data) {

      axios.post('http://localhost:7200/api/shirikia/verify-account',data).then( response => {

            console.log(response)

            localStorage.setItem("user_fullnames", response.data.user.fullnames);
            localStorage.setItem("user_email", response.data.user.email);
            localStorage.setItem("user_occupation", response.data.user.occupation);
            localStorage.setItem("user_mobile", response.data.user.mobile);
            localStorage.setItem("user_password", response.data.user.password);

            commit("NewUser", true)
            commit("VerifyUser", response.data.user.verified)

            commit("AddUser", response.data.user);
            commit("AddToken",response.data.token);


      }).catch( err => {

            console.log("Request Error App: " + err.title);
            commit("AddError", err.title)
          

      })

    },
    requestcode({commit}, data){

      axios.post('http://localhost:7200/api/shirikia/request-code',data).then( response => {

        //if successful user notified new code has been issued
        if(response.data.code_request === true){

          Notify.create({

                  type:'positive',
                  color:'green',
                  position:'top-right',
                  textColor:'white',
                  caption:'Login Succesful',
                  message:'Welcome Back!',
                  timeout:6000
                  
                })


        }

      }).catch( err => {

            console.log("Request Error App: " + err.title);
            commit("AddError", err.title)
          

      })
    },
    signOut({commit}) {

        commit('LoggOff')
      
    }
  }
};