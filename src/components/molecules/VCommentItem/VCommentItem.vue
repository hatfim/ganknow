<template>
  <article class="flex space-x-2">
    <v-avatar size="small" :img="comment.authorUser.avatar" />
    <div class="text-white">
      <div class="bg-secondary p-4 rounded-2xl">
        <h4 class="text-sm font-extrabold">{{ comment.authorUser.nickname }}</h4>
        <p ref="contentContainer" class="text-sm mt-1"></p>
      </div>
      <footer class="text-xs px-4 py-1 space-x-2">
        <span class="font-semibold">Reply</span>
        <time :datetime="comment.createdAt" class="text-gray-400">15 hours ago</time>
      </footer>
    </div>
  </article>
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue'

import safeHtmlConverter from '@/composables/useSafeHtmlConverter'

import VAvatar from '@/components/atoms/VAvatar'

const contentContainer = ref(null)

const props = defineProps({
  comment: {
    type: Object,
    default: () => {},
  },
})

const commentContent = computed(() => props.comment.content)
const { safeHtml } = safeHtmlConverter(commentContent)

onMounted(() => {
  if (contentContainer.value) {
    contentContainer.value.innerHTML = safeHtml.value
  }
})

watch(safeHtml, (newHtml) => {
  if (contentContainer.value) {
    contentContainer.value.innerHTML = newHtml
  }
})
</script>
