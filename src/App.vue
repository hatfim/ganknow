<template>
  <v-navbar />
  <router-view />
  <footer></footer>
</template>

<script setup>
import { RouterView } from 'vue-router'

import { VNavbar } from '@/components/molecules/VNavbar'
</script>
