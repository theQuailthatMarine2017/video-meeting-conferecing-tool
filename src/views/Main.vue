<template>
  <div>
    <div class="q-pa-md">
      <div class="row">


        <div class="col-md-6 col-sm-12">
            <q-list v-if="user_meetings != null" dense  class="rounded-borders">

              <q-item-label header class="text-weight-bold text-uppercase" style="color:black;font-size:30px;">
                Upcoming Meetings
              </q-item-label>

              <q-item>
                <q-item-section>
                   <q-card class="my-card" flat bordered>

                        <q-card-actions>
                          <q-btn color="orange" flat round icon="fas fa-calendar-alt" />
                          <q-item-label header style="color:black;">
                            Marketing Brief Coke<br>
                            Tuesday, May 5th 2020, 1:24 pm<br>
                          </q-item-label>
                          
                        </q-card-actions>
                      </q-card>
                          </q-item-section>
                        </q-item>

                <q-item>

                <q-item-section>
                   <q-card class="my-card" flat bordered>

                        <q-card-actions>
                          <q-btn flat color="orange" round icon="fas fa-calendar-alt" />
                          <q-item-label header style="color:black;">
                            Weekly Objectives Meeting Sales Team<br>
                            Tuesday, May 5th 2020, 1:24 pm<br>
                          </q-item-label>
                        </q-card-actions>
                      </q-card>
                          </q-item-section>
                </q-item>


            </q-list>
            <div>
            <h5 v-if="no_meetings_message != null">
              {{ no_meetings_message }}
            </h5>
          </div>
          </div>

        <div class="col-md-6 col-sm-12">
            <q-list dense  padding class="rounded-borders">

              <q-item-label header class="text-weight-bold text-uppercase" style="color:black;font-size:30px;">
                Account Details
              </q-item-label>

              <q-item clickable v-ripple>
                <q-item-section>
                  Fullnames: {{ user.fullnames }}
                </q-item-section>
              </q-item>
              <q-item clickable v-ripple>
                <q-item-section>
                  Email Address: {{ user.email }}
                </q-item-section>
              </q-item>
              <q-item clickable v-ripple>
                <q-item-section>
                  Mobile Contact: +{{ user.mobile }}
                </q-item-section>
              </q-item>
              <q-item clickable v-ripple>
                <q-item-section>
                  Company / School: {{ user.occupation }}
                </q-item-section>
              </q-item>
              <q-item clickable v-ripple>
                <q-item-section>
                  Scheduled Meetings: 2
                </q-item-section>
              </q-item>
              <q-item clickable v-ripple>
                <q-item-section>
                  Meetings Attended: 3
                </q-item-section>
              </q-item>
            </q-list>
          </div>


      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { QSpinnerGears } from 'quasar';

export default {
  created(){
    // fetch meetings from database using meetings vuex store get meetings function passing the users
    // current email as parameter

    console.log(this.user)
    this.$q.loading.show({
        message: '<span style="font-size:25px;font-weight:bold;">Fetching Meetings From Server.</span><br/>Please Wait....',
        spinner:QSpinnerGears,
        spinnerColor: 'orange',
        spinnerSize: 200,
        backgroundColor: 'black'
      })

    this.getmeetings(this.user.email)


  },
  mounted () {

    console.log(this.newuser)
    if(this.newuser === true){

      this.$q.notify({

        type:'positive',
        color:'green',
        position:'top-right',
        textColor:'white',
        caption:'Welcome New User!',
        message:'You Can Now Schedule and Pay for Secure Meetings!',
        timeout:6000
      })
    }
    
  },
  data () {
    return {

      user_meetings:null,
      no_meetings_message:null
    }
  },
  methods:{
    ...mapActions(["getmeetings"])
  },
  computed:{
    ...mapGetters(["meeting","user","newuser"]),
    useraccount(){

      return this.user
    }
  },
  watch:{
    meeting(val){

      console.log(val.length)
      console.log('shshshshssh')

      if (val.length > 0){

        setTimeout(() => {

            this.$q.loading.hide()

          },1000)

        this.user_meetings = val

      } else {

         setTimeout(() => {

            this.$q.loading.hide()

          },1000)

        this.no_meetings_message = 'You Have No Meetings Scheduled.'

      }
    }
  }

}
</script>

<style lang="sass">
.YL
  &__toolbar-input-container
    min-width: 100px
    width: 55%
  &__toolbar-input-btn
    border-radius: 0
    border-style: solid
    border-width: 1px 1px 1px 0
    border-color: rgba(0,0,0,.24)
    max-width: 60px
    width: 100%
  &__drawer-footer-link
    color: inherit
    text-decoration: none
    font-weight: 500
    font-size: .75rem
    &:hover
      color: #000
</style>