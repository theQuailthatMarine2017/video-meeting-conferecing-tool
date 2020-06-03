import axios from 'axios';
import { Notify } from 'quasar'

export default {
  state: {
    meetings:null
    refund_meeting:null
  },
  getters: {
    meeting: state => state.meeting,
    refund: state => state.refund_meeting
  },
  mutations: {
    ScheduledMeetings(state,data){

        state.scheduled_meeting = data;
    },
    AddMeetings(state,data){

        state.active_meetings = data;
    }
  },
  actions: {
    getmeetings({commit}, data) {


          axios.post('http://localhost:7200/api/shirikia/get-meeting/'+ data).then( response => {

            console.log(response.data);

            commit("AddMeetings", response.data.meeting);


          }).catch( err => {

              Notify.create({
                  type:'negative',
                  color:'red',
                  position:'top-right',
                  textColor:'white',
                  caption:'Error Occured!',
                  message:err,
                  timeout:8000
                })

          })

    },
    scheduleMeeting({commit}, data) {


      axios.post('http://localhost:7200/api/shirikia/schedule-meeting', data).then( response => {

            console.log(response.data)

            Notify.create({
                  type:'positive',
                  color:'green',
                  position:'top-right',
                  textColor:'white',
                  caption:'Meeting Scheduled!',
                  message:'All Attendees Will Be Notified!',
                  timeout:8000
                })

            commit("AddMeetings", response.data.meeting);

      }).catch( err => {

             Notify.create({
                  type:'negative',
                  color:'red',
                  position:'top-right',
                  textColor:'white',
                  caption:'Error Occured!',
                  message:err,
                  timeout:8000
                })
          

      })
    },
  }
};
