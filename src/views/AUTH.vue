<script setup>
import {reactive, ref} from "vue";
import axios from "axios";
import router from "@/router/index.js";

const isLogin = ref(true)

const isLoginText = (first, second) => {
  return isLogin.value ? first : second
}

const loginInput = reactive({
  email: '',
  password: ''
})

const login = async () => {
  try {
    const res = await axios.post('http://localhost:3000/login', {
      email: loginInput.email,
      password: loginInput.password
    })

    localStorage.setItem('token', res.data.token);
    localStorage.setItem('id', res.data.id);

    await router.push('/')
  } catch (e) {
    console.log(e)
  }


}

const registerInput = reactive({
  email: '',
  nickname: '',
  password: ''
})

const register = async () => {
  const res = await axios.post('http://localhost:3000/register', {
    email: registerInput.email,
    nickname: registerInput.nickname,
    password: registerInput.password
  })
}

</script>

<template>
<div class="card">
  <h2>{{ isLoginText('Войти', 'Регистрация') }}</h2>
  <span>
    {{isLoginText('Пожалуйста, войдите, чтобы продолжить работу со своей учетной записью.', 'Регистрируйтесь для использования наших услуг.')}}
  </span>

  <form @submit.prevent="login()  " v-if="isLogin">
    <label for="email">
      Почта
    </label>
    <input type="text" name="email" placeholder="example@exmpl.com" v-model="loginInput.email">

    <label for="password">
      Пароль
    </label>
    <input type="password" name="password" placeholder="examplepassword123_" v-model="loginInput.password">

    <button type="submit">
      Войти
    </button>
  </form>

  <form @submit.prevent="register()" v-else>
    <label for="email">
      Почта
    </label>
    <input type="text" name="email" v-model="registerInput.email" placeholder="example@exmpl.com">

    <label for="nickname">
      Никнейм
    </label>
    <input type="text" name="nickname" v-model="registerInput.nickname" placeholder="SteepsGranade667">

    <label for="password">
      Пароль
    </label>
    <input type="password" name="password" v-model="registerInput.password">

    <button type="submit">
      {{isLoginText('Войти', 'Регистрация')}}
    </button>
  </form>

  <p @click="isLogin =! isLogin">
    {{isLoginText('Регистрация', 'Войти')}}
  </p>
</div>
</template>

<style scoped lang="scss">
.card {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30%;
  min-height: 65%;
  background-color: #393446;
  border-radius: 9px;
  padding: 25px 55px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    font-size: 2rem;
  }

  span {
    font-size: .9rem;
    margin-bottom: 20px;
  }

  form {
    display: flex;
    flex-direction: column;

    label {
      font-weight: 500;
      margin-bottom: 3px;
    }

    input {
      margin-bottom: 15px;
      padding: 10px;
      border-radius: 8px;
      background: none;
      outline: none;
      border: 2px solid rgba(255, 255, 255, 0.51);
      color: #ffffff;
      font-weight: 500;
    }

    button {
      margin-top: 10px;
      padding: 15px 0;
      cursor: pointer;
    }
  }

  p {
    font-size: 14px;
    margin-top: 10px;
    text-align: center;
    color: rgba(0, 208, 255, 0.78);
    text-decoration: underline;
    cursor: pointer;
  }
}
</style>