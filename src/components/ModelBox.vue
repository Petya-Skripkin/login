<template>
  <div class="img" :style="`background-image: url(${src})`">
    <img :src="logo" alt="" class="logo" />
    <div class="model">
      <h2 class="title">Авторизация</h2>
      <p>Телефон:</p>
      <input
        class="input"
        type="text"
        v-maska="'+7(###)-###-##-##'"
        placeholder="+7 (___) ___ - __ - __"
      />
      <label class="agree">
        <input type="checkbox" name="agree" style="margin-right: 12px;" />
        Я соглашаюсь на передачу и обработку персональных данных и подтверждаю
        свое совершеннолетие.
      </label>
      <p>Авторизация через:</p>
      <div class="net">
        <label class="radio" v-for="item in items" :key="item" :class="pick === item && 'check'">
          <input
            type="radio"
            name="radio"
            :value="item"
            v-model="pick"
            class="inviz"
          />
          {{item}}
        </label>
      </div>
      <button class="button">ПОЛУЧИТЬ КОД</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      src: require("@/assets/background.svg"),
      logo: require("@/assets/logo.svg"),
      pick: "SMS",
      items: ['SMS', 'WhatsApp', 'Telegram']
    };
  },
};
</script>

<style scoped>
.model {
  max-width: 25%;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 20%;
  padding: 60px 100px;
  background: #172144;
}

.img {
  display: flex;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background: rgb(80, 55, 104);
}

.logo {
  position: fixed;
  top: 5%;
  height: 80px;
}

.title {
  margin-bottom: 35px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 900;
  font-size: 30px;
  line-height: 20px;
  /* or 67% */

  text-align: center;
  text-transform: uppercase;

  color: #ffffff;
}

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

.agree {
  display: flex;
  font-size: 12px;
  margin-bottom: 50px;
}

.net {
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
  background: rgba(16, 23, 39, 0.5);
  border-radius: 100px;
}

.radio {
  flex: 1;
  padding: 15px;
  border-radius: 100px;
  text-align: center;
  cursor: pointer;
}

.check {
  color: #ff00b1;
  background: #101727;
}

.inviz {
  position: absolute;
  left: 99999px;
  z-index: 0;
  opacity: 0;
}

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