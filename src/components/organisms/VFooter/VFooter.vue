<template>
  <footer class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">

    <div
      class="flex justify-start items-start 4xl:items-start self-center gap-8 w-full mt-8 pt-8 border-t border-t-secondary">
      <div>
        <img :src="logoMain" alt="GankNow - Logo" class="h-9" />
      </div>
      <div class="block text-white/60 text-xs w-full max-w-xs">
        <a href="https://ganknow.com" class="text-primary font-bold">
          Gank
        </a>
        is a content membership platform that helps content creators accept donations, sell goods and services, and manage
        memberships at 0% platform fees.
      </div>
      <div class="text-xs text-white/60">
        <p>
          Gank Pte. Ltd.
        </p>
        <p>
          9 North Buona Vista Drive, #02-01, Metropolis Tower 1
        </p>
        <p>
          Singapore 138588
        </p>
        <p>
          Email: support@gankglobal.com
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import logoMain from '@/assets/images/logo_main.svg'

</script>
