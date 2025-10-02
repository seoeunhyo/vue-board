<template>

    <tr
    v-for="item in items"
    :key="item.name"
    style="cursor:pointer"
    @click="goDetail(item.SeqNo)"
  >
    <td>{{ item.title }}</td>
    <td>{{ item.writer }}</td>
  </tr>

</template>

<script setup>
import { ref, watch } from 'vue'
import router from '@/router';
/* eslint-disable no-undef */
const props = defineProps({
  boardId: Number,
})
/* eslint-disable no-undef */
const items = ref([]);
function goDetail(id) {
   router.push({ name: 'BoardView', params: { id } })
}
async function fetchItems(boardId) {
  try {
    const res = await fetch(`http://localhost:3000/board/${boardId}/list`)
    const data = await res.json()
    items.value = data.posts
    console.log(data.posts)
  } catch (err) {
    console.error(err)
  }
}

watch(() => props.boardId, (newBoardId) => {
  fetchItems(newBoardId)
}, { immediate: true })
</script>
