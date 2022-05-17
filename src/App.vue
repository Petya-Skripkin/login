<template>
  <model-box
    @number="number"
    :src="src"
    :logo="logo"
    @pick="pick"
    :items="items"
  />
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
      number: String,
      logo: require("@/assets/logo.svg"),
      pick: "SMS",
      items: ["SMS", "WhatsApp", "Telegram"],
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
