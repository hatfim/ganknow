<template>
  <div class="grid md:grid-cols-5">
    <div class="col-span-2">Sidebar</div>
    <div class="col-span-3">
      <h2>Timeline</h2>
      <v-feed-card />
    </div>
  </div>
</template>

<script setup>
import VFeedCard from '@/components/organisms/VFeedCard'
</script>
