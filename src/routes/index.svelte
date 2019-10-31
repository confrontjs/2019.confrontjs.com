<script>
    import Intro from '../components/sections/Intro.svelte';
    import BuyTicketsButton from '../components/sections/BuyTicketsButton.svelte';
    import Agenda from '../components/sections/Agenda.svelte';
    import Summary from '../components/sections/Summary.svelte';
    import VenueInsight from '../components/sections/VenueInsight.svelte';
    import Why from '../components/sections/Why.svelte';
    import CodeOfConduct from '../components/sections/CodeOfConduct.svelte';
    import Organizers from '../components/sections/Organizers.svelte';
    import WaveType1 from '../components/waves/WaveType1.svelte';
    import WaveType2 from '../components/waves/WaveType2.svelte';
    import WaveType3 from '../components/waves/WaveType3.svelte';
    import WaveType4 from '../components/waves/WaveType4.svelte';
</script>

<style>
</style>

<svelte:head>
    <title>ConFrontJS 2019 • Front-end Conference</title>
</svelte:head>

<div class="index-page">
    <Intro/>
    <BuyTicketsButton/>
    <WaveType1/>
    <Agenda/>
    <WaveType2/>
    <Summary/>
    <WaveType3/>
    <div class="row no-gutters">
        <img class="col-md-4 col-sm-12" src="/photos/IMG_2585.png" alt=""/>
        <img class="col-md-4 col-sm-12" src="/photos/IMG_2984.png" alt=""/>
        <img class="col-md-4 col-sm-12" src="/photos/IMG_2853.png" alt=""/>
    </div>
    <WaveType4/>
    <VenueInsight/>
    <Why/>
    <CodeOfConduct/>
    <Organizers/>
</div>
