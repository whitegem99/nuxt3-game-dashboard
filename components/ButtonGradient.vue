<script setup></script>
<template>
  <button
    class="flex justify-center items-center px-3 py-2 rounded-md hover:animate-pulse"
    style="
      background: var(
        --blue-purple-fade,
        linear-gradient(266deg, #033dd1 0%, #401ca8 100%)
      );
      /* box-shadow: 0px 15px 20px 0px rgba(0, 0, 0, 0.5); */
      box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.30);
    "
  >
    <slot />
  </button>
</template>
