<script setup>
defineProps({
  variant: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <button
    class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md gap-x-1.5 px-2.5 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-100 disabled:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700/50 dark:disabled:bg-gray-800 focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center"
    :class="{'': variant=== 'link',  }"
  >
    <slot />
  </button>
</template>
