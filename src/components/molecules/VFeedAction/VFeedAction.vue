<template>
  <section
    class="text-white flex justify-around items-center border-y border-secondary py-3"
  >
    <div class="flex items-center cursor-pointer">
      <heart-icon class="w-6 h-6 mr-2" /> {{ like > 0 ? like : 'Like' }}
    </div>
    <div class="flex items-center cursor-pointer">
      <chat-bubble-left-ellipsis-icon class="w-6 h-6 mr-2" />
      {{ comment > 0 ? comment : 'Comment' }}
    </div>
    <div class="flex items-center cursor-pointer">
      <share-icon class="w-6 h-6 mr-2" /> {{ share > 0 ? share : 'Share' }}
    </div>
  </section>
</template>

<script setup>
import {
  HeartIcon,
  ChatBubbleLeftEllipsisIcon,
  ShareIcon,
} from '@heroicons/vue/24/outline'

defineProps({
  like: {
    type: Number,
    default: 0,
  },
  share: {
    type: Number,
    default: 0,
  },
  comment: {
    type: Number,
    default: 0,
  },
})
</script>
