<template>
    <h1>{{items.title}}</h1>
    <h2>{{items.writer}}</h2>
    <div>{{items.contents}}</div>
    <v-btn
        @click = goUpdate(items.SeqNo)
    >수정</v-btn>
    <v-btn
        @click= goDelete(items.SeqNo)
    >삭제</v-btn>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { computed, ref, onMounted  } from 'vue'
import router from '@/router';

const route = useRoute();

const id = computed(() => route.params.id);
const items = ref([]);

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

function goUpdate(id){
  router.push({ name: 'BoardUpdate', params: { id } })
}

function goDelete(id){
    router.push({ name: 'BoardDelete', params: { id } })
}

</script>