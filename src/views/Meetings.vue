<template>
	<div class="q-pa-md">
      <div class="row">


        <div class="col-md-6 col-sm-12">
        	<q-list dense  class="rounded-borders">

              <q-item-label header class="text-weight-bold text-uppercase" style="color:black;font-size:30px;">
                Active Meetings
              </q-item-label>

              <q-item>
                <q-item-section>
                   <q-card class="my-card" flat bordered>

                        <q-card-actions>
                          <q-btn flat round color="green" icon="fas fa-hourglass-start" />
                          <q-item-label header class="" style="color:black;min-width:300px;">
                            End Week Briefs<br>
                            13 Attendees<br>
                            2 Hours<br>
                          </q-item-label>
                          <q-btn @click="enter_meeting = true" icon="fas fa-sign-in-alt" label="Join Meeting"  color="green"/>
                        </q-card-actions>
                      </q-card>
                          </q-item-section>
                        </q-item>

                        <q-item>
                <q-item-section>
                   <q-card class="my-card" flat bordered>

                        <q-card-actions>
                          <q-btn flat round color="green" icon="fas fa-hourglass-start" />
                          <q-item-label header style="color:black;min-width:300px;max-width:400px;">
                            Sales Pitch Review Upper Management<br>
                            5 Attendees<br>
                            1 Hours<br>
                          </q-item-label>
                          <q-btn @click="enter_meeting = true" icon="fas fa-sign-in-alt" label="Join Meeting"  color="green"/>
                        </q-card-actions>
                      </q-card>
                          </q-item-section>
                        </q-item>


            </q-list>
        </div>
<div class="col-md-6 col-sm-12">
           <q-list dense  class="rounded-borders">

              <q-item-label header class="text-weight-bold text-uppercase" style="color:black;font-size:30px;">
                Scheduled Meetings
              </q-item-label>

              <q-item>
                <q-item-section>
                   <q-card class="my-card" flat bordered>

                        <q-card-actions>
                          <q-btn  flat round icon="fas fa-calendar-alt" />
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
                          <q-btn flat round icon="fas fa-calendar-alt" />
                          <q-item-label header style="color:black;">
                            Weekly Objectives Meeting Sales Team<br>
                            Tuesday, May 5th 2020, 1:24 pm<br>
                          </q-item-label>
                        </q-card-actions>
                      </q-card>
                          </q-item-section>
                </q-item>


            </q-list>
          </div>

    </div>


    <!--Modal Create Session-->
  <q-dialog v-model="enter_meeting">
      <q-card>
        <q-toolbar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
          </q-avatar>

          <q-toolbar-title>Enter Meeting Secret Passcode.</q-toolbar-title>

          <q-btn flat round icon="fas fa-times" v-close-popup />
        </q-toolbar>


        <q-card-section>
        <p>Please Enter The Pass Code Sent To Your Mobile Number To Enter This Meeting.</p>
          
      <q-input v-model="passcode" placeholder="Enter Pass Code" filled  />

      <div style="padding-top:10px;">
        <q-btn label="Enter"  color="green"/>
      </div>
   
        </q-card-section>
      </q-card>
    </q-dialog>



</div>
</template>

<script>


export default{
	
	data(){
		return{
      meetings:[],
      enter_meeting:false,
      passcode:''
		}
	},
	methods:{
		getMeetings(){

			
		}
	}

}
</script>

<style scoped>

</style>