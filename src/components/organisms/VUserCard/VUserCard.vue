<template>
  <main class="grid grid-cols-4">
    <article
      class="rounded-xl bg-card text-card-foreground shadow flex p-4 h-full flex-col justify-between"
    >
      <div class="flex gap-4 items-center space-y-1.5 relative pb-2">
        <v-avatar
          size="medium"
          img="https://api.dicebear.com/6.x/lorelei/svg?seed=Bret"
        />
        <div>
          <h3 class="max-h-8 w-full overflow-hidden text-lg font-bold tracking-wide">
            Leanne Graham
          </h3>
          <p class="text-sm text-gray-400">@Bret</p>
        </div>
      </div>
      <div class="shrink-0 bg-border h-[1px] w-full my-8"></div>
      <p class="text-xs tracking-wider text-gray-400">COMPANY</p>
      <p class="font-semibold">Romaguera-Crona</p>
      <p class="text-xs text-gray-400">Multi-layered client-server neural-net</p>
    </article>
  </main>
</template>

<script setup>
import VAvatar from '@/components/atoms/VAvatar'
</script>
