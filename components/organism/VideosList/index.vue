<template>
  <div class="flex mt-5">
    <div class="border-2 w-1/4 h-90">
        <img :src="data.snippet.thumbnails.medium.url" alt="">
    </div>

    <div class="flex flex-col">
      <p class="ml-5 uppercase custom-truncate">{{ data.snippet.title}}</p>
      <p class="text-indigo-900 ml-5 text-sm mt-2">{{ data.snippet.channelTitle}}</p>
      <span class="text-gray-500 ml-5 text-sm mt-2 custom-truncate">{{ data.snippet.description }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'videos-list',
  props: {
    data: {
      type: Object
    },
  },
}
</script>

<style>
.custom-truncate {
  white-space: nowrap;
  width: 500px;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>