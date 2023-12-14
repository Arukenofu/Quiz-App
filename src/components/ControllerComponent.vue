<script setup>
import {useQuestsStore} from "@/stores/store.js";
import {useRoute} from "vue-router";

const route = useRoute();
</script>


<template>
  <div class="controller" v-if="useQuestsStore().currentQuestId === 0 && route.name !== 'answer' && route.name !== 'quest'">
    <router-link to="/">
      Выбор уровня
    </router-link>
    <router-link to="/account">
      Аккаунт
    </router-link>
    <router-link to="/settings">
      Настройки
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
.controller {
  position: fixed;
  background-color: #211f28;
  bottom: 0;
  left: 50%;
  translate: -50%;
  display: flex;
  height: 60px;
  align-items: center;
  gap: 40px;
  justify-content: center;
  width: 41%;

  a {
    text-align: center;
    width: 30%;
    color: #FFFFFF;
    font-weight: 500;
    text-decoration: none;
  }

  .router-link-active {
    color: #5b469f;
  }
}

</style>