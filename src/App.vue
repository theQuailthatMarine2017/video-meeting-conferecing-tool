
<template>
  <q-layout view="hHh lpR fFf" class="bg-grey-1" >
    <q-header  v-if="$route.name != 'Sign In'" elevated class="bg-white text-grey-8 q-py-xs" height-hint="58">
      <q-toolbar >
        <q-btn
          flat
          dense

          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          icon="fas fa-bars"
        />

        <q-btn flat no-caps no-wrap class="q-ml-xs" v-if="$q.screen.gt.xs">
          <q-toolbar-title shrink class="text-weight-bold">
            Shirikiana.
          </q-toolbar-title>
        </q-btn>

        <q-space />

      </q-toolbar>
    </q-header>

    <q-drawer
    v-if="$route.name != 'Sign In'"
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-2"
      :width="240"
    >
      <q-scroll-area class="fit">
        <q-list padding>

          <q-item-label header class="text-weight-bold text-uppercase">
            Welcome Rony Marine Quail!
          </q-item-label>

          <router-link to="/home" style="text-decoration:none;color:black;">
          <q-item v-ripple clickable>
            <q-item-section avatar>
              <q-icon color="grey" name="fas fa-user-cog" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Your Account</q-item-label>
            </q-item-section>
          </q-item>
        </router-link>

          <router-link to="/schedule" style="text-decoration:none;color:black;">
          <q-item v-ripple clickable>
            <q-item-section avatar>
              <q-icon color="grey" name="fas fa-calendar-times" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Schedule Meeting</q-item-label>
            </q-item-section>
          </q-item>
        </router-link>


        <router-link to="/meetings" style="text-decoration:none;color:black;">
          <q-item v-ripple clickable>
            <q-item-section avatar>
              <q-icon color="grey" name="fas fa-video" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Enter Meeting</q-item-label>
            </q-item-section>
          </q-item>
        </router-link>


        
          <q-item @click="signout" v-ripple clickable>
            <q-item-section avatar>
              <q-icon color="grey" name="fas fa-sign-out-alt" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Sign Out</q-item-label>
            </q-item-section>
          </q-item>
         

          <q-separator class="q-mt-md q-mb-lg" />

          <div class="q-px-md text-grey-9">
            <div class="row items-center q-gutter-x-sm q-gutter-y-xs">
              <a
                v-for="button in buttons1"
                :key="button.text"
                class="YL__drawer-footer-link"
                href="javascript:void(0)"
              >
                {{ button.text }}
              </a>
            </div>
          </div>
          <div class="q-py-md q-px-md text-grey-9">
            <div class="row items-center q-gutter-x-sm q-gutter-y-xs">
              <a
                v-for="button in buttons2"
                :key="button.text"
                class="YL__drawer-footer-link"
                href="javascript:void(0)"
              >
                {{ button.text }}
              </a>
            </div>
          </div>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { fabYoutube } from '@quasar/extras/fontawesome-v5'
export default {
  name: 'MyLayout',
  data () {
    return {
      leftDrawerOpen: false,
      search: '',
      links1: [
        { icon: 'home', text: 'Home' },
        { icon: 'whatshot', text: 'Trending' },
        { icon: 'subscriptions', text: 'Subscriptions' }
      ],
      links2: [
        { icon: 'folder', text: 'Library' },
        { icon: 'restore', text: 'History' },
        { icon: 'watch_later', text: 'Watch later' },
        { icon: 'thumb_up_alt', text: 'Liked videos' }
      ],
      links3: [
        { icon: fabYoutube, text: 'YouTube Premium' },
        { icon: 'local_movies', text: 'Movies & Shows' },
        { icon: 'videogame_asset', text: 'Gaming' },
        { icon: 'live_tv', text: 'Live' }
      ],
      links4: [
        { icon: 'settings', text: 'Settings' },
        { icon: 'flag', text: 'Report history' },
        { icon: 'help', text: 'Help' },
        { icon: 'feedback', text: 'Send feedback' }
      ],
      buttons1: [
        { text: 'About' },
        { text: 'Press' },
        { text: 'Copyright' },
        { text: 'Contact us' },
        { text: 'Creators' },
        { text: 'Advertise' },
        { text: 'Developers' }
      ],
      buttons2: [
        { text: 'Terms' },
        { text: 'Privacy' },
        { text: 'Policy & Safety' },
        { text: 'Test new features' }
      ]
    }
  },
  created () {
    this.fabYoutube = fabYoutube
  },
  methods:{

    signout(){

      this.$router.push('/')
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

<style scoped>

</style>