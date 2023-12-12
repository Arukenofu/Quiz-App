<script setup>
import {useQuestsStore} from "./stores/store";
import {useRoute} from "vue-router";
import {provide, ref} from "vue";
import Controller from "@/components/ControllerComponent.vue";

const route = useRoute();

const menuTheme = new Audio('../public/main-menu.mp3')
menuTheme.volume = 0.15;

const playing = ref(false)

function toggleMusic() {
  playing.value ? menuTheme.play() : menuTheme.pause();
}

provide('musicRoot', menuTheme)

const globalMusic = ref();
</script>

<template>
  <audio ref="globalMusic" id="music" />
  <div class="counter" v-if="route.name === 'quest' && useQuestsStore().questsList">
    <span>
      Текущий вопрос - {{ useQuestsStore().currentQuestId + 1 }} / {{ useQuestsStore().questsList.length }}
    </span>
  </div>
  <RouterView v-slot="{ Component }">
    <component :is="Component" />
  </RouterView>

  <div class="left-bar" v-if="route.name !== 'contact' && route.name !== 'social'">
    <div class="material-symbols-outlined" @click="playing =! playing; toggleMusic()">
      {{playing ? 'volume_up' : 'volume_off'}}
    </div>
  </div>
  <controller v-if="route.name !== 'results'" />
  <div>

  </div>
</template>

<style lang="scss" scoped>
.counter {
  padding: 9px;
}

.left-bar {
  position: absolute;
  left: 0;
  width: 50px;
  top: 50%;
  transform: translateY(-50%);
  background-color: #393446;
  border-top-right-radius: 9px;
  border-bottom-right-radius: 9px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  padding: 15px 0;
  gap: 15px;

  div {
    top: 100px;
  }
}

</style>
