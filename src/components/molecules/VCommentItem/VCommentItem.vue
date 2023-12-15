<template>
  <article class="flex space-x-4">
    <v-avatar size="small" :avatar="avatar" />
    <div class="text-white">
      <div class="bg-secondary p-4 rounded-2xl">
        <h4 class="text-sm font-extrabold">{{ comment.authorUser.nickname }}</h4>
        <p class="text-sm mt-1">{{ comment.content }}</p>
      </div>
      <footer class="text-xs px-4 py-1 space-x-2">
        <span class="font-semibold">Reply</span>
        <time :datetime="comment.createdAt">15 hours ago</time>
      </footer>
    </div>
  </article>
</template>

<script setup>
import { computed } from 'vue'

import { VAvatar } from '@/components/atoms/VAvatar'

const props = defineProps({
  comment: {
    type: Object,
    default: () => {},
  },
})
const avatar = computed(() => ({
  img: props.comment.authorUser.avatar,
  username: props.comment.authorUser.username,
}))
</script>
