import { createRouter, createWebHistory } from "vue-router";
//import DefaultLayout from "@/layout/DefaultLayout.vue";
import BoardWrite from "@/board/action/BoardWrite.vue";
import BoardMain from "@/board/action/BoardMain.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/board/:boardId",   // 게시판 번호
      //component: DefaultLayout,         // NavBar 들어있는 레이아웃
      props: true,
      children: [
        {
          path: "list",          // /board/:boardId/list
          name: "BoardList",
          component: BoardMain,
           props: true
        },
        {
          path: "write",         // /board/:boardId/write
          name: "BoardWrite",
          component: BoardWrite,
           props: true
        },
      ],
    },
  ],
});

export default router;