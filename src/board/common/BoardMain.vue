<template>
  <div>
    <div v-if="!boardId">게시판을 선택하세요.</div>
      <ul v-else>
        <!-- <li v-for="post in posts" :key="post.id">{{ post.title }}</li> -->
        <h2>{{ boardId }}</h2>
      </ul>
  </div>
</template>

<script >
export default {
  props: ['boardId'],
    created() {
    console.log('받은 boardId:', this.boardId)
  },
  data() {
    return {
      posts: [],
    }
  },
  watch: {
    boardId: {
      immediate: true,
      handler(newVal) {
        if (newVal) {
          this.fetchPosts(newVal)
        } else {
          this.posts = []
        }
      }
    }
  },
  methods: {
    async fetchPosts(boardId) {
  try {
    const response = await fetch(`https://your-api-url/posts?boardId=${boardId}`)
    if (!response.ok) throw new Error('네트워크 에러')
    const data = await response.json()
    this.posts = data
  } catch (error) {
    console.error('게시글 불러오기 실패', error)
  }
}
  }
}
</script>
