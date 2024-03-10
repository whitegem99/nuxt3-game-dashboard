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

defineEmits(["update:modelValue", "blur"]);

const isOpen = ref(false);
const handleClickOut = () => {
  isOpen.value = false;
};
</script>

<template>
  <div class="relative inline-block text-left" v-click-out="handleClickOut">
    <div @click="isOpen = !isOpen"><slot /></div>
    <transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <div
        v-if="isOpen"
        class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-dark-24 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none border border-neutral-500"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabindex="-1"
      >
        <div
          class="py-1 text-gray-200/80 origin-top-right divide-y divide-neutral-500"
          role="none"
        >
          <div v-for="(group, idx) in items" :key="idx">
            <a
              v-for="(item, ii) in group"
              :key="ii"
              :href="item.link"
              class="block px-4 py-2 text-sm hover:text-white"
              role="menuitem"
              tabindex="-1"
              id="menu-item-0"
              >{{ item.label }}</a
            >
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
