<template>
  <div class="relative inline-block" @click="handleClick">
    <img
      :src="avatar.img"
      :alt="`${avatar.username} Avatar`"
      class="rounded-full"
      :class="[imgSizeClasses[size] || imgSizeClasses['default']]"
    />
    <span
      v-if="status"
      class="absolute right-2 top-2 block rounded-full ring-2 ring-white"
      :class="[
        statusSizeClasses[size] || statusSizeClasses['default'],
        statusClasses[status] || statusClasses['default'],
      ]"
    />
  </div>
</template>

<script setup>
import { defineEmits } from 'vue';

defineProps({
  avatar: {
    type: Object,
    default: () => {},
  },
  size: {
    type: String,
    default: 'default',
  },
  status: {
    type: String,
    default: '',
  },
});

// Size classes
const imgSizeClasses = {
  default: 'w-24 lg:w-32 ring-4 ring-white',
  medium: 'w-12',
  small: 'w-10',
};
const statusSizeClasses = {
  default: 'h-4 w-4',
  medium: 'h-2.5 w-2.5',
};

const statusClasses = {
  offline: 'bg-gray-300',
  online: 'bg-green-600',
  idle: 'bg-orange-400',
};

const emit = defineEmits(['click']);

const handleClick = (event) => {
  emit('click', event);
};
</script>
