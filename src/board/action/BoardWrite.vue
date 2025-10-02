<template>
<h2> 글 쓰 기 </h2>

      <v-card-text>
        <v-text-field
          label="제목"
          v-model="title"
          outlined
        ></v-text-field>

        <v-text-field
          label="작성자"
          v-model="author"
          outlined
        ></v-text-field>

        <v-textarea
          label="내용"
          v-model="contents"
          outlined
          rows="8"
        ></v-textarea>
      </v-card-text>
      <v-btn color="primary"
        @click="handleSubmit"
      >완료</v-btn>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { computed, ref  } from 'vue'
import router from '@/router';
const title = ref('')
const author = ref('')
const contents = ref('')
const route = useRoute();


//게시판 ID router로 받아옴
const boardId = computed(() => route.params.boardId);

function handleSubmit(){
  fetch(`http://localhost:3000/board/${boardId.value}/write`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json' 
    },
    body: JSON.stringify({
      boaridId: boardId.value,
      title: title.value,
      contents: contents.value,
      writer: author.value
    })
  })
  .then(res => res.json())
  .then(data => {
    console.log('글 등록 됨', data)
    router.push({ name: 'BoardList', params: { boardId: boardId.value } })
  })
  .catch(err => {
    console.error('글 등록 실패:', err)
  })

}
</script>
