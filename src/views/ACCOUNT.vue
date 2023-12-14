<script setup>
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
  <div class="content" v-if="isLoaded">
    <h2>{{userData.name}}</h2>

    <object type="image/svg+xml" data="http://localhost:3000/images/avatars/User5.svg" />

    <h3>@{{userData.nickname}}</h3>

    <div class="statistics">
      <div class="statistic">
        <span>{{userData.to_char}}</span>
        <h6>День присоединения</h6>
      </div>

      <div class="statistic">
        <span>5 Звёзд</span>
        <h6>Рейтинг</h6>
      </div>

      <div class="statistic">
        <span>4/6</span>
        <h6>Пройдено предметов</h6>
      </div>
    </div>
  </div>

  <div class="a">
    <br>
  </div>
</template>

<style scoped lang="scss">
.content {
  display: flex;
  flex-direction: column;
  margin: 60px auto 60px auto;
  background: -webkit-linear-gradient(180deg, rgb(55, 31, 89), rgb(118, 40, 95));
  background: -moz-linear-gradient(180deg, rgb(55, 31, 89), rgb(118, 40, 95));
  background: linear-gradient(180deg, rgb(55, 31, 89), rgb(118, 40, 95));
  width: 600px;
  border-radius: 12px;
  padding: 35px 30px 50px 30px;

  h2 {
    text-align: center;
    font-size: 1.6rem;
    font-weight: 800;
    margin-bottom: 27px;
  }

  object {
    width: 200px;
    aspect-ratio: 1/1;
    background-color: #5b469f;
    margin: 0 auto 12px auto;
    border-radius: 50%;
  }

  h3 {
    text-align: center;
    font-weight: 500;
    margin-bottom: 27px;
  }

  .statistics {
    margin: 0 auto;
    display: flex;
    width: 75%;
    gap: 15px;
    row-gap: 25px;

    .statistic {
      flex: 1;
      text-align: center;
      min-width: 30%;
      max-width: 31%;

      h6 {
        font-size: .7rem;
        font-weight: 400;
        color: #d3d3d3;
      }
      
      span {
        font-size: 1.8rem;
        font-weight: 600;
      }
    }
  }
}
</style>