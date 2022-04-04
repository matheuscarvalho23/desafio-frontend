<template>
  <div>
      <global-header @search="search" @searchHistory="history" />

      <div class="mt-10 max-w-7xl m-auto flex">
          <p
            class="ml-3 text-indigo-500 cursor-pointer"
            v-for="(history, index) in historySearchs"
            :key="index"
            @click="search(history.term)"
          >
              {{ history.term }}
          </p>
      </div>

      <div class="mt-10 max-w-7xl m-auto">
          <featured :title="term ? `Resultados para ${term}` : 'Resultados' " width="w-full">
              <template slot="body" v-if="videoList">
                <videos-list v-for="(item, index) in videoList.items" :key="index" :data="item" />
              </template>
          </featured>
      </div>
  </div>
</template>

<script>
import { list } from '@/services/api';

export default {
    data() {
        return {
            videoList: {},
            historySearchs: [],
            term: ''
        }
    },
    mounted() {
        this.history();

        this.term = this.$route.query.term;

        this.search(this.term);
    },
    methods: {
        search(term) {
            this.term = term;

            list(term)
                .then(response => {
                    this.videoList = response.data;
                })
        },
        history() {
            let searchs = JSON.parse(localStorage.getItem('searchs'));

            this.historySearchs = searchs;
        }
    }
}
</script>

<style>
body {
    background-color: rgb(251 251 251);
}
</style>