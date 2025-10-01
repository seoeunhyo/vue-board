<template>
  <v-app id="inspire">
    <v-app-bar flat>
      <v-container class="mx-auto d-flex align-center justify-center">
        <v-avatar
          class="me-4 "
          color="grey-darken-1"
          size="32"
        ></v-avatar>

        <v-btn
          v-for="link in links"
          :key="link"
          :text="link"
          variant="text"
        ></v-btn>

        <v-spacer></v-spacer>

        <v-responsive max-width="160">
          <v-text-field
            density="compact"
            label="Search"
            rounded="lg"
            variant="solo-filled"
            flat
            hide-details
            single-line
          ></v-text-field>
        </v-responsive>
      </v-container>
    </v-app-bar>

    <v-main class="bg-grey-lighten-3">
      <v-container>
        <v-row>
          <v-col cols="2">
            <v-sheet rounded="lg">
              <BoardNavBar @select-board="onSelectBoard"></BoardNavBar>
            </v-sheet>
     
          </v-col>

          <v-col>
            <v-sheet
              min-height="70vh"
              rounded="lg"
            >
            <BoardMain :boardId = "selectedBoardId"></BoardMain>
            
              <!--  -->
            </v-sheet>
               <router-view />
              <v-row justify="end">
                <v-btn color="primary" class="mt-4">글쓰기</v-btn>
              </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script >
import BoardNavBar from '@/board/common/BoardNavBar.vue';
import BoardMain from '@/board/common/BoardMain.vue';


  export default {
    components: {BoardNavBar, BoardMain},

    data () {
      return {
        selectedBoardId: null,
      }
  },
  methods: {
    onSelectBoard(boardId){
      this.selectedBoardId = boardId
    }
  }
}
</script>