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
          v-model="content"
          outlined
          rows="8"
        ></v-textarea>
      </v-card-text>
      <v-btn color="primary">완료</v-btn>
</template>

<script>
export default{
    props:['boardId'],
    created(){
        console.log('글쓰기 게시판 ID:', this.boardId)
    }
}
</script>
