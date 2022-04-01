<template>
    <div class="bg-white flex justify-between items-center p-6 shadow-sm ">
        <div class="flex w-full">
            <h1 class="text-3xl ml-20 text-indigo-900 font-semibold">
                Your<span class="text-indigo-300">Video</span>
            </h1>

            <input-search class="ml-20" @search="search" />
        </div>

        <a href="" class="text-indigo-900">Entrar</a>
    </div>
</template>

<script>
export default {
    name: 'global-header',
    methods: {
        search(term) {
            console.log(term);
        }
    }
}
</script>