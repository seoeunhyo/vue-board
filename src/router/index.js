import { createRouter, createWebHistory } from "vue-router";
import BoardWrite from "@/board/action/BoardWrite.vue";



const router = createRouter({
    history : createWebHistory(),
    //컴포넌트 하나 당 객체로 등록 됨.
    routes  : [
        
        {
            path: '/write',
            name: 'BoardWrite', //별칭 
            component: BoardWrite 
        }

    ]
})

export default router;