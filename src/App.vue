<template>
  <v-navbar />
  <router-view />
  <v-footer/>
</template>

<script setup>
import { RouterView } from 'vue-router'

import VNavbar from '@/components/molecules/VNavbar'
import VFooter from '@/components/organisms/VFooter'
</script>
