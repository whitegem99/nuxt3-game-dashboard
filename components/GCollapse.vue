<script setup>
defineProps({
  items: {
    type: Array,
    default: () => [],
  },
  keyTitle: {
    type: String,
    default: "title",
  },
  keyId: {
    type: String,
    default: "id",
  },
});

const openedId = ref("");
</script>
<template>
  <div class="w-full flex flex-col">
    <template v-for="item in items" :key="item[keyId]">
      <div
        class="cursor-pointer flex rounded text-lg bg-dark-24/70 mb-2.5 sm:mb-4 !p-0 gap-x-1 sm:gap-x-8 overflow-hidden justify-between"
        :ui="{ rounded: 'rounded' }"
        size="md"
        @click="
          openedId === item[keyId] ? (openedId = '') : (openedId = item[keyId])
        "
      >
        <slot name="header-title" :item="item">
          <span class="truncate text-lg py-3 pl-7 sm:pl-12 pr-0">
            {{ item[keyTitle] }}
          </span>
        </slot>
        <div
          class="w-14 sm:w-24 h-14 flex items-center justify-center bg-dark-24"
        >
          <GIcon
            name="i-heroicons-chevron-down-20-solid"
            class="w-10 h-10 transform transition-transform duration-200"
            :class="[openedId === item[keyId] && '-rotate-180']"
          />
        </div>
      </div>
      <div
        :style="`${
          openedId === item[keyId]
            ? 'height: auto; max-height: 600px'
            : 'max-height: 0;'
        }`"
        class="transition-all overflow-hidden"
      >
        <slot name="content" :item="item">
          {{ item.content }}
        </slot>
      </div>
    </template>
  </div>
</template>
