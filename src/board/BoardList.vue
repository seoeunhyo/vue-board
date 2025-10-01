<template>
  <v-container>
    <h2>{{ boardTitle }}</h2>
    <v-list>
      <v-list-item
        v-for="post in posts"
        :key="post.id"
        :title="post.title"
      />
    </v-list>
  </v-container>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const posts = ref([])
const boardId = route.params.boardId
const boardTitle = boardId === 'cs' ? '컴퓨터공학 게시판' : '기타 게시판'

onMounted(async () => {
  try {
    const res = await fetch(`http://localhost:8080/api/posts?board=${boardId}`)
    const data = await res.json()
    posts.value = data
  } catch (err) {
    console.error('데이터 불러오기 실패:', err)
  }
})

</script>
