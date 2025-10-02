<template>
<h2> 수정하기 </h2>

      <v-card-text>
        <v-text-field
          label="제목"
          v-model="items.title"
          outlined
        ></v-text-field>

        <v-text-field
          label="작성자"
          v-model="items.writer"
          outlined
        ></v-text-field>

        <v-textarea
          label="내용"
          v-model="items.contents"
          outlined
          rows="8"
        ></v-textarea>
      </v-card-text>
      <v-btn color="primary"
        @click="handleSubmit(items.SeqNo)"
      >완료</v-btn>
</template>



<script setup>

import { useRoute } from 'vue-router';
import { computed, ref, onMounted  } from 'vue'
import router from '@/router';

const route = useRoute();

const id = computed(() => route.params.id);
const boardId = computed(() => route.params.id);

const items = ref({});

onMounted(async () => {
  try {
    const res = await fetch(`http://localhost:3000/board/view/${id.value}`)
    const data = await res.json()
    items.value = data.post
    console.log(data)
  } catch (err) {
    console.error(err)
  }
})

async function handleSubmit(id) {
  try {
    const response = await fetch(`http://localhost:3000/board/update/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: items.value.title,
        contents: items.value.contents, 
        writer: items.value.writer
      })
    });

    const result = await response.json();
    console.log(result)
    router.push({ name: 'BoardList', params: { boardId: boardId.value } })


  } catch (err) {
    console.error('글 수정 실패:', err);
  }
}
</script>
