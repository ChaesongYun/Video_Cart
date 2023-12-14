<template>
  <div class="title">
    <h1>비디오 검색 사이트</h1>
    <nav>
      <span><RouterLink :to="{ name: 'home' }">HOME</RouterLink></span>
      <span> | </span>
      <span><RouterLink :to="{ name: 'cart' }">CART</RouterLink></span>
    </nav>
    <input @keyup.enter="search" type="text" v-model="keywords" />
    <RouterView />
  </div>
</template>

<script setup>
import { ref } from "vue";
import {
  useRoute,
  useRouter,
  onBeforeRouteLeave,
  onBeforeRouteUpdate,
} from "vue-router";
import axios from "axios";
const router = useRouter();
const keywords = ref("");
const search = function () {
  router.push(`/${keywords.value}`);
};
</script>

<style scoped>
nav {
  margin-bottom: 20px;
}
.title {
  text-align: center;
  font-weight: bold;
  font-family: "Gowun Dodum", sans-serif;
}
h1 {
  font-weight: bolder;
}
input {
  margin-bottom: 20px;
}
</style>
