<template>
  <section
    class="text-white flex justify-around items-center border-y border-secondary py-3"
  >
    <div
      v-for="(item, index) in interactionItems"
      :key="index"
      class="flex items-center cursor-pointer"
    >
      <component :is="item.icon" class="w-6 h-6 mr-2" />
      {{ item.count > 0 ? item.count : item.label }}
    </div>
    <div class="relative">
      <Menu as="div">
        <menu-button class="-m-2.5 p-2.5 flex items-center cursor-pointer">
          <share-icon class="w-6 h-6 mr-2" />
          Share
        </menu-button>
        <transition
          enter-active-class="transition ease-out duration-100"
          enter-from-class="transform opacity-0 scale-95"
          enter-to-class="transform opacity-100 scale-100"
          leave-active-class="transition ease-in duration-75"
          leave-from-class="transform opacity-100 scale-100"
          leave-to-class="transform opacity-0 scale-95"
        >
          <menu-items
            class="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-card py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none"
          >
            <menu-item v-for="text in shareText" :key="text">
              <a href="#" class="block px-3 py-1 text-sm leading-6 text-white">{{
                text
              }}</a>
            </menu-item>
          </menu-items>
        </transition>
      </Menu>
    </div>
  </section>
</template>

<script setup>
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'

import {
  HeartIcon,
  ChatBubbleLeftEllipsisIcon,
  ShareIcon,
} from '@heroicons/vue/24/outline'

const props = defineProps({
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

const shareText = ['Facebook', 'Twitter', 'Copy Link']

const interactionItems = [
  { icon: HeartIcon, count: props.like, label: 'Like' },
  { icon: ChatBubbleLeftEllipsisIcon, count: props.comment, label: 'Comment' },
]
</script>
