<template>
  <transition
    enter-active-class="transition ease-out duration-300"
    enter-from-class="transform opacity-0"
    enter-to-class="transform opacity-100"
    leave-active-class="transition ease-in duration-200"
    leave-from-class="transform opacity-100 "
    leave-to-class="transform opacity-0"
  >
    <div
      class="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
      v-if="modelValue"
    >
      <div
        class="fixed inset-0 transition-opacity bg-gray-200/75 dark:bg-gray-800/75"
      ></div>

      <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div
          class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
        >
          <!--
          Modal panel, show/hide based on modal state.
  
          Entering: "ease-out duration-300"
            From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            To: "opacity-100 translate-y-0 sm:scale-100"
          Leaving: "ease-in duration-200"
            From: "opacity-100 translate-y-0 sm:scale-100"
            To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        -->
          <div
            class="relative bg-gray-900 transform overflow-hidden rounded-lg text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
          >
            <div class="flex flex-col">
              <!-- header -->
              <slot name="header">
                <div class="border-b border-gray-800">
                  <div
                    class="flex items-center justify-between px-4 py-5 sm:px-6"
                    v-if="title"
                  >
                    <h3 class="text-lg font-semibold leading-6 text-white">
                      {{ title }}
                    </h3>
                    <button
                      type="button"
                      class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 p-1.5 hover:text-gray-900 text-gray-200 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center -my-1"
                      @click="$emit('update:modelValue', false)"
                    >
                      <span
                        class="i-heroicons-x-mark-20-solid flex-shrink-0 h-5 w-5"
                        aria-hidden="true"
                      ></span>
                    </button>
                  </div>
                </div>
              </slot>

              <div class="px-4 py-5">
                <slot />
              </div>
            </div>
            <slot name="footer">
              <div
                class="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6"
                v-if="hideFooter"
              >
                <button
                  type="button"
                  class="inline-flex w-full justify-center rounded-md bg-cyan-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                >
                  OK
                </button>
                <button
                  type="button"
                  class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                  @click="$emit('update:modelValue', false)"
                >
                  Cancel
                </button>
              </div>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: "",
  },
  hideFooter: {
    type: Boolean,
    default: false,
  },
});
</script>
