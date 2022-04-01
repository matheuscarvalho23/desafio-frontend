<template>
    <div class="relative rounded-md w-2/5 shadow-sm">
      <input
        type="text"
        class="focus:ring-indigo-500 border-2 border-gray focus:border-indigo-500 block w-full outline-offset-0 pl-7 pr-12 sm:text-sm border-gray-300 rounded-md h-10"
        placeholder="Pesquisar"
        v-model="term"
        @change="$emit('search', term)"
      />
    </div>
</template>

<script>
export default {
    name: 'input-search',
    data() {
      return {
        term: '',
      }
    }
}
</script>