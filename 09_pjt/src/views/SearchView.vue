<template>
  <div v-if="videoIsEmpty">
    <div v-for="video in videos" :key="video.id" class="card container">
      <div class="card-body component">
        <iframe :src="video.url" width="500px" height="300px"></iframe>
        <button
          type="button"
          @click="goDetail(video.videoId)"
          class="btn btn-secondary"
        >
          상세 페이지로 이동
        </button>
      </div>
    </div>
  </div>
  <div v-else>로딩중이거나 검색된 비디오가 없습니다</div>
</template>

<script setup>
import { ref, computed } from "vue";

import { useRoute, useRouter } from "vue-router";
import axios from "axios";

const route = useRoute();
const router = useRouter();
const keywords = route.params.keywords;
const keywordList = keywords.split(" ");
let keyword = "";
for (let word of keywordList) {
  keyword += word + "+";
}
keyword = keyword.slice(0, keyword.length - 1);
// const APIKey = "AIzaSyD0UKGhm75Ngu64i2g3xPKtQQBF-z2PMX4";
// const APIKey = "AIzaSyBFx0Ul1GT2JC6h6DPk_IX-NlqZTok-6G8";
const APIKey = "AIzaSyBdKwBXBJeCqEibjo5NeMnACHnfWouCvpU";

const youtubeURL = `https://www.googleapis.com/youtube/v3/search?key=${APIKey}&part=snippet&q=${keyword}&type=video&maxResults=10`;

const videos = ref([]);

axios
  .get(youtubeURL)
  .then((res) => {
    for (let item of res.data.items) {
      let temp = `https://www.youtube.com/embed/${item.id.videoId}`;

      videos.value.push({
        url: temp,
        videoId: item.id.videoId,
      });
    }
  })
  .catch((err) => {
    console.log(err);
  });

const videoIsEmpty = computed(() => {
  return videos.value.length > 0;
});

const goDetail = function (v) {
  for (let i = 0; i < videos.value.length; i++) {
    if (videos.value[i].videoId == v) {
      router.push(`/detail/${v}`);
    }
  }
};
</script>

<style scoped>
.box {
  border: 2px dashed black;
  box-sizing: border-box;
  border-radius: 3px;

  display: flex;
  justify-content: space-around;
  margin: 5px;
  padding: 3px;
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
