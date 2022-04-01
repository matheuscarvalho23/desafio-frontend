<template>
  <div>
    <global-header />

    <div class="content mt-10 mr-20 flex justify-berween">
      <featured title="Video de minecraft" size="w-4/6" />
      <featured title="Títulos Semelhantes" size="w-1/4" class="ml-10" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>

<style>
body {
    background-color: rgba(249, 250, 251, 0.4);
}

.content {
  margin-left: 6.5rem;
}
</style>