<template>
  <header class="bg-background shadow-xl w-full">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex">
          <div class="flex shrink-0 items-center">
            <img
              :src="logoMain"
              alt="GankNow - Logo"
              class="h-9 w-auto hidden lg:block"
            />
            <img
              :src="logoIcon"
              alt="GankNow - Logo"
              class="h-9 w-auto block lg:hidden"
            />
          </div>
          <div class="hidden md:ml-8 md:flex md:items-center md:space-x-6">
            <a
              v-for="item in navigation"
              :key="item.name"
              :href="item.href"
              class="text-white uppercase tracking-wide font-bold hover:text-primary"
              >{{ item.name }}</a
            >
          </div>
        </div>
        <div class="flex items-center gap-2">
          <v-button variant="outline">Login</v-button>
          <v-button class="hidden lg:block">Sign Up</v-button>
          <v-button variant="secondary">
            <language-icon class="-ml-0.5 h-5 w-5" aria-hidden="true" />
            SG-EN
          </v-button>
          <bars-3-icon
            class="block h-8 w-8 text-white lg:hidden"
            aria-hidden="true"
          />
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { LanguageIcon, Bars3Icon } from '@heroicons/vue/24/solid';

import logoIcon from '@/assets/images/logo_icon.svg';
import logoMain from '@/assets/images/logo_main.svg';

import { VButton } from '@/components/atoms/VButton';

const navigation = [
  { name: 'Discover', href: '#' },
  { name: 'Boost', href: '#' },
  { name: 'Creator Grant', href: '#' },
  { name: 'Blog', href: '#' },
];
</script>
