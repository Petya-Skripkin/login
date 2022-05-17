<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "my-button"
};
</script>

<style>
.button {
  margin-top: 35px;
  padding: 15px 0;
  border: none;
  border-radius: 4px;
  box-shadow: 0px 0px 10px #d70e93;
  background: linear-gradient(90deg, #ff00b1 0%, #b423c1 100%);
  color: white;
  cursor: pointer;
  outline: none;
}
</style>