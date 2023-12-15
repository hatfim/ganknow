<template>
  <main class="grid grid-cols-1 md:grid-cols-5 max-w-6xl mx-auto px-4 lg:px-8">
    <section class="col-span-3">
      <v-feed-card v-if="feed" :feed="feed" />
    </section>
  </main>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useStore } from 'vuex'

import VFeedCard from '@/components/organisms/VFeedCard'

const feed = ref(null)

const store = useStore()
const props = defineProps({
  postId: {
    type: String,
    required: true,
  },
})

onMounted(async () => {
  try {
    const fetchedFeed = await store.dispatch('feeds/fetchFeed', props.postId)
    if (fetchedFeed) {
      feed.value = fetchedFeed
    } else {
      console.error('No feed data returned for postId:', props.postId)
    }
  } catch (error) {
    console.error('Failed to fetch feed:', error)
  }
})
</script>
