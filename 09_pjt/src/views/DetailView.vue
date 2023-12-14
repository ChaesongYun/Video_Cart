<template>
  <div class="card container">
    <div class="card-body component">
      <iframe :src="videoURL" width="500" height="300"></iframe>
      <button
        type="button"
        @click="addCart(videoURL)"
        class="btn btn-secondary"
      >
        나중에 볼 동영상 저장
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
// const video = ref("");
const v_url = route.params.videoDetailId;

const videoURL = `https://www.youtube.com/embed/${v_url}`;
const addCart = function (v_url) {
  const existingCart = JSON.parse(localStorage.getItem("video")) || [];
  const isDuplicate =
    existingCart.length > 0 && existingCart.find((item) => item == v_url);
  if (!isDuplicate) {
    alert("나중에 볼 동영상에 추가합니다! 보관함으로 이동합니다");
    existingCart.push(v_url);
  } else {
    alert("이미 있는 동영상입니다! 보관함으로 이동합니다ㅏㅏ");
  }
  localStorage.setItem("video", JSON.stringify(existingCart));
  router.push("/cart");
};
console.log();
</script>

<style scoped>
.component {
  display: flex;
  justify-content: space-around;
  margin: 10px;
}

button {
  width: 95px;
  height: 65px;
  font-size: smaller;
  margin: auto 0;
  border-radius: 3px;
}
</style>
