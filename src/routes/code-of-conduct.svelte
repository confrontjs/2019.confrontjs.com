<script>
    import CodeOfConduct from '../components/sections/CodeOfConduct.svelte';
    export let segment = '';
</script>

<style>
    .code-of-conduct-page {
        padding: 20px;
    }
</style>

<svelte:head>
    <title>Code of Conduct • ConFrontJS 2019 • Front-end Conference in Warsaw</title>
</svelte:head>

<div class="code-of-conduct-page">
    <CodeOfConduct/>
</div>
