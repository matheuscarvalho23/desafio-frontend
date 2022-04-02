<template>
    <div class="w-full bg-white">
        <div class="bg-white flex justify-between m-0-auto items-center pt-6 pb-6 m-auto max-w-7xl">
            <div class="flex w-full">
                <h1 class="text-3xl text-indigo-900 font-semibold">
                    Your<span class="text-indigo-300">Video</span>
                </h1>

                <input-search class="ml-20" @search="search" />
            </div>

            <a href="" class="text-indigo-900">Entrar</a>
        </div>
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