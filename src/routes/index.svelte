<script>
    import Intro from '../components/sections/Intro.svelte';
    import BuyTicketsButton from '../components/sections/BuyTicketsButton.svelte';
    import Agenda from '../components/sections/Agenda.svelte';
    import Summary from '../components/sections/Summary.svelte';
    import VenueInsight from '../components/sections/VenueInsight.svelte';
    import Why from '../components/sections/Why.svelte';
    import CodeOfConduct from '../components/sections/CodeOfConduct.svelte';
    import Organizers from '../components/sections/Organizers.svelte';
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
    <div class="row no-gutters">
        <img class="col-md-4 col-sm-12" src="/photos/IMG_2585.png" alt=""/>
        <img class="col-md-4 col-sm-12" src="/photos/IMG_2984.png" alt=""/>
        <img class="col-md-4 col-sm-12" src="/photos/IMG_2853.png" alt=""/>
    </div>
    <VenueInsight />
    <Why />
    <CodeOfConduct />
    <Organizers />
</div>
