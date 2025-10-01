<template>
  <div>
    <div v-if="!boardId">게시판을 선택하세요.</div>
      <ul v-else>
        <h2>{{ boardId }}</h2>
      </ul>
  </div>

  <v-card
    class="mx-auto"
    max-width="1000"
  >
    <v-list :items="items"></v-list>
  </v-card>
  <v-row justify="end">
    <v-btn 
      color="primary" class="mt-4"
      :to="{name:'BoardWrite', params:{boardId: boardId}}"
    >글쓰기</v-btn>
  </v-row>
</template>

<script>

export default {
  props: ["boardId"],
    created() {
    console.log('받은 boardId:', this.boardId)
  },
  data() {
    return {
      posts: [],
      items: [
    {
      title: 'Item #1',
      value: 1,
    },
    {
      title: 'Item #2',
      value: 2,
    },
    {
      title: 'Item #3',
      value: 3,
    },
    {
      title: 'Item #4',
      value: 4,
    },
  ]

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
    const response = await fetch(`https://localhost:3000/board/${boardId}list`)
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
