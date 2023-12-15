<template>
  <component
    :is="tag"
    class="inline-flex text-white items-center justify-center rounded-full font-bold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
    :class="[
      variantClasses[variant] || variantClasses['default'],
      sizeClasses[size] || sizeClasses['default'],
    ]"
    :disabled="disabled"
  >
    <slot></slot>
  </component>
</template>

<script setup>
// Define props
defineProps({
  tag: {
    type: String,
    default: 'button',
  },
  variant: {
    type: String,
    default: 'default',
  },
  size: {
    type: String,
    default: 'default',
  },
  disabled: Boolean,
});

// Variant classes
const variantClasses = {
  default: 'bg-primary shadow hover:bg-primary/80',
  destructive: 'bg-destructive shadow-sm hover:bg-destructive/90',
  outline: 'border border-primary bg-transparent shadow-sm hover:bg-primary',
  secondary: 'bg-secondary shadow-sm hover:bg-secondary/80',
  ghost: 'hover:bg-accent hover:text-accent-foreground',
  link: 'text-primary underline-offset-4 hover:underline',
};

// Size classes
const sizeClasses = {
  default: 'gap-x-2 px-6 py-2.5',
  medium: 'gap-x-1.5 px-4 py-2',
  small: 'gap-x-1.5 px-2.5 py-1.5',
};
</script>
