<script setup>
const props = defineProps({
  name: {
    required: true,
  },
  time: {
    type: String,
    default: "00:00",
  },
  url: {
    type: String,
    default: "",
  },
  ready_to_play: {
    type: Boolean,
    default: false,
  },
});
defineEmits(["click"]);
</script>
<template>
  <div
    class="flex gap-5 pl-7 sm:pl-12 items-center bg-dark-bd/20 rounded text-white"
  >
    <div class="flex-1 flex justify-between">
      <p>{{ name }}</p>
      <span>{{ time }} hrs</span>
    </div>
    <div>
      <div
        v-if="ready_to_play"
        @click="$emit('click')"
        :padded="false"
        variant="link"
        class="btn-custom cursor-pointer flex items-center justify-center w-14 sm:w-24 h-14 sm:h-16 bg-dark-24/70 rounded-none transition-all"
      >
        <GIcon name="i-heroicons-play-20-solid" class="w-6 h-6" />
      </div>
      <div
        v-else
        @click="$emit('click')"
        :padded="false"
        variant="link"
        class="btn-custom cursor-pointer flex items-center justify-center w-14 sm:w-24 h-14 sm:h-16 bg-dark-24/70 rounded-none transition-all"
      >
        <GIcon name="i-mdi-refresh" class="w-6 h-6" />
      </div>
    </div>
  </div>
</template>

<style></style>
