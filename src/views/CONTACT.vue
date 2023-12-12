<script setup>
console.log(3 + '1');
</script>

<template>
<div class="discover">
  <div class="header">
    <span>
      Знакомства
    </span>
  </div>
  <div class="discover-container">
    <div class="image">
      <div class="controls">
        <span class="material-symbols-outlined">
          group_add
        </span>
        <span class="material-symbols-outlined">
          close
        </span>
      </div>
    </div>

    <div class="info">
      <h4>Платон, 42</h4>

      <h5>
        Приветствую в мире мыслей и духовных бесед!
      </h5>

      <span>
Меня зовут Платон, философ из древней Афины, стремящийся к идеалам истины и справедливости. 🏛️ Мои дни наполнены не только философскими дискуссиями в Академии, но и стремлением понять идеи, лежащие в основе мира.
<br>
Мое философское вдохновение черпается из углубленного изучения идеальных форм и теории идей. Я верю в существование мира, который превосходит материальную реальность, мир идеальных истин. 🌌
<br>
Мои работы, такие как "Государство", "Федр" и "Полития", стали краеугольными камнями для понимания государства, любви и общества. В них я раскрываю свое видение идеального общества, где справедливость и истина занимают центральное место. 📜
<br>
Мой идеальный вечер — это долгие беседы под звездами, где мы можем обсудить природу человека, общества и идеального государства. Я ценю глубокие разговоры о философии, чтение философских трудов и исследование мира идей. 🌙
<br>
В отношениях я ищу интеллектуальную открытость и любовь к духовному развитию. Отношения для меня — это не только обмен чувствами, но и обмен идеями, поиск истины и взаимопонимание. 💖
<br>
Мои стремления включают в себя продолжение развития моих философских идей, нахождение истины и ее распространение. В отношениях ценю взаимное уважение и поддержку в духовном росте. 🌱
<br>
Если ты готов(а) к увлекательным беседам о высших истинах, добро пожаловать в мой мир идей, где мы вместе можем исследовать тайны философии и духовности. 🌈🚀
      </span>

      <button>
        Добавить
      </button>
    </div>
  </div>
</div>
</template>

<style scoped lang="scss">
.discover {
  height: 80vh;
  width: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  gap: 12px;

  .header {
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    background-color: #454154;
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;

    span {
      margin-left: 25px;
      font-size: 1.2rem;
      font-weight: 600;
    }
  }

  .discover-container {
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    background-color: #454154;
    width: 100%;
    height: calc(100% - 80px);
    display: flex;

    .image {
      position: relative;
      background-image: url("https://avatars.dzeninfra.ru/get-zen_doc/1718877/pub_64e279fbc036e9440444d338_64e27a4bca10f739ac4fd0e7/scale_1200");
      width: 50%;
      background-position: center;
      background-size: cover;
      height: 100%;
      border-bottom-left-radius: 15px;

      .controls {
        position: absolute;
        display: flex;
        bottom: 0;
        width: 100%;
        height: 90px;
        justify-content: center;
        gap: 20px;

        span {
          display: flex;
          height: 65px;
          align-items: center;
          justify-content: center;
          aspect-ratio: 1/1;
          border-radius: 50%;
          background-color: #ffffff;
          color: #000000;
          font-weight: 600;
          font-size: 1.5rem;
          cursor: pointer;

          &:hover {
            scale: 1.1;
          }

          &:first-child {
            background-color: #179b00;
            color: #FFFFFF;
          }
        }
      }
    }

    .info {
      width: 50%;
      padding: 0 33px 25px 33px;
      overflow-y: scroll;

      &::-webkit-scrollbar {
        height: 12px;
        width: 9px;
        background: #2b2934;
      }

      &::-webkit-scrollbar-thumb {
        background-color: #716c88;
      }

      h4 {
        padding-top: 8px;
        position: sticky;
        top: 0;
        display: flex;
        height: 60px;
        font-weight: 800;
        background-color: #454154;
        font-size: 2.3rem;
      }

      h5 {
        margin-top: 10px;
        font-size: 1rem;
        font-weight: 600;
        margin-bottom: 15px;
      }

      span {
        font-size: .9rem;
        font-weight: 300;

        br {
          display: block; /* makes it have a width */
          content: ""; /* clears default height */
          margin-top: 20px; /* change this to whatever height you want it */
        }
      }

      button {
        display: flex;
        justify-content: center;
        margin: 12px auto 0 auto;
        width: 30%;
        border: none;
        padding: 10px 0;
        border-radius: 3px;
        background-color: #6c6296;
        color: #FFFFFF;
        cursor: pointer;

        &:active {
          opacity: 0.9;
        }
      }
    }
  }
}
</style>