<template>
  <div>
    <global-header @search="search" />

    <div class="mt-10 max-w-7xl m-auto mb-5">
      <featured title="Em alta" width="w-full">
        <template slot="body">
          <div class="grid cursor-pointer">
            <videos-list v-for="(item, index) in highVideos.items" :key="index" :data="item" />
          </div>
        </template>
      </featured>
    </div>
  </div>
</template>

<script>
import { listVideos } from '@/services/api';


export default {
  name: 'home',
  data() {
    return {
      moreVideos: [],
      highVideos: []
    }
  },
  created() {
    localStorage.setItem('searchs', JSON.stringify([]));
  },
  mounted() {
    this.listVideos();
  },
  methods: {
    search(term) {
      this.$router.push(`/search?term=${term}`);
    },
    listVideos() {
      listVideos()
        .then(response => {
          this.highVideos = response.data;
        })
    },
  }
}
</script>

<style>
body {
    background-color: rgb(251 251 251);
}
</style>