<template>
  <v-user-card />
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'

import VUserCard from '@/components/organisms/VUserCard'

const store = useStore()

const users = computed(() => store.getters['users/getUsers'])
console.log(users)

onMounted(async () => {
  try {
    await store.dispatch('users/fetchUsers')
  } catch (error) {
    console.error('Error fetching data:', error)
  }
})
</script>
