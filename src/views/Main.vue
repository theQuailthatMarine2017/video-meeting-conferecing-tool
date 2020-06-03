<template>
  <div>
    <div class="q-pa-md">
      <div class="row">


        <div class="col-md-6 col-sm-12">
            <q-list v-if="all_meeting > 0" dense  class="rounded-borders">

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
            <h5>
              {{ meets }}
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
                  Fullnames: {{ useraccount.fullnames }}
                </q-item-section>
              </q-item>
              <q-item clickable v-ripple>
                <q-item-section>
                  Email Address: {{ useraccount.email }}
                </q-item-section>
              </q-item>
              <q-item clickable v-ripple>
                <q-item-section>
                  Mobile Contact: +{{ useraccount.mobile }}
                </q-item-section>
              </q-item>
              <q-item clickable v-ripple>
                <q-item-section>
                  Company / School: {{ useraccount.occupation }}
                </q-item-section>
              </q-item>
              <q-item clickable v-ripple>
                <q-item-section>
                  Scheduled Meetings: 2
                </q-item-section>
              </q-item>
              <q-item clickable v-ripple>
                <q-item-section>
                  Meetings Attended: {{ useraccount.attendedMeetings }}
                </q-item-section>
              </q-item>
            </q-list>
          </div>


      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  mounted () {

    this.user_acc = this.user
    console.log(this.meetings.length)
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
    this.all_meeting = this.meetings.length
    
  },
  data () {
    return {

      user_acc:null,
      all_meeting:null,
      welcome:null
    }
  },
  methods:{
    getnewuser(){

      if(this.newuser === true){

        this.welcome = "Welcome New User! You can now schedule secure meetings!"
        
      }else{

        this.welcome = null

      }
    }
  },
  computed:{
    ...mapGetters(["meetings","user","newuser"]),
    useraccount(){

      return this.user
    },
    meets(){

      if (this.all_meeting === 0){

        return "You Have No Scheduled Meetings."
      } else {

        return this.meetings

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