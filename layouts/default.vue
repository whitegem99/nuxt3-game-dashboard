<template>
  <div>
    <Header class="mb-0 sm:mb-5" />
    <div class="mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
      <slot />
    </div>
  </div>
</template>
<script setup>
const mixpanel = useMixpanel();
mixpanel.track("Page View");
</script>
