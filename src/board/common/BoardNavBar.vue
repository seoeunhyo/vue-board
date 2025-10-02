<template>
    
  <v-list rounded="lg">
    <v-list-item
        link
        @click="goList(1)"
    >학과게시판</v-list-item>

    <v-list-item
        link
         @click="goList(2)"
        >
    학교소식</v-list-item>

    <v-list-item
        link
         @click="goList(3)"
    >학과 소식</v-list-item>

    <v-list-item
        link
         @click="goList(4)"
    >축하해주세요</v-list-item>
    <v-divider class="my-2"></v-divider>

    <v-list-item
        color="grey-lighten-4"
        title="Refresh"
        link
    ></v-list-item>
    </v-list>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

function goList(boardId) {
  router.push({ name: 'BoardList', params: { boardId } })
}
</script>

