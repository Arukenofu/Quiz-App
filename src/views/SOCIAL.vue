<script setup>
import {ref} from "vue";

const isLiked = ref(false);
</script>

<template>
<div class="content">
  <div class="header">
    <div class="image" />
    <div class="info">
      <h4>Philosophy Group</h4>
      <p>3 дек в 23:20</p>
    </div>
    <div class="space" />
    <div class="material-symbols-outlined">
      more_horiz
    </div>
  </div>
  <div class="text">
    <p>
      <span>
        🎭 Путешествие в Мир Идей с Платоном: Игра в Реальности! 🌌✨
      </span>
      <br>
      Привет, увлеченные исследователи реальности! 🚀 Давайте организуем виртуальное путешествие в мир идей, вдохновленное философией Платона! 🧠🌈
      <br>
      🚪 Шаг 1: Открой дверь в свой мир идей!
      Вместе с Платоном представьте, что перед вами дверь. Откройте ее и войдите в мир бескрайних идей! Какие у вас возникают мысли?
      <br>
      🌟 Шаг 2: Создай свой мир идеальных форм!
      Используйте фантазию и рисуйте в умах свои идеальные формы. Как бы вы представили идеальный мир, идеальное общество или идеальное событие? 🌍🌟
      <br>
      🤔 Шаг 3: Обсуди свои идеи!
      Поделись своими мыслями в комментариях. Может быть, кто-то из ваших друзей предложит новый взгляд на идею или дополнит ее! 🗣️💬
      <br>
      🎨 Шаг 4: Играй в «Идеальную Игру»!
      Предложи друзьям присоединиться к игре. Каждый выбирает идею и создает короткую историю, как если бы они находились в мире этой идеи. Поделись своими историями и посмотрите, как они переплетаются! 📖🔗
      <br>
      🌈 Шаг 5: Вдохновись результатами!
      Посмотрите, какие уникальные идеи и истории возникли из этой игры. Может быть, кто-то придумает что-то такое, что привнесет в вашу реальность новые краски и эмоции! 🎨🚀
      <br>
      Давайте весело проведем время, играя с идеями и воплощая их в нашей реальности! 💡🌟
      <br>
      <span>
        #Идея #ПутешествиеСПлатоном #ФилософияВДействии
      </span>
    </p>
  </div>
  <div class="image">

  </div>
  <div class="controls">
    <div class="likes" @click="isLiked =! isLiked">
      <span class="material-symbols-outlined" :style="isLiked ? 'color: #ff3c40' : 'color: #ffffff'">
        favorite
      </span>
      <span class="text">
        {{43476 + isLiked}}
      </span>
    </div>
    <div class="send material-symbols-outlined">
      share
    </div>
    <div class="space" />
    <div class="watches">
      1.2М
    </div>
  </div>
</div>
  <div class="mb"><br></div>
</template>

<style scoped lang="scss">
.content {
  display: flex;
  flex-direction: column;
  margin: 60px auto 60px auto;
  background-color: #371f59;
  width: 40%;
  min-height: 700px;
  border-radius: 12px;
  padding: 10px 30px 30px 30px;

  .header {
    width: 100%;
    display: flex;
    align-items: center;
    height: 80px;
    gap: 10px;

    .image {
      height: 40px;
      border-radius: 50%;
      background-image: url("https://4brain.ru/blog/wp-content/uploads/2020/11/filosofija.png");
      background-color: #4800d3;
      background-position: center;
      background-size: cover;
      aspect-ratio: 1/1;
    }

    .space {
      flex: 1;
    }

    .info {
      h4 {
        font-size: 0.95rem;
      }
      p {
        font-size: .75rem;
      }
    }

    .material-symbols-outlined {
      font-weight: 400;
      cursor: pointer;
      margin-right: 10px;
    }
  }

  .text {
    font-size: .9rem;

    br {
      content: "";
      display: block;
      margin-bottom: 20px;
    }

    span {
      color: #a5ffff;
      cursor: pointer;

      &:first-child { 
        color: #00ffff;
        font-size: 1.03rem;
      }
    }
  }

  & > .image {
    margin-top: 20px;
    border-radius: 10px;
    width: 100%;
    aspect-ratio: 1/1;
    background-image: url("https://republic.ru/public/magazines/philosophy.png");
    background-size: cover;
    background-position: center;
  }

  .controls {
    padding-top: 10px;
    width: 100%;
    display: flex;
    height: 50px;

    .likes {
      display: flex;
      align-items: center;
      background-color: #2b2934;
      border-radius: 20px;
      cursor: pointer;

      .material-symbols-outlined {
        padding-top: 2px;
        margin-left: 15px;
        font-size: 1.2rem;
        font-variation-settings:
            'FILL' 1,
            'wght' 400,
            'GRAD' 0,
            'opsz' 24
      }

      .text {
        margin-left: 5px;
        margin-right: 20px;
        font-size: .8rem;
      }
    }

    .send {
      margin-left: 10px;
      height: 100%;
      aspect-ratio: 1/1;
      border-radius: 50%;
      font-size: 1.3rem;
      background-color: #2b2934;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }

    .space {
      flex: 1;
    }

    .watches {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: .85rem;
      padding-right: 10px;
    }
  }
}
</style>