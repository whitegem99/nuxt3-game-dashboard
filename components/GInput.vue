<script setup>
defineProps({
  modelValue: {
    type: [String, Number],
    default: "",
  },
  icon: {
    type: String,
    default: "",
  },
  placeholder: {
    type: String,
    default: "",
  },
});

defineEmits(["update:modelValue", "blur"]);

</script>

<template>
  <div class="relative">
    <input
      :value="modelValue"
      type="text"
      :placeholder="placeholder"
      class="form-input relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 rounded-md placeholder-gray-400 dark:placeholder-gray-500 text-sm px-3 py-2 shadow-sm bg-white text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 ps-10 dark:bg-dark-24 border-none"
      @input="$emit('update:modelValue', $event.target.value)"
      @blur="$emit('blur')"
    />
    <span
      class="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-3"
      v-if="icon"
    >
      <span
        :class="`${icon} flex-shrink-0 text-gray-400 dark:text-gray-500 h-5 w-5`"
      >
      </span>
    </span>
  </div>
</template>
