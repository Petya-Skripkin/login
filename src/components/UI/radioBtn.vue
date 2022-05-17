<template>
  <input
    type="radio"
    name="radio"
    :value="value"
    :id="value"
    @input="updateInput"
    class="inviz"
  />
</template>

<script>
export default {
  name:  "radio-btn",
  props: {
    value: {
      required: true,
      type: [String, Number],
    },
  },
  methods: {
    updateInput(event) {
      this.$emit('update:value', event.target.value)
    }
  }
};
</script>

<style>
.inviz {
  position: absolute;
  left: 99999px;
  z-index: 0;
  opacity: 0;
}
</style>