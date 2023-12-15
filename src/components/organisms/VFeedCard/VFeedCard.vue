<template>
  <article class="bg-card py-5 rounded-lg">
    <header class="flex justify-between items-center px-5">
      <div class="flex flex-col md:flex-row justify-start md:items-center space-x-2">
        <v-avatar
          size="medium"
          img="https://lh3.googleusercontent.com/c8z_1HCYhinbcI164YumELKjAM3EUpTQdlshVxBwpXHuCD698DERm_-61z0poqOzbJEGuHuXxLHyNfEXg_Wiz4IZhSuykxgGHfrAt1LHr6kKhROpC4Txvg"
        />
        <div class="flex flex-col">
          <h2 class="inline-flex items-center space-x-1">
            <span class="font-bold text-primary-foreground">Paddie</span>
            <check-badge-icon class="h-5 w-5 text-primary" />
          </h2>
          <p class="text-xs text-gray-400">3 days ago</p>
        </div>
      </div>
      <ellipsis-vertical-icon class="w-6 h-6" />
    </header>
    <section class="px-5 space-y-4 text-white">
      <h2 class="text-xl">Did you attend AFA 2023?</h2>
      <p>Hiya~~~ It's Paddie hereeeee~ 😻😼</p>
      <p>
        We flew Genshin Impact’s Taylor Swift from Vietnam all the way to Singapore
        to experience Anime Festival Asia 2023 🥳 #AFA2023
      </p>
      <p>
        ➡ Watch NOW as we explore #AFA2023 with Hasu Ka, only on Gank Studios:
        https://youtu.be/YAw1vS79q30?feature=shared
      </p>
      <p>
        Subscribe to Gank Studios and watch our latest video as we explore
        #AnimeFestivalAsia2023 in Singapore alongside Gank Vietnam's giveaway winner,
        Hasu Ka! Congratulations once again and thanks for joining us! Gank.VietNam
        🎉
      </p>
      <p>⭐ Support Hasu Ka: https://ganknow.com/Hasuka99</p>
    </section>
    <figure>
      <img
        class="w-full"
        src="https://lh3.googleusercontent.com/pvatWci0yjdkgfLLpFWlhhURsuV6YPmLkDgGa1pBKa7Alnh0Er1H3W6cTBbWj1jfOY6YrqRdHbSZ_LVXRV1xZk3DtWW3FnyDs2XrN_dFCKo8HhB4aVqprg"
      />
    </figure>
    <section class="px-5 md:pt-4">
      <v-feed-action class="mt-4" :like="0" :share="0" :comment="0" />
    </section>
    <v-comments />
  </article>
</template>

<script setup>
import { CheckBadgeIcon, EllipsisVerticalIcon } from '@heroicons/vue/24/solid'

import VAvatar from '@/components/atoms/VAvatar'
import VFeedAction from '@/components/molecules/VFeedAction'
import VComments from '@/components/organisms/VComments'
</script>
