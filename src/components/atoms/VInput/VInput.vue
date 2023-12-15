<template>
  <div>
    <label v-if="label" :for="id" class="sr-only">Email</label>
    <input
      :id="id"
      :type="type"
      :placeholder="placeholder"
      :value="modelValue"
      class="block w-full rounded-md bg-secondary border-0 py-1.5 text-white shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6"
      @click="handleInput"
    />
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

defineProps({
  id: {
    type: String,
    default: undefined,
  },
  label: {
    type: String,
    default: undefined,
  },
  placeholder: {
    type: String,
    default: undefined,
  },
  modelValue: {
    type: [String, Number],
    default: undefined,
  },
  type: {
    type: String,
    default: 'text',
  },
})

const emits = defineEmits(['update:modelValue'])

const handleInput = ($event) => {
  emits('update:modelValue', $event.target.value)
}
</script>
