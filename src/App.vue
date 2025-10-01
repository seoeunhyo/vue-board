<template>
  <v-app>
    <v-main>
      <DefaultLayout>
      
      </DefaultLayout>
    </v-main>
  </v-app>
</template>

<script>
import DefaultLayout from './layout/DefaultLayout.vue';
export default {
  name: 'App',

  components: {
    DefaultLayout
  },

  data: () => ({
    //
  }),
}
</script>
