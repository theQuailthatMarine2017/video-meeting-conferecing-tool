<template>
	<div class="q-pa-md">
      <div class="row">


        <div class="col-md-6 col-sm-12">
        	<q-form class="q-gutter-md">
<q-item-label header class="text-weight-bold text-uppercase" style="color:black;font-size:30px;">
                Create Meeting
              </q-item-label>
              <q-input v-model="title" label="Enter Title For Meeting" />
              <p>Click Below To Select Date and Time for Meeting:</p>
              <datetime format="DD/MM/YYYY H:i" width="300px" v-model="val" label="kskssk"></datetime>
              <q-input v-model="passcode" type="password" label="Create Secret Meeting PassCode" />
              <!-- <q-select v-model="duration" :options="options" label="Select Duration For Meeting" /> -->

              <q-input v-model="attendee" label="Enter Email For All Attendees. Attendee Must Be Registered." />

              <q-btn @click="addAttendee" color="green" label="Add Attendee" />

      </q-form>
<q-btn color="red" @click="reset_meeting" label="Reset" style="margin-top:10px;" />
        </div>
<div class="col-md-6 col-sm-12">
            <q-list dense  padding class="rounded-borders">

              <q-item-label header class="text-weight-bold text-uppercase" style="color:black;font-size:30px;">
                Meeting Details
              </q-item-label>

              <q-item clickable v-ripple>
                <q-item-section>
                  Title: {{ title }}
                </q-item-section>
              </q-item>
              <q-item clickable v-ripple>
                <q-item-section>
                  DateTime: {{ val }}
                </q-item-section>
              </q-item>
              <!-- <q-item clickable v-ripple>
                <q-item-section>
                  Duration: {{ duration }}
                </q-item-section>
              </q-item> -->
              <q-item clickable v-ripple>
                <q-item-section>
                  Attendees: {{ attendees }}
                </q-item-section>
              </q-item>

              <q-item clickable v-ripple>
                <q-item-section>
                  Total Attendees: {{ attendees.length }}
                </q-item-section>
              </q-item>

              <!-- <q-item clickable v-ripple>
                <q-item-section>
                  Meeting Cost: {{ meeting_cost }}
                </q-item-section>
              </q-item> -->
              
             <q-btn color="green" @click="schedule" label="Schedule Meeting" style="margin-left:15px;"/>

            </q-list>
          </div>

    </div>


    <!--Modal Create Session-->
  <!-- <q-dialog v-model="session">
      <q-card>
        <q-toolbar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
          </q-avatar>

          <q-toolbar-title>Payment Confirmation</q-toolbar-title>

          <q-btn flat round icon="fas fa-times" v-close-popup />
        </q-toolbar>


        <q-card-section>
<p>Please Pay {{ meeting_cost}} To Paybill Number 5678765 Account Name MEETING and Enter the Payment Confirmation Code Below For Payment Validation.</p>
          
      <q-input v-model="code" placeholder="Enter Confirmation Code" filled  />

      <div style="padding-top:10px;">
        <q-btn label="Verfiy"  color="primary"/>
      </div>
   
        </q-card-section>
      </q-card>
    </q-dialog> -->



</div>
</template>

<script>
import datetime from 'vuejs-datetimepicker';
import { mapGetters,mapActions } from "vuex"
import { QSpinnerGears } from 'quasar';

export default{

	components: { datetime },
	data(){
		return{
			// options: [
   //      '30 Min', '1 Hour(Ksh 750)', '2 Hours(Ksh 1000)', '4 Hours(Ksh 1250)','8 Hours(Ksh 1500)','12 Hours(Ksh 1750)'
   //    ],
      title:'',
      val:'',
      code:'',
      passcode:'',
      attendees:[],
      session:false,
      attendee:'',
		}
	},
	methods:{
    ...mapActions(["scheduleMeeting"]),
    schedule(){

      this.$q.loading.show({
        message: '<span style="font-size:25px;font-weight:bold;">Fetching Meetings From Server.</span><br/>Please Wait....',
        spinner:QSpinnerGears,
        spinnerColor: 'orange',
        spinnerSize: 200,
        backgroundColor: 'black'
      })

      //submit meeting
      this.scheduleMeeting({title:this.title,date:this.val,passcode:this.passcode,attendees:this.attendees,scheduledBy:localStorage.getItem("user_email")})

    },
		addAttendee(){

			if(this.attendee === ''){

				this.$toast.open({message:'Add Emails For Attendees!',type:'error',position:'bottom'});

			}

			if(this.attendee != ''){

				this.attendees.push(this.attendee)
				this.$toast.open({message:'Attendee Added!',type:'success',position:'bottom'});
				this.attendee = ''
			}
		},
		reset_meeting(){


			this.title = ''
			this.duration = '',
			this.val = null,
			this.attendees = []
		}
	},
	computed:{
    ...mapGetters(["confirmed"]),
	// 	meeting_cost(){

	// 	// 	var cost = 0

	// 	// 	if(this.duration != '' && this.attendees.length > 0){

	// 	// 		if(this.duration === '30 Min (Ksh 550)'){

	// 	// 			cost = this.attendees.length * 150 + 550

	// 	// 			return cost

	// 	// 		}

	// 	// 		if(this.duration === '1 Hour(Ksh 750)'){

	// 	// 			cost = this.attendees.length * 150 + 750

	// 	// 		}

	// 	// 		if(this.duration === '2 Hours(Ksh 1000)'){

	// 	// 			cost = this.attendees.length * 150 + 1000

	// 	// 		}

	// 	// 		if(this.duration === '4 Hours(Ksh 1250)'){

	// 	// 			cost = this.attendees.length * 150 + 1250

	// 	// 		}

	// 	// 		if(this.duration === '8 Hours(Ksh 1500)'){

	// 	// 			cost = this.attendees.length * 150 + 1500

	// 	// 		}

	// 	// 		if(this.duration === '12 Hours(Ksh 1750)'){

	// 	// 			cost = this.attendees.length * 150 + 1750

	// 	// 		}


	// 	// 	} else {

	// 	// 		cost = 0
	// 	// 	}

	// 	// 	return cost

	// 	// }
	// }

},
watch:{
  confirmed(val){
    if(val != null){

      setTimeout(() => {

            this.$q.loading.hide()

          },1000)

    }
  }
}
}
</script>

<style scoped>

</style>