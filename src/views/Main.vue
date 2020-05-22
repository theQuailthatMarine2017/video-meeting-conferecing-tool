<template>
  <div>
    <div class="q-pa-md">
      <div class="row">


        <div class="col-md-6 col-sm-12">
            <q-list dense  class="rounded-borders">

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
          </div>

        <div class="col-md-6 col-sm-12">
            <q-list dense  padding class="rounded-borders">

              <q-item-label header class="text-weight-bold text-uppercase" style="color:black;font-size:30px;">
                Account Details
              </q-item-label>

              <q-item clickable v-ripple>
                <q-item-section>
                  Fullnames: Rony Marine Quail
                </q-item-section>
              </q-item>
              <q-item clickable v-ripple>
                <q-item-section>
                  Email Address: rony@admin.com
                </q-item-section>
              </q-item>
              <q-item clickable v-ripple>
                <q-item-section>
                  Mobile Contact: +25470666354
                </q-item-section>
              </q-item>
              <q-item clickable v-ripple>
                <q-item-section>
                  Company / School: Kenya Methodist Univeristy
                </q-item-section>
              </q-item>
              <q-item clickable v-ripple>
                <q-item-section>
                  Scheduled Meetings: 2
                </q-item-section>
              </q-item>
              <q-item clickable v-ripple>
                <q-item-section>
                  Meetings Attended: 4
                </q-item-section>
              </q-item>
            </q-list>
          </div>


      </div>
    </div>
  </div>
</template>

<script>

export default {

  data () {
    return {

          }
  },
  created () {
    
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