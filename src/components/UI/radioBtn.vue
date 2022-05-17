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
  display: none;
  /* z-index: 0;
  opacity: 0;
  position: absolute;
  transform: scale(0.0001); */
}
</style>