<script>
    import Banner from '../components/Banner.svelte';
    import Venue from '../components/Venue.svelte';
    import Parking from '../components/Parking.svelte';
    import TripleGallery from '../components/TripleGallery.svelte';
    import WhereToStay from '../components/WhereToStay.svelte';
    import TouristAttractions from '../components/TouristAttractions.svelte';

    export let segment = '';
</script>

<style>
    .venue-container {
        padding: 20px;
    }
</style>

<svelte:head>
    <title>Venue • ConFrontJS 2019 • Front-end Conference</title>
</svelte:head>

<div class="venue-page">
    <Banner image="/banners/72275771_416666755700619_2198959204704714752_o.png">
        <p slot="description">29 October 2019 in Warsaw, Poland</p>
        <h1 slot="header">ConFrontJS 2019 Venue</h1>
    </Banner>

    <div class="venue-container">
        <Venue></Venue>

        <img src="/venue/venue-map.png" alt="EDC Map — Warsaw">

        <Parking></Parking>

        <TripleGallery>
            <img src="/photos/70399448_400618417305453_8600304597262663680_o.png" alt=""/>
            <img src="/photos/73422572_416666112367350_7145624763522613248_o.png" alt=""/>
            <img src="/photos/67621942_377105956323366_7508112822119694336_n.png" alt=""/>
        </TripleGallery>

        <WhereToStay></WhereToStay>
        <TouristAttractions></TouristAttractions>
    </div>
</div>
