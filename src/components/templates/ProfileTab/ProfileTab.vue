<template>
  <div class="grid md:grid-cols-5 gap-4">
    <div class="col-span-2">
      <div class="flex flex-col bg-card p-4 md:rounded-lg drop-shadow">
        <h3 class="text-sm md:text-xl font-bold text-white mb-4 whitespace-pre-line">
          Get to know me!
        </h3>
        <h2 class="text-sm md:text-base text-white mb-4">
          {{ userProfile.description }}
        </h2>
        <div
          v-if="userProfile && userProfile.id"
          class="grid grid-cols-8 grid-flow-row auto-rows-max items-center mt-4 border-t-2 border-white/[.2] space-y-2 pt-4"
        >
          <a
            v-for="(data, platform) in iconMappings"
            :key="platform"
            :href="getSocialMediaUrl(platform)"
            target="_blank"
            rel="noopener noreferrer ugc"
          >
            <img :width="38" :height="38" :src="data.icon" :alt="platform" />
          </a>
        </div>
      </div>
    </div>
    <div class="col-span-3">
      <h2 class="ml-4 mb-4 text-2xl text-black dark:text-white font-semibold">
        Timeline
      </h2>
      <section class="space-y-4">
        <v-feed-card v-for="feed in feeds" :key="feed.id" :feed="feed" />
      </section>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

import VFeedCard from '@/components/organisms/VFeedCard'

import iconMappings from './constant'

const store = useStore()

const userProfile = computed(() => store.getters['profile/getProfile'])
const socialMediaLinks = computed(() => store.getters['profile/getSocialMedia'])
const feeds = computed(() => store.getters['feeds/getFeeds'])

const getSocialMediaUrl = (platform) => socialMediaLinks.value[platform]
</script>
