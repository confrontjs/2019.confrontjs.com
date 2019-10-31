<script>
    import Contact from '../components/sections/Contact.svelte';
    export let segment = '';
</script>

<style>
    .contact-page {
        padding: 20px;
    }
</style>

<svelte:head>
    <title>Contact • ConFrontJS 2019 • Front-end Conference</title>
</svelte:head>

<div class="contact-page">
    <Contact/>
</div>
