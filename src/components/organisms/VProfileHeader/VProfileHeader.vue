<template>
  <header class="flex justify-between items-center -top-4 lg:-top-6">
    <div
      class="flex flex-col md:flex-row justify-start md:items-center space-y-4 md:space-x-8"
    >
      <v-avatar :img="profile.avatar" />
      <div class="flex flex-col">
        <h1 class="inline-flex items-center space-x-2">
          <span class="text-2xl font-bold text-primary-foreground">{{
            profile.nickname
          }}</span>
          <check-badge-icon class="h-5 w-5 text-primary" />
        </h1>
        <p class="inline-flex items-center space-x-1 text-primary-foreground">
          <heart-icon class="h-5 w-5 text-primary" />
          <span class="text-sm md:text-base">
            <span class="font-bold">323.5k</span> Followers
          </span>
        </p>
      </div>
    </div>
    <div class="flex justify-end items-center space-x-2">
      <v-button class="rounded-lg hidden md:inline-flex">
        Support Me
        <heart-icon class="h-4 w-4" />
      </v-button>
      <v-button class="rounded-lg"> Follow </v-button>
      <v-button variant="outline" class="rounded-lg">
        <share-icon class="w-5 h-5" />
      </v-button>
    </div>
  </header>
</template>

<script setup>
import { ShareIcon } from '@heroicons/vue/24/outline'
import { CheckBadgeIcon, HeartIcon } from '@heroicons/vue/24/solid'

import VAvatar from '@/components/atoms/VAvatar'
import VButton from '@/components/atoms/VButton'

defineProps({
  profile: {
    type: Object,
    required: true,
  },
})
</script>
