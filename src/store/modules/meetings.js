import axios from 'axios';
import { Notify } from 'quasar'

export default {
  state: {
    meetings:null,
    schedule_meeting:null,
    refund_meeting:null
  },
  getters: {
    meeting: state => state.meetings,
    schedule_meeting: state => state.schedule_meeting,
    refund: state => state.refund_meeting
  },
  mutations: {
    ScheduledMeetings(state,data){

        state.scheduled_meeting = data;
    },
    AddMeetings(state,data){

        state.meetings = data;
    }
  },
  actions: {
    getmeetings({commit}, data) {

        console.log(data)

          axios.get('https://localhost:7200/api/shirikia/get-meetings/',{
                              params: {
                                email: data
                              }
                            }).then( response => {

                                        console.log(response.data.meetings);
                                        commit("AddMeetings", response.data.meetings);


                                      }).catch( err => {

                                        console.log(err)

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


      axios.post('https://localhost:7200/api/shirikia/schedule-meeting', data).then( response => {

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
