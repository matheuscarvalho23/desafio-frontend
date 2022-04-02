<template>
  <div class="bg-white rounded-lg shadow-sm pl-10 pr-10 pt-5 pb-5" :class="`${width} ${height} ${overflow}`">
    <h2 class="text-lg text-indigo-900 text-bold">{{ title }}</h2>

    <slot name="body" />
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
        width: {
            type: String,
            default: 'w-4/6'
        },
        height: {
            type: String,
            default: 'h-auto'
        },
        overflow: {
            type: String,
            default: 'overflow-auto'
        }
    }
}
</script>

<style scoped>
    ::-webkit-scrollbar {
        width: 8px;
    }

    ::-webkit-scrollbar-track {
        background: #f5f5f5;
    }

    ::-webkit-scrollbar-thumb {
        background: #e9e8e8;
        border-radius: 10px;
    }
</style>