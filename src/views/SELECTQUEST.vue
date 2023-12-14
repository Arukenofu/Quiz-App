<script setup>
import {ref, watch} from "vue";
import router from "@/router/index.js";
import {useTopics} from "@/stores/topics.js";
import axios from "axios";
import {useQuestsStore} from "@/stores/store.js";

const store = useTopics();

const playingAnimation = ref(true);

const isError = ref(false)
const errorMessage = ref('')

const next = () => {
  if (store.topicID === store.topics.length-1) {
    store.topicID = 0;
    return;
  }
  store.topicID++;
}

const prev = () => {
  if (store.topicID === 0) {
    store.topicID = store.topics.length-1;
    return;
  }
  store.topicID--
}

const reload = () => {
  location.reload();
}

const play = async () => {
  store.selectedTopic = store.topicID;

  const res = await axios.post('http://localhost:3000/data', {id: store.selectedTopic})
      .catch(error => {
        if (error) {
          isError.value = true;

          // const elem = document.querySelectorAll("#app *:not(.error-modal)");
          // for (let i = 0; i < elem.length; i++) {
          //   elem[i].style.filter = 'blur(5px)';
          // }

          errorMessage.value =
              '<b>Код ошибки: 500 - Внутренняя ошибка сервера</b> <br>' +
              'Мы обнаружили проблему при попытке обращения к серверу.'
        }
      });

  useQuestsStore().questsList = res.data;

  await router.push('/quest')
}

watch(() => store.topicID, () => {
  playingAnimation.value = false;

  setTimeout(() => {
    playingAnimation.value = true;
  }, 200)
})
</script>

<template>
  <div class="modal-bg" v-if="isError">
    <div class="error-modal">
      <h2>Ошибка!</h2>

      <span class="material-symbols-outlined">
      warning
    </span>

      <p v-html="errorMessage" />

      <button @click="reload()">
        Перезагрузить страницу
      </button>
    </div>
  </div>

  <h1>Выбор уровня</h1>
  <transition name="v">
    <div class="card" v-if="playingAnimation">
      <h3>{{store.currentTopic.name}}</h3>
      <div class="image" :style="`background-image: url('${store.currentTopic.image}')`" />
      <button @click="play()">
        Играть
      </button>
    </div>
  </transition>
  <div class="controls">
    <div class="prev material-symbols-outlined" @click="prev()">
      arrow_back_ios
    </div>
    <div class="next material-symbols-outlined" @click="next()">
      arrow_forward_ios
    </div>
  </div>
</template>

<style scoped lang="scss">
.modal-bg {
  z-index: 2;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(1, 1, 1, 0.4);

  .error-modal {
    z-index: 2;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #4c4360;
    width: 30%;
    height: 59%;
    border-radius: 9px;
    padding: 15px 25px;

    h2 {
      margin-top: 1.2rem;
      font-size: 2rem;
      text-align: center;
      margin-bottom: .5rem;
    }

    span {
      display: table;
      margin: 0 auto 10px auto;
      font-size: 7rem;
      color: rgba(245, 30, 30, 1);
    }

    p {
      display: block;
      margin: 0 auto 25px auto;
      width: 330px;
      padding: 10px 10px;
      border: 2px solid rgba(245, 30, 30, 0.5);
      border-radius: 3px;
      background-color: rgba(245, 30, 30, 0.2);
      font-size: .8rem;
    }

    button {
      display: flex;
      margin: 0 auto;
      padding: 12px 30px;
      cursor: pointer;
      border-radius: 3px;
      background-color: #883e3e;
      border: 2px solid #b92b2b;
      color: #FFFFFF;

      &:active {
        opacity: .7;
      }
    }
  }
}

h1 {
  left: 50%;
  transform: translateX(-50%);
  margin-top: 15px;
  position: absolute;
  font-size: 1.9rem;
}

.card {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  min-height: 500px;
  max-height: 640px;
  background-color: #393446;
  padding: 30px 25px;
  border-radius: 10px;
  transition: filter 1s ease;

  h3 {
    font-size: 1.2rem;
    text-align: center;
    margin-bottom: 20px;
  }

  .image {
    width: 90%;
    margin: 0 auto 15px auto;
    aspect-ratio: 1/1;
    background-size: cover;
    background-position: center;
    border-radius: 6px;
  }

  button {
    display: flex;
    margin: 0 auto;
    padding: 12px 30px;
    cursor: pointer;
    border: none;
    border-radius: 3px;
    background-color: #594a75;
    color: #FFFFFF;

    &:active {
      opacity: .9;
    }
  }
}

.controls {

  .material-symbols-outlined {
    position: absolute;
    font-size: 2rem;
    cursor: pointer;
    padding: 20px;
  }
  .prev {
    top: 45%;
    left: 25%;
    transform: translate(-50%);
  }
  .next {
    top: 45%;
    left: 75%;
    transform: translate(-50%);
  }
}


.v-enter-active,
.v-leave-active {
  transition: opacity 0.4s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}


</style>