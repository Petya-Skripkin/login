<template>
  <input
    class="input"
    type="text"
    :value="modelValue"
    @input="updateValue"
    v-maska="`${maska}`"
    :placeholder="placeholder"
  />
</template>

<script>
export default {
  name: "my-input",
  props: {
    modelValue: [String, Number],
    maska: String,
    placeholder: String,
  },
  methods: {
    updateValue(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
};
</script>

<style>
.input {
  font-size: 20px;
  padding: 12px;
  margin-top: 15px;
  margin-bottom: 25px;
  border: 1px solid rgba(153, 148, 181, 0.1);
  border-radius: 8px;
  background: rgba(16, 23, 39, 0.5);
  outline: none;
}
</style>