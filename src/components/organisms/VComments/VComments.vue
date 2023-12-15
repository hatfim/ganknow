<template>
  <v-comment-item :comment="comment" />
</template>

<script setup>
import { VCommentItem } from '@/components/atoms/VCommentItem'

const comment = {
  id: '9ab6d023-8b80-47a2-b3b4-d7378bb7a22b',
  createdAt: '2023-12-13T09:18:56+08:00',
  updatedAt: '2023-12-13T09:18:56+08:00',
  content: 'kaname stop using my photos please ',
  author: '3f639cae-93ac-4f34-85ac-a5199de47a2b',
  post_id: '41da4b3a-df7c-4f6b-919b-aa900f611f69',
  post: null,
  authorUser: {
    avatar:
      'https://lh3.googleusercontent.com/rcLPF-4COjx1mlsuuz62PYoXkH7OmhYTMIE2CLP0eTobYSav7zvrkmN1kejeb8KpRU7384wt8ApUq49kmRn5LQfx-OY6cvbD-bfNDWeLH4YLhFd1At6RIQ',
    email: 'ketsumehatsume@gmail.com',
    id: '3f639cae-93ac-4f34-85ac-a5199de47a2b',
    nickname: 'Shumie',
    isMembershipEnabled: true,
    roles: null,
    profile: {
      customization: {
        badges: ['tick'],
      },
    },
  },
  replyToID: null,
  replies: null,
  softDeletedAt: null,
}
</script>
