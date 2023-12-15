<template>
  <article class="bg-card py-5 rounded-lg">
    <header class="flex justify-between items-center px-5">
      <div class="flex flex-col md:flex-row justify-start md:items-center space-x-2">
        <v-avatar size="small" :img="feed?.authorUser?.avatar" />
        <div class="flex flex-col">
          <h2 class="inline-flex items-center space-x-1">
            <span class="font-bold text-primary-foreground">{{
              feed.authorUser.nickname
            }}</span>
            <check-badge-icon v-if="hasTickBadge" class="h-5 w-5 text-primary" />
          </h2>
          <p class="text-xs text-gray-400">{{ timeAgo }}</p>
        </div>
      </div>
      <ellipsis-vertical-icon class="w-6 h-6" />
    </header>
    <section class="px-5 space-y-4 text-white">
      <h2>
        <span v-if="isPage" class="text-xl font-extrabold">{{ feed.title }}</span>
        <router-link
          v-else
          class="text-xl font-extrabold"
          :to="`/post/${feed.id}`"
          >{{ feed.title }}</router-link
        >
      </h2>
      <div ref="contentContainer" class="space-y-4"></div>
    </section>
    <figure v-if="feed.postMedia.length > 0" class="mt-4">
      <img class="w-full" :src="media" />
    </figure>
    <section class="px-5 md:pt-4">
      <v-feed-action
        class="mt-4"
        :like="feed.postSummary.count_like"
        :share="feed.postSummary.count_share"
        :comment="feed.postSummary.count_comment"
      />
    </section>
    <v-comments />
  </article>
</template>

<script setup>
import { computed, onMounted, watch, ref } from 'vue'
import { useRoute, RouterLink } from 'vue-router'

import { CheckBadgeIcon, EllipsisVerticalIcon } from '@heroicons/vue/24/solid'

import useConvertText from '@/composables/useConvertText'
import safeHtmlConverter from '@/composables/useSafeHtmlConverter'
import useTimeAgo from '@/composables/useTimeAgo'

import VAvatar from '@/components/atoms/VAvatar'
import VFeedAction from '@/components/molecules/VFeedAction'
import VComments from '@/components/organisms/VComments'

const contentContainer = ref(null)
const route = useRoute()

const props = defineProps({
  feed: {
    type: Object,
    default: () => {},
  },
})
const isPage = computed(() => route.name === 'post')
const media = computed(() =>
  props.feed.postMedia.length > 0 ? props.feed.postMedia[0].url : undefined,
)
const { formattedFeedContent } = useConvertText(props.feed.content)

const timeAgo = useTimeAgo(props.feed.createdAt)
const hasTickBadge = computed(() =>
  props.feed.authorUser.profile.customization.badges.includes('tick'),
)
const { safeHtml } = safeHtmlConverter(formattedFeedContent)

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
