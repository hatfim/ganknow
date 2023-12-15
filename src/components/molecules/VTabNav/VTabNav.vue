<template>
  <div class="border-b border-secondary">
    <nav class="-mb-px flex space-x-4" aria-label="Tabs">
      <router-link
        v-for="nav in navs"
        :key="nav.name"
        :to="nav.link"
        class="whitespace-nowrap border-b-4 py-4 px-1 text-xl font-medium"
        :class="tabClass(nav.name)"
        :aria-current="nav.name === current ? 'page' : undefined"
      >
        {{ nav.label }}
      </router-link>
    </nav>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

// Define props
const props = defineProps({
  navs: {
    type: Array,
    default: () => [],
  },
  current: {
    type: String,
    default: undefined,
  },
})

const tabClass = computed(
  () => (tabName) =>
    tabName === props.current
      ? 'border-primary text-primary'
      : 'border-transparent text-gray-400 hover:text-white',
)
</script>
