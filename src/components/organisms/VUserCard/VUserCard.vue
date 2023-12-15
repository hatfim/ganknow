<template>
  <article class="rounded-xl bg-card text-card-foreground shadow flex p-4 w-full h-full flex-col justify-between">
    <div class="flex flex-col gap-4 space-y-1.5 relative pb-2">
      <v-avatar size="medium" :img="`https://api.dicebear.com/6.x/lorelei/svg?seed=${user.username}`" />
      <div>
        <h3 class="max-h-8 w-full overflow-hidden text-lg font-bold tracking-wide">
          {{ user.name }}
        </h3>
        <p class="text-sm text-gray-400"><a :href="`mailto:${user.email}`">{{ user.email }}</a></p>
      </div>
    </div>
    <div class="shrink-0 bg-border h-[1px] w-full my-8"></div>
    <p class="text-xs tracking-wider text-gray-400">COMPANY</p>
    <p class="font-semibold">{{ user.company.name }}</p>
    <p class="text-xs text-gray-400">{{ user.company.catchPhrase }}</p>
  </article>
</template>

<script setup>
import VAvatar from '@/components/atoms/VAvatar'

defineProps({
  user: {
    type: Object,
    required: true,
  },
})
</script>
