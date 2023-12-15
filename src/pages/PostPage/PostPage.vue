<template>
  <main class="grid grid-cols-1 md:grid-cols-5 gap-4 max-w-6xl mx-auto px-4 lg:px-8 mt-8">
    <section class="col-span-3 order-2 md:order-1">
      <v-feed-card v-if="feed" :feed="feed" />
    </section>
    <div class="col-span-2 order-1 md:order-2">
      <div class="flex flex-col justify-center items-center gap-4 bg-card p-4 md:rounded-lg drop-shadow">
        <v-avatar :img="userProfile.avatar" />
        <h2 class="inline-flex items-center space-x-2">
          <span class="text-2xl font-bold text-primary-foreground">{{
            userProfile.nickname
          }}</span>
          <check-badge-icon class="h-5 w-5 text-primary" />
        </h2>
        <h3 class="text-sm md:text-base text-white mb-4 text-center">
          {{ userProfile.description }}
        </h3>
      </div>
    </div>
  </main>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue'
import { useStore } from 'vuex'

import { CheckBadgeIcon } from '@heroicons/vue/24/solid'

import VAvatar from '@/components/atoms/VAvatar'
import VFeedCard from '@/components/organisms/VFeedCard'

const feed = ref(null)

const store = useStore()
const props = defineProps({
  postId: {
    type: String,
    required: true,
  },
})

const userProfile = computed(() => store.getters['profile/getProfile'])

onMounted(async () => {
  try {
    const fetchedFeed = await store.dispatch('feeds/fetchFeed', props.postId)

    if (fetchedFeed) {
      feed.value = fetchedFeed
      await store.dispatch('profile/fetchUserProfile', fetchedFeed.authorUser.nickname)
    } else {
      console.error('No feed data returned for postId:', props.postId)
    }
  } catch (error) {
    console.error('Failed to fetch feed:', error)
  }
})

</script>
