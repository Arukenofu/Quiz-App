<script setup>
import {computed, onMounted, ref} from "vue";
import {useQuestsStore} from "../stores/store.js";
import router from "../router/index.js";

onMounted(async () => {
  if (useQuestsStore().correctAnswers === 0) {
    await router.push('/')
  }
})

const {correctAnswers, questsList} = useQuestsStore()

const rate = computed(() => {
  if (correctAnswers < 5) {
    return 'Плохо.'
  }
  if (correctAnswers < 10) {
    return 'Неплохо'
  }
  return 'Отлично!'
})

const animationByRate = computed(() => {
  switch (rate.value) {
    case 'Плохо.':
      return 'bad'
    case 'Неплохо':
      return 'good'
    case 'Отлично!':
      return 'awesome'
  }
})

const buttonAvailable = ref(false);

const reload = () => {
  useQuestsStore().currentQuestId = 0;
  useQuestsStore().correctAnswers = 0;
  useQuestsStore().userAnswer = 0;
}

setTimeout(() => {
  buttonAvailable.value = true
}, 1600)
</script>

<template>
  <transition name="fade" mode="out-in" appear>
    <div class="main" :class="`${animationByRate}`" >
      <h3>
        Результат
      </h3>
      <h1 v-if="useQuestsStore().questsList">
        {{correctAnswers}} / {{questsList.length}}
      </h1>
      <h4>
        {{rate}}
      </h4>

      <transition name="appear">
        <div class="controls" v-if="buttonAvailable">
          <button @click="reload(); router.push('/quest');">
            Начать заново
          </button>

          <button @click="router.push('/'); reload()">
            В меню
          </button>
        </div>
      </transition>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
.main {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  min-height: 500px;
  max-height: 640px;
  background-color: #393446;
  padding: 50px 25px;
  border-radius: 10px;
  transition: filter 1s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  zoom: 1.04;

  h3 {
    font-size: 1.1rem;
    font-weight: 500;
    text-align: center;
  }
  h1 {
    text-align: center;
    font-weight: 700;
    font-size: 6rem;
  }
  h4 {
    text-align: center;
    font-size: 1rem;
    font-weight: 400;
  }

  .controls {
    left: 50%;
    bottom: 65px;
    transform: translateX(-50%);
    position: absolute;
    display: flex;
    justify-content: space-evenly;
    width: 50%;
    margin: 0 auto;

    button {
      width: 110px;
      height: 50px;
      border: none;
      border-radius: 5px;
      background-color: #594a75;
      font-weight: 500;
      font-size: .8rem;
      color: #FFFFFF;
      cursor: pointer;
      transition: transform 0.2s ease-in-out;

      &:hover {
        transform: translateY(-5px);
      }

      &:active {
        opacity: .9;
      }
    }
  }
}

.awesome {
  animation-name: awesome;
  animation-duration: 7s;
  animation-iteration-count: infinite;
}

.good {
  animation-name: good;
  animation-duration: 15s;
  animation-iteration-count: infinite;
}

.bad {
  animation-name: bad;
  animation-duration: 15s;
  animation-iteration-count: infinite;
}

@keyframes awesome {
  0% {
    filter: drop-shadow(0 0 3em #F9FF4DAA);
  }
  14.2% {
    filter: drop-shadow(0 0 3em #4DFF65AA);
  }
  28.4% {
    filter: drop-shadow(0 0 3em #4DFFF0AA);
  }
  42.6% {
    filter: drop-shadow(0 0 3em #4D6BFFAA);
  }
  56.8% {
    filter: drop-shadow(0 0 3em #C44DFFAA);
  }
  69% {
    filter: drop-shadow(0 0 3em #FF4DF0AA);
  }
  81.2% {
    filter: drop-shadow(0 0 3em #FF2932AA);
  }
  100% {
    filter: drop-shadow(0 0 3em #F9FF4DAA);
  }
}

@keyframes good {
  0% {
    filter: drop-shadow(0 0 2.5em #F9FF4DAA);
  }
  50% {
    filter: drop-shadow(0 0 3em #F9FF4DAA);
  }
  100% {
    filter: drop-shadow(0 0 2.5em #F9FF4DAA);
  }
}

@keyframes bad {
  0% {
    filter: drop-shadow(0 0 2em #ABABABAA);
  }
  100% {
    filter: drop-shadow(0 0 2em #ABABABAA);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.appear-enter-active,
.appear-leave-active {
  transition: opacity 1s ease;
}

.appear-enter-from,
.appear-leave-to {
  opacity: 0;
}
</style>