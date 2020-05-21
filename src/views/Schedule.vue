<template>
	<div class="q-pa-md">
      <div class="row">


        <div class="col-md-6 col-sm-12">
        	<q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
<q-item-label header class="text-weight-bold text-uppercase" style="color:black;font-size:30px;">
                Create Meeting
              </q-item-label>
              <q-input v-model="title" label="Enter Title For Meeting" />
              <p>Click Below To Select Date and Time for Meeting:</p>
              <datetime format="DD/MM/YYYY H:i" width="300px" v-model="val" label="kskssk"></datetime>
              <q-select v-model="duration" :options="options" label="Select Duration For Meeting" />

              <q-input v-model="attendee" label="Enter Email For All Attendees (Ksh150 per Attendee)." />

              <q-btn @click="addAttendee" color="primary" label="Add Attendee" />

      </q-form>
<q-btn color="primary" label="Reset" style="margin-top:10px;" />
        </div>
<div class="col-md-6 col-sm-12">
            <q-list dense  padding class="rounded-borders">

              <q-item-label header class="text-weight-bold text-uppercase" style="color:black;font-size:30px;">
                Meeting Details
              </q-item-label>

              <q-item clickable v-ripple>
                <q-item-section>
                  Host: Rony Marine Quail
                </q-item-section>
              </q-item>
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
              <q-item clickable v-ripple>
                <q-item-section>
                  Duration: {{ duration }}
                </q-item-section>
              </q-item>
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

              <q-item clickable v-ripple>
                <q-item-section>
                  Meeting Cost: {{ meeting_cost }}
                </q-item-section>
              </q-item>
              
             <q-btn  color="primary" label="Pay & Confirm Meeting" style="margin-left:15px;"/>

            </q-list>
          </div>

    </div>
</div>
</template>

<script>
import datetime from 'vuejs-datetimepicker';


export default{
	components: { datetime },
	data(){
		return{
			options: [
        '30 Min (Ksh 550)', '1 Hour(Ksh 750)', '2 Hours(Ksh 1000)', '4 Hours(Ksh 1250)','8 Hours(Ksh 1500)','12 Hours(Ksh 1750)'
      ],
      duration:'',
      title:'',
      val:'',
      attendees:[],
      attendee:'',
		}
	},
	methods:{
		addAttendee(){

			if(this.attendee === ''){

				this.$toast.open({message:'Add Emails For Attendees!',type:'error',position:'bottom'});

			}

			if(this.attendee != ''){

				this.attendees.push(this.attendee)
				this.$toast.open({message:'Attendee Added!',type:'success',position:'bottom'});
				this.attendee = ''
			}
		}
	},
	computed:{
		meeting_cost(){

			var cost = 0

			if(this.duration != '' && this.attendees.length > 0){

				if(this.duration === '30 Min (Ksh 550)'){

					cost = this.attendees.length * 150 + 550

					return cost

				}

				if(this.duration === '1 Hour(Ksh 750)'){

					cost = this.attendees.length * 150 + 750

				}

				if(this.duration === '2 Hours(Ksh 1000)'){

					cost = this.attendees.length * 150 + 1000

				}

				if(this.duration === '4 Hours(Ksh 1250)'){

					cost = this.attendees.length * 150 + 1250

				}

				if(this.duration === '8 Hours(Ksh 1500)'){

					cost = this.attendees.length * 150 + 1500

				}

				if(this.duration === '12 Hours(Ksh 1750)'){

					cost = this.attendees.length * 150 + 1750

				}


			} else {

				cost = 0
			}

			return cost

		}
	}

}
</script>

<style scoped>

</style>