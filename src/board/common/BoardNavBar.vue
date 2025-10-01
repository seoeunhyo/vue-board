<template>
    
  <v-list rounded="lg">
    <v-list-item
        link
        @click ="$emit('select-board', 'board1')"
    >학과게시판</v-list-item>

    <v-list-item
        link
        @click ="$emit('select-board', 'board2')"
        >
    학교소식</v-list-item>

    <v-list-item
        link
        @click ="$emit('select-board', 'board3')"
    >학과 소식</v-list-item>

    <v-list-item
        link
        @click ="$emit('select-board', 'board4')"
    >축하해주세요</v-list-item>
    <v-divider class="my-2"></v-divider>

    <v-list-item
        color="grey-lighten-4"
        title="Refresh"
        link
    ></v-list-item>
    </v-list>
</template>