<template>
  <div class="bg-red-100 rounded-lg shadow-sm pl-10 pr-10 pt-5 pb-5" :class="size">
    <h2 class="text-xl text-bold">{{ title }}</h2>
  </div>
</template>

<script>
export default {
    name: 'featured',
    props: {
        title: {
            type: String,
            default: '',
        },
        size: {
            type: String,
            default: 'w-4/6'
        }
    }
}
</script>

<style>

</style>