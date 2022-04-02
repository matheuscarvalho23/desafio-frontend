<template>
  <div>
    <global-header />

    <div class="mt-20 max-w-7xl m-auto flex justify-between">
      <featured title="Video de minecraft" width="w-3/4" height="h-96" />
      <featured title="Títulos Semelhantes" width="w-2/4" height="h-96" class="ml-5">
        <template slot="body">
          <videos-list v-for="(moreVideos, index) in 8" :key="index" />
        </template>
      </featured>
    </div>

    <div class="mt-5 max-w-7xl m-auto mb-5">
      <featured title="Em alta" width="w-full">
        <template slot="body">
          <div class="grid grid-rows-3 grid-flow-col gap-4">
            <videos-list v-for="(moreVideos, index) in 9" :key="index" />
          </div>
        </template>
      </featured>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      moreVideos: []
    }
  }
}
</script>

<style>
body {
    background-color: rgb(251 251 251);
}
</style>