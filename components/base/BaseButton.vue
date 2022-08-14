<template>
  <button
    class="bg-indigo-900 text-white transition duration-500 rounded-md px-5 py-3
      sm:px-8 sm:py-4 
      hover:text-indigo-800 hover:bg-white hover:shadow-lg hover:-translate-y-2 hover:scale-105 transform"
    @click="handleClicked"
    :disabled="disabled"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleClicked() {
      if (!this.disabled) {
        this.$emit('click')
      }
    }
  },
};
</script>

<style></style>
