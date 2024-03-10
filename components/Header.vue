<template>
  <header
    class="flex gap-4 justify-between items-center px-4 bg-dark-24 sm:bg-dark-43 shadow-sm shadow-neutral-950"
  >
    <img src="/logo.png" width="60" />
    <GInput
      icon="i-heroicons-magnifying-glass-20-solid"
      placeholder="Search..."
      :class="`w-full ${isSearch ? '' : 'hidden sm:block'}`"
      input-class="dark:bg-dark-24 border-none"
      @blur="isSearch = false"
    />
    <div class="flex items-center gap-4">
      <button v-if="!isSearch" @click="isSearch = true" class="sm:hidden">
        <GIcon name="i-heroicons-magnifying-glass-20-solid" class="w-8 h-8" />
      </button>
      <button @click="isOpen = true" :padded="false">
        <GIcon name="i-heroicons-bars-3-solid" class="text-2xl w-8 h-8" />
      </button>
    </div>
  </header>
</template>

<script setup>
const isOpen = ref(false);
const isSearch = ref(false);
</script>
