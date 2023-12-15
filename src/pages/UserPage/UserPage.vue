<template>
  <main>
    <section class="max-w-screen-2xl mx-auto">
      <img
        src="https://lh3.googleusercontent.com/zcMc1m2N6S5WlRwjYS_IKk02_MVuuE5UrULO7jhE38vf7gQgKqdBmvRFE6m67P1tNqdDpemYS61QMRWwkMUSOAKy9QhmG5By5hOJHppjZqOknUJ0YUEr=s1024"
        alt="Paddie's - Gank Profile Cover"
        class="w-full h-full object-center object-cover"
      />
    </section>
    <section class="max-w-6xl mx-auto px-4 lg:px-8">
      <header class="flex justify-between items-center -top-4 lg:-top-6">
        <div
          class="flex flex-col md:flex-row justify-start md:items-center space-y-4 md:space-x-8"
        >
          <v-avatar :avatar="avatar" />
          <div class="flex flex-col">
            <h1 class="inline-flex items-center space-x-2">
              <span class="text-2xl font-bold text-primary-foreground">Paddie</span>
              <check-badge-icon class="h-5 w-5 text-primary" />
            </h1>
            <p class="inline-flex items-center space-x-1 text-primary-foreground">
              <heart-icon class="h-5 w-5 text-primary" />
              <span class="text-sm md:text-base">
                <span class="font-bold">323.5k</span> Followers
              </span>
            </p>
          </div>
        </div>
        <div class="flex justify-end items-center space-x-2">
          <v-button class="rounded-lg hidden md:inline-flex">
            Support Me
            <heart-icon class="h-4 w-4" />
          </v-button>
          <v-button class="rounded-lg"> Follow </v-button>
          <v-button variant="outline" class="rounded-lg">
            <share-icon class="w-5 h-5" />
          </v-button>
        </div>
      </header>
      <v-tab-nav :navs="tabs" :current="currentRouteName" />
      <router-view v-slot="{ Component }">
        <transition>
          <component :is="Component" />
        </transition>
      </router-view>
    </section>
  </main>
</template>

<script setup>
import { computed } from 'vue';
import { RouterView, useRoute } from 'vue-router';

import { ShareIcon } from '@heroicons/vue/24/outline';
import { CheckBadgeIcon, HeartIcon } from '@heroicons/vue/24/solid';

import { VAvatar } from '@/components/atoms/VAvatar';
import { VButton } from '@/components/atoms/VButton';
import { VTabNav } from '@/components/molecules/VTabNav';

const route = useRoute();
const currentRouteName = computed(() => route.name);

const props = defineProps({
  username: {
    type: String,
    default: undefined,
  },
});

const tabs = [
  { name: 'profile', label: 'Profile', link: `/${props.username}` },
  { name: 'feed', label: 'Feed', link: `/${props.username}/feed` },
  { name: 'shop', label: 'Shop', link: `/${props.username}/shop` },
];

const avatar = {
  img: 'https://lh3.googleusercontent.com/c8z_1HCYhinbcI164YumELKjAM3EUpTQdlshVxBwpXHuCD698DERm_-61z0poqOzbJEGuHuXxLHyNfEXg_Wiz4IZhSuykxgGHfrAt1LHr6kKhROpC4Txvg',
  username: 'Paddie',
};
</script>

<style scoped>
/* Define your slide transition */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}

.slide-enter-to,
.slide-leave-from {
  transform: translateX(0);
}
</style>
