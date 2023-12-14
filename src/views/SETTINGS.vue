<script setup>
import router from "@/router/index.js";
import {onMounted, ref} from "vue";
import axios from "axios";

const isLoaded = ref(false)

const userData = ref([

])

onMounted(async () => {
  userData.value = (await axios.post('http://localhost:3000/getUser', {
    id: localStorage.getItem('id')
  })).data

  isLoaded.value = true;
})

</script>

<template>
<div class="card" v-if="isLoaded">
  <div class="user" @click="router.push('/account')">
    <object class="user-avatar" type="image/svg+xml" data="http://localhost:3000/images/avatars/User9.svg" />
    <div class="user-text-info">
      <h4>{{userData.name}}</h4>
      <p>@{{userData.nickname}}</p>
    </div>
  </div>

  <div class="user-change-info">
    <form @click.prevent>
      <div class="forms">
        <div class="form">
          <label for="username">
            Имя
          </label>
          <input id="username" type="text" :placeholder="userData.name">
        </div>

        <div class="form">
          <label for="nickname">
            Никнейм
          </label>
          <input id="nickname" type="text" :placeholder="userData.nickname">
        </div>

        <div class="form">
          <label for="gender">
            Пол
          </label>
          <select id="gender">
            <option>Мужской</option>
            <option>Женский</option>
          </select>
        </div>
      </div>

      <button type="submit">
        Сохранить
      </button>
    </form>
  </div>

  <div class="divider" />

  <div class="changePassword">
    <h2>Изменить пароль</h2>
    <form @click.prevent>
      <div class="forms">

        <div class="form">
          <label for="oldPassword">
            Старый пароль
          </label>
          <input id="oldPassword" type="password">
        </div>

        <div class="form">
          <label for="newPassword">
            Новый пароль
          </label>
          <input id="newPassword" type="password">
        </div>
      </div>

      <button type="submit">
        Изменить
      </button>
    </form>
  </div>
</div>
</template>

<style scoped lang="scss">
.card {
  display: flex;
  flex-direction: column;
  margin: 60px auto 60px auto;
  background: #19191a;
  width: 600px;
  border-radius: 12px;
  padding: 35px 30px 50px 30px;

  .user {
    display: flex;
    align-items: center;
    height: 70px;
    gap: 12px;
    padding-left: 10px;
    border-radius: 15px;
    cursor: pointer;
    margin-bottom: 20px;

    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }

    .user-avatar {
      height: 55px;
      aspect-ratio: 1/1;
      border-radius: 50%;
    }

    .user-text-info {
      display: flex;
      flex-direction: column;
      
      h4 {
        font-size: .9rem;
      }

      p {
        font-size: .8rem;
      }
    }
  }

  .user-change-info form .forms {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    column-gap: 25px;
    padding: 0 10px;

    .form {
      width: 45%;

      label {
        font-size: .8rem;
        margin-bottom: 5px;
        color: #969a9f;
      }

      input, select {
        border: 1px solid #414141;
        background-color: #292929;
        border-radius: 3px;
        outline: none;
        width: 100%;
        padding: 5px 7px;
        color: #ffffff;
        margin-bottom: 10px;
      }
    }
  }

  .user-change-info form button {
    margin-top: 12px;
    margin-left: 10px;
    padding: 8px 10px;
    border-radius: 6px;
    border: none;
    cursor: pointer;
    color: #000000;

    &:disabled {
      color: #000000;
      opacity: .9;
    }
  }

  .divider {
    margin: 20px 0 10px 0;
    background-color: #414141;
    width: 100%;
    height: 2px;
  }

  .changePassword {
    padding: 0 10px;

    h2 {
      margin-bottom: 10px;
    }

    form .forms {
      width: 100%;

      .form {
        display: flex;
        flex-direction: column;

        label {
          font-size: .8rem;
          margin-bottom: 5px;
          color: #969a9f;
        }

        input {
          width: 50%;
          border: 1px solid #414141;
          background-color: #292929;
          border-radius: 3px;
          outline: none;
          padding: 5px 7px;
          color: #ffffff;
          margin-bottom: 10px;
        }
      }
    }

    form button {
      margin-top: 12px;
      padding: 8px 10px;
      border-radius: 6px;
      border: none;
      cursor: pointer;
      color: #000000;

      &:disabled {
        color: #000000;
        opacity: .9;
      }
    }
  }
}
</style>