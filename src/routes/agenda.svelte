<script>
    import Agenda from '../components/sections/Agenda.svelte';
    import Why from '../components/sections/Why.svelte';
    export let segment = '';
</script>

<style>
</style>

<svelte:head>
    <title>Agenda • ConFrontJS 2019 • Front-end Conference in Warsaw</title>
</svelte:head>

<div class="agenda-page">
    <Agenda/>
    <Why/>
</div>
