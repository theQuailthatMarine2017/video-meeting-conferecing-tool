<template>
    <div id="verify" v-if="$route.name === 'Validate Account'">
        <div class="q-pa-md">
<img alt="Vue logo" transition="slide-up" style="margin-top:25px;max-width:120px;max-height:120px;" src="../assets/logo.png">
<h2>Shirikiana<br><h4 style="font-weight: bold;color:white">Account Authetication<br></h4></h2>
            <div class="row" style="margin-top:20px;">
                <div class="col">
                    <h4 class="mob">Please Enter 5 Digit Code Sent To Your Email Address</h4>
                    <div class="row  justify-center">
                <div class="col" style=" margin-top:20px;margin-left:15px;margin-right:15px;max-width:55px;">
                    <q-input color="lime-11" bg-color="white" filled square outlined v-model="code_1">
                    </q-input>
                </div>
                <div class="col" style="margin-top:20px;margin-left:15px;margin-right:15px;max-width:55px;">
                    <q-input color="lime-11" bg-color="white" filled square outlined v-model="code_2">
                    </q-input>
                </div>
                <div class="col" style="margin-top:20px;margin-left:15px;margin-right:15px;max-width:55px;">
                   <q-input color="lime-11" bg-color="white" filled square outlined v-model="code_3">
                    </q-input>
                </div>
                <div class="col" style="margin-top:20px;margin-left:15px;margin-right:15px;max-width:55px;">
                   <q-input color="lime-11" bg-color="white" filled square outlined v-model="code_4">
                    </q-input>
                </div>
                <div class="col" style="margin-top:20px;margin-left:15px;margin-right:15px;max-width:55px;float: none;vertical-align: middle;">
                   <q-input color="lime-11" bg-color="white" filled v-model="code_5">
                    </q-input>
                </div>
            </div>
            <div style="margin-top:30px;">
                    <q-btn @click="verify_account" label="Verify Account" type="submit" style="background-color:#db0000;font-weight:bolder;"/>
                </div>

                <div>
                    <p class="mob-2">Did Not Recieve SMS?</p>
                    <q-btn label="Request New Code" type="submit" style="background-color:#db0000;font-weight:bolder;"/>
                </div>
                </div>
            </div>

  </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
    data() {
        return {
            code_1:'',
            code_2:'',
            code_3:'',
            code_4:'',
            code_5:'',
            
        }
    },
    methods: {
        ...mapActions(["verifyuser","requestcode"]),

        verify_account(){

            var code = this.code_1 + this.code_2 + this.code_3 + this.code_4 + this.code_5
            var passcode = parseInt(code,10)
            console.log(passcode)

            this.loader = this.$loading.show({
                    // Optional parameters
                    color: '#ff0000',
                    width: 75,
                    height: 75,
                    opacity: 0.7,
                    
                  });

            this.verifyuser({email:localStorage.getItem("user_email"),mobile:localStorage.getItem("user_mobile"),fullnames:localStorage.getItem("user_fullnames"),password:localStorage.getItem("user_password"),verifycode:passcode})

        },
        request_new_code(){

            // var mobile = localStorage.getItem("user_mobile");



        }
    },
    computed:{
        ...mapGetters(["err","token"])
    },
    watch:{

        //If Succesful Token Will Be Assigned
        token(val){
          if(val != null){

            setTimeout(() => {

                //Accounted Created and Verified, User navigated to main page
                this.$q.notify({
                  type:'positive',
                  color:'green',
                  position:'top-right',
                  textColor:'white',
                  caption:'Registration and Verification Succesful!',
                  message:'Your Account Has Been Created and Verified Succesfully!',
                  timeout:8000
                })

                this.loader.hide()
                this.$router.push('/home')

              },1000)

          }
        },

        //Watches for errors raised from calling vuex store actions mapped into this component.
        err(val) {
          if (val != null) {

              setTimeout(() => {

                this.loader.hide()
                this.er = val

              },1000)

          }
        },
    }
}
</script>

<style scoped>

#verify{
    background-image: url("https://www.templatemonster.com/blog/wp-content/uploads/2017/06/outdoors.jpg");
    min-height:100vh;
    color:white;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
   
    overflow: hidden;
    text-align:center;
    font-weight:bolder;
    text-shadow: 4px 4px 9px rgba(0,0,0,0.8), 0px 0px 2px  rgba(0,0,0,1);
    flex: 1 0 auto;
}

.mob-2{
    font-size: 20px;
    margin-top:10px;
}

@media (min-width: 268px) and (max-width: 991px) {
 .mob{
   font-size: 32px; 
  }
}

*{
    margin:0 auto;
}
</style>