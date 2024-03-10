<template>
  <component
    :is="as"
    class="overflow-hidden rounded-lg divide-y divide-gray-200 dark:divide-gray-800 ring-1 ring-gray-200 dark:ring-gray-800 shadow bg-white dark:bg-gray-900"
  >
    <div class="px-4 py-5 sm:px-6">
      <slot name="header"></slot>
    </div>
    <div class="px-4 py-5 sm:p-6">
      <slot />
    </div>
  </component>
</template>

<script setup>
defineProps({
  as: {
    type: String,
    default: "div",
  },
});

</script>
