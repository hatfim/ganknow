<template>
  <aside class="px-5 md:pt-4">
    <v-comment-input />
    <section class="space-y-2 mt-4">
      <div v-for="comment in displayedComments" :key="comment.id">
        <v-comment-item :comment="comment" />
        <div v-if="comment.replies" class="pl-12 mt-4">
          <v-comment-item
            v-for="comment_replies in comment.replies"
            :key="comment_replies.id"
            :comment="comment_replies"
          />
        </div>
      </div>
    </section>
    <button
      v-if="comments.length > 2"
      class="mt-4 font-bold"
      @click="toggleComments"
    >
      {{ showAllComments ? 'Hide Comment' : `View ${totalComments} more comments` }}
    </button>
  </aside>
</template>

<script setup>
import { computed, ref } from 'vue'

import VCommentInput from '@/components/molecules/VCommentInput'
import VCommentItem from '@/components/molecules/VCommentItem'

import comments from './data'

const showAllComments = ref(false)

const displayedComments = computed(() =>
  showAllComments.value ? comments : comments.slice(0, 2)
)
const totalComments = computed(() => {
  let total = 0
  comments.forEach((comment) => {
    total += 1
    if (comment.replies) {
      total += comment.replies.length
    }
  })
  return total - 2
})

const toggleComments = () => {
  showAllComments.value = !showAllComments.value
}
</script>
