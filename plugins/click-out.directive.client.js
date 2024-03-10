export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("clickOut", {
    mounted(el, binding) {
      el.clickOutsideEvent = (event) => {
        if (!(el == event.target || el.contains(event.target))) {
          binding.value();
        }
      };
      document.addEventListener("click", el.clickOutsideEvent);
    },
    beforeUnmount(el) {
      document.removeEventListener("click", el.clickOutsideEvent);
    },
  });
});
