<template>
    <div class="w-full bg-white">
        <div class="bg-white flex justify-between m-0-auto items-center pt-6 pb-6 m-auto max-w-7xl">
            <div class="flex w-full">
                <h1 @click="redirect" class="text-3xl text-indigo-900 font-semibold cursor-pointer">
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
    mounted() {
        let searchs = JSON.parse(localStorage.getItem('searchs'));

        if (searchs.length === 0) {
            localStorage.setItem('searchs', JSON.stringify([]))
        }
    },
    methods: {
        search(term) {
            let searchs = [];

            searchs = this.addSearch(term);

            localStorage.setItem('searchs', JSON.stringify(searchs));

            this.$emit('searchHistory', searchs);

            this.$emit('search', term);
        },
        addSearch(term) {
            let searchs = JSON.parse(localStorage.getItem('searchs'));

            if (searchs) {
                searchs = [...searchs, { term }];
            }

            return searchs;
        },
        redirect() {
            this.$router.push('/');
        }
    }
}
</script>