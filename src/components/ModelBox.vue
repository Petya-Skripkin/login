<template>
  <form class="img" @submit.prevent :style="`background-image: url(${src})`">
    <img :src="logo" alt="" class="logo" />
    <div class="model">
      <h2 class="title">Авторизация</h2>
      <p>Телефон:</p>
      <my-input
        v-model="updateNumber"
        maska="+7(###)-###-##-##"
        placeholder="+7 (___) ___ - __ - __"
      />
      <label class="agree">
        <input type="checkbox" name="agree" style="margin-right: 12px" />
        Я соглашаюсь на передачу и обработку персональных данных и подтверждаю
        свое совершеннолетие.
      </label>
      <p>Авторизация через:</p>
      <div class="net">
        <label
          class="radio"
          v-for="item in items"
          :key="item"
          :for="item"
          :class="pick === item && 'check'"
        >
          <radio-btn :value="item" v-model:value="pick" />
          {{ item }}
        </label>
      </div>
      <my-button @click="onSubmit">ПОЛУЧИТЬ КОД</my-button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      pick: "SMS",
    }
  },
  props: {
    src: String,
    logo: String,
    items: Array,
  },
  methods: {
    updateNumber(e) {
      this.$emit('update:number', e.target.value)
    },
    updatePick() {
      this.$emit('update:pick', this.pick)
    },
    onSubmit() {
      console.log("It's work");
    }
  }
};
</script>

<style scoped>
.img {
  display: flex;
  justify-content: center;
  width: auto;
  min-height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background: rgb(80, 55, 104);
}

.model {
  max-width: 25%;
  display: flex;
  flex-direction: column;
  margin-top: 10%;
  padding: 60px 100px;
  background: #172144;
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

@media screen and (max-width: 1000px) {
  .logo {
    height: 40px;
  }
  .model {
    max-width: 50%;
    padding: 15px 25px;
  }
  .net {
    flex-direction: column;
    border-radius: 20px;
  }
}
@media screen and (max-width: 600px) {
  .logo {
    display: none;
  }

  .model {
    max-width: 60%;
    padding: 10px 20px;
  }

  .title{
    font-size: 20px;
  }

  .agree {
    font-size: 8px;
  }
}
</style>