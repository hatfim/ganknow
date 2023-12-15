<template>
  <main>
    <section class="max-w-screen-2xl mx-auto">
      <img
        src="https://lh3.googleusercontent.com/zcMc1m2N6S5WlRwjYS_IKk02_MVuuE5UrULO7jhE38vf7gQgKqdBmvRFE6m67P1tNqdDpemYS61QMRWwkMUSOAKy9QhmG5By5hOJHppjZqOknUJ0YUEr=s1024"
        alt="Paddie's - Gank Profile Cover"
        class="w-full h-full object-center object-cover"
      />
    </section>
    <section class="max-w-6xl mx-auto px-4 lg:px-8">
      <v-profile-header
        v-if="userProfile && userProfile.id"
        :profile="userProfile"
      />
      <v-tab-nav :navs="tabs" :current="currentRouteName" />
      <div class="w-full overflow-hidden mt-8">
        <router-view v-slot="{ Component }">
          <transition name="fade">
            <component :is="Component" :key="route.fullPath" />
          </transition>
        </router-view>
      </div>
    </section>
  </main>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import { useStore } from 'vuex'

import VTabNav from '@/components/molecules/VTabNav'
import VProfileHeader from '@/components/organisms/VProfileHeader'

const route = useRoute()
const currentRouteName = computed(() => route.name)

const props = defineProps({
  username: {
    type: String,
    default: undefined,
  },
})

const store = useStore()

const tabs = [
  { name: 'profile', label: 'Profile', link: `/${props.username}` },
  { name: 'feed', label: 'Feed', link: `/${props.username}/feed` },
  { name: 'users', label: 'Users List', link: `/${props.username}/users` },
]

const userProfile = computed(() => store.getters['profile/getProfile'])

onMounted(async () => {
  try {
    await store.dispatch('profile/fetchUserProfile', currentRouteName)

    const userId = userProfile.value.id
    if (userId) {
      await store.dispatch('feeds/fetchUserFeed', userId)
    } else {
      console.error('User ID not found in profile')
    }
  } catch (error) {
    console.error('Error fetching data:', error)
  }
})
</script>
