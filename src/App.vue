<template>
  <model-box />
</template>

<script>
import ModelBox from "@/components/ModelBox.vue";

export default {
  name: "App",
  components: {
    ModelBox,
  },
  data() {
    return {
      src: require("@/assets/background.svg"),
    };
  },
};
</script>

<style>
@font-face {
  font-family: "Roboto";
  src: local("Roboto"), url(./fonts/Roboto-Regular.ttf) format("truetype");
}
* {
  font-family: "Roboto";
  margin: 0;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 16px;
  /* identical to box height, or 107% */

  color: #9994b5;
}
</style>
