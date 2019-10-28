<script>
    import Intro from '../components/Intro.svelte';
    import BuyTicketsButton from '../components/BuyTicketsButton.svelte';
    import Agenda from '../components/Agenda.svelte';
    import Summary from '../components/Summary.svelte';
    import TripleGallery from '../components/TripleGallery.svelte';
    import VenueInsight from '../components/VenueInsight.svelte';
    import Why from '../components/Why.svelte';
    import CodeOfConduct from '../components/CodeOfConduct.svelte';
    import Organizers from '../components/Organizers.svelte';
</script>

<style>
</style>

<svelte:head>
    <title>ConFrontJS 2019 • Front-end Conference</title>
</svelte:head>

<div class="index-page">
    <Intro/>
    <BuyTicketsButton/>
    <Agenda/>
    <Summary />
    <TripleGallery>
        <img src="/photos/IMG_2585.png" alt=""/>
        <img src="/photos/IMG_2984.png" alt=""/>
        <img src="/photos/IMG_2853.png" alt=""/>
    </TripleGallery>
    <VenueInsight />
    <Why />
    <CodeOfConduct />
    <Organizers />
</div>