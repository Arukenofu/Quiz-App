<script setup>
import {onMounted, ref, provide, inject} from "vue";
import {useQuestsStore} from "../stores/store.js";
import router from "../router/index.js";

const store = useQuestsStore();
const {userAnswer, currentQuest, increment, incrementCorrectAnswers} = store;

onMounted(async () => {
  if (userAnswer === 0) {
    await router.push('/');
  }

  const musicRoot = inject('musicRoot');
  musicRoot.volume = 0.05;

  const audio = new Audio();
  audio.volume = 0.1;
  isCorrect.value = currentQuest.a[currentQuest.qa] === currentQuest.a[userAnswer];

  if (isCorrect.value) {
    incrementCorrectAnswers();
    audio.src = ('../public/win.mp3')
    audio.play()
  } else {
    audio.src = ('../public/loose.mp3')
    audio.play()
  }

  musicRoot.volume = 0.2;
})

const isCorrect = ref(true)

</script>

<template>
  <transition name="fade" mode="out-in" appear>
    <div class="main" :class="isCorrect ? 'correct' : 'wrong'" v-if="currentQuest">
      <h1>
        {{isCorrect ? 'Правильно!' : 'Неправильно!'}}
      </h1>
      <div class="image" :style="`background-image: url('${currentQuest.image}')`" />
      <h4>
        Правильный ответ
        -
        {{currentQuest.a[currentQuest.qa]}}
      </h4>
      <button @click="increment()">
        Следующее
      </button>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
.main {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 450px;
  min-height: 550px;
  background-color: #393446;
  padding: 40px 25px;
  border-radius: 10px;
  transition: filter 0.5s ease-in-out;
  zoom: 1.01;

  h1 {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 20px;
    animation: 5s scale-up-down infinite;
    transition: scale 1s;
  }

  .image {
    margin: 0 auto 15px auto;
    background-size: cover;
    background-position: center;
    max-width: 73%;
    aspect-ratio: 1/1;
    border-radius: 6px;
  }

  h4 {
    text-align: center;
    font-size: .95rem;
    font-weight: 500;
    margin-bottom: 20px;
  }

  button {
    display: flex;
    margin: 0 auto;
    padding: 15px 30px;
    border: none;
    border-radius: 3px;
    background-color: #594a75;
    color: #FFFFFF;
    cursor: pointer;

    &:active {
      opacity: .9;
    }
  }
}
.wrong {
  filter: drop-shadow(0 0 2.5em #FF2B2BFF);

  &:hover {
    filter: drop-shadow(0 0 3em #FF2B2BFF);
  }
}
.correct {
  filter: drop-shadow(0 0 2.5em #47ff2b);

  &:hover {
    filter: drop-shadow(0 0 3em #47ff2b);
  }
}
@keyframes scale-up-down {
  0% {
    scale: 1.1;
  }
  50% {
    scale: 0.9;
    transform: rotate(2deg);
  }
  100% {
    scale: 1.1;
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
</style>