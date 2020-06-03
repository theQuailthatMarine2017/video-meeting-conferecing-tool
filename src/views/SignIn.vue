<template>

  <!-- check user sign in if not show login page-->
  <div id="app" v-if="$route.name === 'Sign In'">

    <img alt="Vue logo" transition="slide-up" style="max-width:180px;max-height:180px;" src="../assets/logo.png">
   
    <h1>Shirikiana<br><h4 style="font-weight: bold;color:white">Secure and Affordable Web Conferencing Tool.<br></h4></h1>
    <div class="q-pa-md q-gutter-sm">
      <q-btn style="background:#8B0000;font-weight:bold" @click="signup = true" label="Sign In" />
    <q-btn @click="createAccount = true" label="Create Account" style="background:#8B0000;font-weight:bold"/>

    <p>
      Developed and Managed by,<br>
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener" style="text-decoration:none;color:white;font-weight:bold;">Q Solutions</a>.
    </p>
    </div>
 
 

  <!--Modal Sign In Existing Account-->
  <q-dialog v-model="signup" transition-show="scale" transition-hide="scale">
      <q-card style="width: 700px; max-width: 80vw" ref="signinref">
        <q-toolbar>
          <q-avatar>
            <img class="rounded-borders" style="max-width:30px;max-height:30px;" src="../assets/logo.png">
          </q-avatar>

          <q-toolbar-title>Sign In To Account</q-toolbar-title>

          <q-btn flat round icon="fas fa-times" v-close-popup />
        </q-toolbar>

        <q-card-section>
          <ValidationObserver v-slot="{ handleSubmit }">
          <q-form @submit="handleSubmit(signin)" class="q-gutter-md" style="padding:20px;">

            <validation-provider name="E-mail" rules="required|email" v-slot="{ errors }">
                <q-input v-model="email" placeholder="Enter Account Email" filled type="email"  />

                <q-banner v-if="errors[0] != null" inline-actions class="text-white bg-red">
                  {{ errors[0] }}
                </q-banner>
            </validation-provider>


             <validation-provider name="Password" rules="required" v-slot="{ errors }">
                <q-input v-model="password" placeholder="Enter Account Password" filled :type="isPwd ? 'password' : 'text'" >
                  <template v-slot:append>
                    <q-icon
                      :name="isPwd ? 'fas fa-eye-slash' : 'fas fa-eye'"
                      class="cursor-pointer"
                      @click="isPwd = !isPwd"
                    />
                  </template>
                </q-input>
                    <q-banner v-if="errors[0] != null" inline-actions class="text-white bg-red">
                  {{ errors[0] }}
                </q-banner>
                <q-banner inline-actions class="text-white bg-red" v-if="problem != null">
              {{ problem }}
            </q-banner>
                </validation-provider>

      <div>
        <q-btn label="Submit" type="submit" color="primary"/>
      </div>
    </q-form>
  </ValidationObserver>
        </q-card-section>
      </q-card>
    </q-dialog>


  <!--Modal Create New Account-->

  <q-dialog v-model="createAccount" transition-show="scale" transition-hide="scale">
      <q-card  style="width: 700px; max-width: 80vw" ref="createref">
        <q-toolbar>
          <q-avatar>
            <img class="rounded-borders" style="max-width:30px;max-height:30px;" src="../assets/logo.png">
          </q-avatar>

          <q-toolbar-title>Create New Account</q-toolbar-title>

          <q-btn flat round dense icon="fas fa-times" v-close-popup />
        </q-toolbar>

        <q-card-section>

          <ValidationObserver v-slot="{ handleSubmit }">
         <q-form @submit="handleSubmit(create)" class="q-gutter-md" style="padding:20px;">

           <validation-provider name="E-mail" rules="required|email" v-slot="{ errors }">
          <q-input v-model="reg_email" placeholder="user@email.com" filled type="email" hint="Email Address" />
          <q-banner v-if="errors[0] != null" inline-actions class="text-white bg-red">
                  {{ errors[0] }}
                </q-banner>
            </validation-provider>

            <validation-provider name="Mobile" rules="required" v-slot="{ errors }">
          <q-input v-model="mobile" placeholder="Enter Format: 254705008788" filled  hint="Mobile Number" />
         <q-banner v-if="errors[0] != null" inline-actions class="text-white bg-red">
                  {{ errors[0] }}
                </q-banner>
            </validation-provider>

            <validation-provider name="Full Name" rules="required" v-slot="{ errors }">
          <q-input v-model="acc_title" placeholder="Saluzi LTD / James Renga" filled  hint="Full Names / Business Name" />
          <q-banner v-if="errors[0] != null" inline-actions class="text-white bg-red">
                  {{ errors[0] }}
                </q-banner>
            </validation-provider>

            <validation-provider name="Occupation" rules="required" v-slot="{ errors }">
          <q-input v-model="occupation" placeholder="Student / Manager" filled  hint="What Do You Do?" />
          <q-banner v-if="errors[0] != null" inline-actions class="text-white bg-red">
                  {{ errors[0] }}
                </q-banner>
            </validation-provider>

            <validation-provider rules="required" v-slot="{ errors }">
          <q-input v-model="password" placeholder="Min Length 8 Characters" filled :type="isPwd ? 'password' : 'text'" hint="Choose Password">
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'fas fa-eye-slash' : 'fas fa-eye'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>
          <q-banner v-if="errors[0] != null" inline-actions class="text-white bg-red">
                  {{ errors[0] }}
                </q-banner>
            </validation-provider>

            <validation-provider rules="required" v-slot="{ errors }">
          <q-input v-model="confirm_password" placeholder="Make Sure Password Fields Match" filled :type="isPwd ? 'password' : 'text'" hint="Repeat Password">
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'fas fa-eye-slash' : 'fas fa-eye'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>
           <q-banner v-if="errors[0] != null" inline-actions class="text-white bg-red">
                  {{ errors[0] }}
                </q-banner>
            </validation-provider>

            <q-banner inline-actions class="text-white bg-red" v-if="password != confirm_password && confirm_password.length > 2 && confirm_password.length != password.length">
                  Passwords Do Not Match
                </q-banner>

            <q-banner inline-actions class="text-white bg-red" v-if="problem != null">
              {{ problem }}
            </q-banner>
            <q-banner inline-actions class="text-white bg-red" v-if="problem != null">
              {{ er.title }}
            </q-banner>

       <q-toggle v-model="accept" label="I accept the License and Terms." />

      <div>
        <q-btn label="Create Account" type="submit" color="primary"/>
      </div>
    </q-form>
  </ValidationObserver>
        </q-card-section>
      </q-card>
    </q-dialog>

    
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default{
  created(){

  },
  mounted(){

  
  },
  data(){
    return{
      signup:false,
      createAccount:false,
      problem:null,
      loader:null,
      isPwd: true,
      occupation:'',
      acc_title:'',
      mobile:'',
      email: '',
      reg_email:'',
      password: '',
      confirm_password:'',
      accept:false,
      er:null
    }
    
  },
  methods:{
    ...mapActions(["login","createuser","createerr","clearerror"]),
    signin(){

      this.problem = null
      this.er = null

      this.loader = this.$loading.show({
                    // Optional parameters
                    color: '#ff0000',
                    container: this.$refs.signinref.$el,
                    canCancel:true,
                    width: 75,
                    height: 75,
                    opacity: 0.7,
                    
                  });

      this.login({ email: this.email, password: this.password });
      

    },
    create(){

      this.problem = null

      if(this.accept === true){

        this.loader = this.$loading.show({
                    // Optional parameters
                    color: '#ff0000',
                    container: this.$refs.createref.$el,
                    canCancel:true,
                    width: 75,
                    height: 75,
                    opacity: 0.7,
                    
                  });

        this.createuser({email:this.reg_email,mobile:this.mobile,occupation:this.occupation,fullnames:this.acc_title,password:this.password})

      } else {

        this.problem = "Please Read and Accept Terms and Conditions First!"
      }

    }
  },
  computed: {
    ...mapGetters(["meetings","err","token"])
  },
  watch: {

    //Watches for errors raised from calling vuex store actions mapped into this component.
    err(val) {
      if (val != null) {

          setTimeout(() => {

            this.loader.hide()
            this.er = val

          },1000)

      }
    },
    //Watches if user is logged succesfully and routes to main page
    token(val){
      if(val != null){

        setTimeout(() => {

            this.loader.hide()
            this.$router.push('/home')

          },1000)

      }
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
  background-image: url("../assets/j.jpg");


    
    
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
