<template>

  <v-table striped="even">
    <thead>
      <tr>
        <th class="text-left">
          제목
        </th>
        <th class="text-left">
          작성자
        </th>
      </tr>
    </thead>
    <tbody>

    <BoardList :boardId="boardId"></BoardList>

    </tbody>
  </v-table>
    <v-row justify="end">
    <v-btn 
      color="primary" class="mt-4"
      :to="{name:'BoardWrite', params:{boardId: boardId}}"
    >글쓰기</v-btn>
  </v-row>
</template>

<script setup>

import { useRoute } from 'vue-router';
import BoardList from '../common/BoardList.vue';
import { computed } from 'vue'

const route = useRoute();

const boardId = computed(() => route.params.boardId);

</script>
