<template>
  <div class="flex space-x-2">
    <v-avatar
      size="small"
      img="https://lh3.googleusercontent.com/c8z_1HCYhinbcI164YumELKjAM3EUpTQdlshVxBwpXHuCD698DERm_-61z0poqOzbJEGuHuXxLHyNfEXg_Wiz4IZhSuykxgGHfrAt1LHr6kKhROpC4Txvg"
    />
    <v-textarea id="comment-input" class="flex-1" placeholder="Write a comment" />
    <v-button class="rounded-md">
      <paper-airplane-icon class="h-4 w-4" />
    </v-button>
  </div>
</template>

<script setup>
import { PaperAirplaneIcon } from '@heroicons/vue/24/solid'

import VAvatar from '@/components/atoms/VAvatar'
import VButton from '@/components/atoms/VButton'
import VTextarea from '@/components/atoms/VTextarea'
</script>
