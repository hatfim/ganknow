<template>
  <div v-if="users && users.length > 0" class="grid md:grid-cols-4 gap-4">
    <v-user-card v-for="user in users" :key="user.id" :user="user" />
  </div>
  <div v-else>
    No users found.
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'

import VUserCard from '@/components/organisms/VUserCard'

const store = useStore()

const users = computed(() => store.getters['users/getUsers'])

onMounted(async () => {
  try {
    await store.dispatch('users/fetchUsers')
  } catch (error) {
    console.error('Error fetching data:', error)
  }
})
</script>
