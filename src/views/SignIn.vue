<template>

  <!-- check user sign in if not show login page-->
  <div id="app" v-if="$route.name === 'Sign In'">

    <img alt="Vue logo" src="../assets/logo.png">
   
    <h1>Shirikiana<br><h4 style="font-weight: bold;color:orange">Secure Web Conferencing Tool For Small & Medium Sized Businesses.</h4></h1>
    <div class="q-pa-md q-gutter-sm">
      <q-btn color="primary" @click="signup = true" label="Sign In" />
    <q-btn color="primary" @click="createAccount = true" label="Create Account" />

    <p>
      Developed and Managed by,<br>
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">Q Solutions</a>.
    </p>
    </div>
 
 

  <!--Modal Sign In Existing Account-->
  <q-dialog v-model="signup">
      <q-card>
        <q-toolbar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
          </q-avatar>

          <q-toolbar-title>Sign In To Account</q-toolbar-title>

          <q-btn flat round icon="fas fa-times" v-close-popup />
        </q-toolbar>

        <q-card-section>
          <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
      <q-input v-model="email" placeholder="Enter Account Email" filled type="email"  />

      <q-input v-model="password" placeholder="Enter Account PAssword" filled :type="isPwd ? 'password' : 'text'" >
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'fas fa-eye-slash' : 'fas fa-eye'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>

      <div>
        <q-btn label="Submit" @click="signin" color="primary"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>
        </q-card-section>
      </q-card>
    </q-dialog>


  <!--Modal Create New Account-->

  <q-dialog v-model="createAccount">
      <q-card  style="width: 700px; max-width: 80vw">
        <q-toolbar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
          </q-avatar>

          <q-toolbar-title>Create New Account</q-toolbar-title>

          <q-btn flat round dense icon="fas fa-times" v-close-popup />
        </q-toolbar>

        <q-card-section>
         <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">



          <q-input v-model="reg_email" placeholder="user@email.com" filled type="email" hint="Email Address" />

          <q-input v-model="mobile" placeholder="Enter Format: 254705008788" filled  hint="Mobile Number" />

          <q-input v-model="acc_title" placeholder="Saluzi LTD / James Renga" filled  hint="Full Names / Business Name" />


          <q-input v-model="password" placeholder="Min Length 8 Characters" filled :type="isPwd ? 'password' : 'text'" hint="Choose Password">
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'fas fa-eye-slash' : 'fas fa-eye'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>

          <q-input v-model="password" placeholder="Make Sure Password Fields Match" filled :type="isPwd ? 'password' : 'text'" hint="Repeat Password">
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'fas fa-eye-slash' : 'fas fa-eye'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>

       <q-toggle v-model="accept" label="I accept the License and Terms." />

      <div>
        <q-btn label="Submit" type="submit" color="primary"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>
        </q-card-section>
      </q-card>
    </q-dialog>

    
  </div>
</template>

<script>
export default{
  created(){

  },
  mounted(){

  },
  data(){
    return{
      signup:false,
      createAccount:false,
      isPwd: true,
      acc_title:'',
      mobile:'',
      email: '',
      password: '',
      accept:false
    }
    
  },
  methods:{
    signin(){

      this.$router.push('/home')

    },
    create(){

    }
  }

}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  background-image: url("https://us.123rf.com/450wm/rawpixel/rawpixel1510/rawpixel151028936/47099835-business-people-meeting-discussion-communication-concept.jpg?ver=6");


    
    
    min-height:100vh;

    
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    padding-top:100px;
    overflow: hidden;

    flex: 1 0 auto;

    
}

* {
   margin: 0 auto;
   padding: 0;

}


.home{
    background-image: url("https://mdbootstrap.com/img/Photos/Horizontal/Nature/full page/img(20).jpg");

    
    height: 100%;

    
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    
}




#nav {
  
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
