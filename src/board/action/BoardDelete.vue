
<script setup>
import { useRoute } from 'vue-router';
import { computed  } from 'vue'
import router from '@/router';

const route = useRoute();


//게시판 ID router로 받아옴

const id = computed(() => route.params.id);
const boardId = computed(() => route.params.boardId);


  fetch(`http://localhost:3000/board/delete/${id.value}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json' 
    }
  })
  .then(res => res.json())
  .then(data => {
    console.log('글 삭제 됨', data)
    router.push({ name: 'BoardList', params: { boardId: boardId.value } })
  })
  .catch(err => {
    console.error('글 삭제 실패:', err)
  })

</script>