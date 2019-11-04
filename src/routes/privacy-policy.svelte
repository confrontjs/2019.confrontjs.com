<script>
    import PrivacyPolicy from '../components/sections/PrivacyPolicy.svelte';
    export let segment = '';
</script>

<style>
    .privacy-policy-page {
        padding: 20px;
    }
</style>

<svelte:head>
    <title>Privacy Policy • ConFrontJS 2019 • Front-end Conference</title>
</svelte:head>

<div class="privacy-policy-page">
    <PrivacyPolicy/>
</div>
