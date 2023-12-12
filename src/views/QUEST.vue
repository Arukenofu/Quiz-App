<script setup>
import router from "../router/index.js";
import {onMounted, ref} from "vue";
import {useQuestsStore} from "../stores/store.js";
import {useTopics} from "@/stores/topics.js";

const checkedId = ref(null);

const store = useQuestsStore();

const playSfx = () => {
  const audio = new Audio('../public/pick.mp3');
  audio.volume = 0.3;
  audio.play()
};

onMounted(() => {
  if (useTopics().selectedTopic === null) {
    router.push('/');
  }
})

const {currentQuest} = store;
</script>

<template>
  <div class="main">
    <h1>
      Угадай философа по цитате!
    </h1>
    <div class="image">

    </div>
    <blockquote>
      <p>
        {{currentQuest.quote}}
      </p>
    </blockquote>

    <div class="variants">
      <div class="variant"
           v-for="(answer, index) in currentQuest.a"
           :key="index"
           @click="checkedId = index; useQuestsStore().userAnswer = index; playSfx()"
      >
        <input type="radio" name="variant" :checked="checkedId === index">
        <span>
          {{answer}}
        </span>
      </div>
    </div>

    <button
        @click="router.push('/answer')"
        :disabled="checkedId === null"
    >
      Выбрать
    </button>
  </div>
</template>

<style lang="scss" scoped>
.main {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  max-height: 700px;
  background-color: #393446;
  padding: 40px 25px;
  border-radius: 10px;
  transition: filter 1s ease;
  zoom: 1.04;

  &:hover {
    filter: drop-shadow(0 0 2.5em #B84DFFAA);
  }

  h1 {
    text-align: center;
    font-size: 1.5rem;
    margin-bottom: 20px;
  }

  .image {
    margin: 0 auto 15px auto;
    background-image: url('../assets/quote.png');
    background-size: cover;
    background-position: center;
    width: 80%;
    aspect-ratio: 1/0.8;
    border-radius: 3px;
  }

  blockquote {
    width: 85%;
    margin: 0 auto 15px auto;
    border-left: 4px #5b469f solid;

    p {
      margin-left: 10px;
      font-size: .87rem;
      font-weight: 500;
    }
  }

  .variants {
    display: flex;
    flex-wrap: wrap;
    width: 85%;
    height: 100%;
    margin: 0 auto 15px auto;
    gap: 4px;
    flex-grow: 1;

    .variant {
      flex: 1;
      min-width: 45%;
      min-height: 35px;
      display: flex;
      align-items: center;
      background-color: #423954;
      border-radius: 3px;
      cursor: pointer;


      &:hover {
        background-color: #4c4360;
      }

      input {
        margin-left: 9px;
        width: 12px;
        height: 12px;
        -webkit-appearance: none;
        appearance: none;
        font: inherit;
        color: currentColor;
        border: 0.1em solid currentColor;
        border-radius: 50%;
        display: grid;
        place-content: center;
        cursor: pointer;

        &::before {
          content: "";
          width: 12px;
          height: 12px;
          border-radius: 50%;
          transform: scale(0);
          transition: 120ms transform ease-in-out;
          box-shadow: inset 1em 1em #FFFFFF;
        }

        &:checked::before {
          transform: scale(1);
        }
      }

      span {
        margin-left: 3px;
        font-size: 0.8rem;
        padding: 10px 0;
      }
    }
  }

  button {
    display: flex;
    margin: 0 auto;
    padding: 14px 33px;
    border: none;
    border-radius: 3px;
    background-color: #594a75;
    color: #FFFFFF;
    cursor: pointer;

    &:active {
      opacity: 0.9;
    }

    &:disabled {
      opacity: 0.7;
      cursor: auto;
    }
  }
}
</style>