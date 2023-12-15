<template>
  <main class="space-y-4">
    <section class="space-y-4 max-w-2xl mx-auto">
      <v-feed-card v-for="feed in feeds" :key="feed.id" :feed="feed" />
    </section>
  </main>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

import VFeedCard from '@/components/organisms/VFeedCard'

const store = useStore()

const feeds = computed(() => store.getters['feeds/getFeeds'])
</script>
