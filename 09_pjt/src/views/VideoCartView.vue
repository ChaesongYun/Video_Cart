<template>
  <div>
    <div class="title">나중에 볼 영상입니다</div>
    <div v-if="videoCnt">
      <div v-for="v_url in cartItems" :key="v_url.id" class="card container">
        <div class="card-body component">
          <iframe :src="v_url" width="500px" height="300px"></iframe>
          <button
            type="button"
            @click="removeCart(v_url)"
            class="btn btn-secondary"
          >
            저장목록에서 삭제
          </button>
        </div>
      </div>
    </div>
    <div v-else>
      <strong>저장된 영상이 없습ㄴ디ㅏ</strong>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const cartItems = ref("");
cartItems.value = JSON.parse(localStorage.getItem("video")) || [];

const removeCart = (v_url) => {
  const existingCart = JSON.parse(localStorage.getItem("video"));
  const itemIdx = existingCart.findIndex((item) => item == v_url);
  existingCart.splice(itemIdx, 1);
  localStorage.setItem("video", JSON.stringify(existingCart));
  cartItems.value = JSON.parse(localStorage.getItem("video"));
};

const videoCnt = computed(() => {
  return cartItems.value.length > 0;
});
</script>

<style scoped>
.title {
  margin-bottom: 20px;
}
button {
  width: 100px;
  height: 60px;
  font-size: smaller;
  margin: auto 0;
  border-radius: 3px;
}
.component {
  display: flex;
  justify-content: space-around;
  margin: 10px;
}
</style>
