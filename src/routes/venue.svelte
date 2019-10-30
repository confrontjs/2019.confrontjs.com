<script>
    import Banner from '../components/sections/Banner.svelte';
    import Venue from '../components/sections/Venue.svelte';
    import Map from '../components/sections/Map.svelte';
    import Parking from '../components/sections/Parking.svelte';
    import WhereToStay from '../components/sections/WhereToStay.svelte';
    import TouristAttractions from '../components/sections/TouristAttractions.svelte';

    export let segment = '';
</script>

<svelte:head>
    <title>Venue • ConFrontJS 2019 • Front-end Conference</title>
</svelte:head>

<Banner image="/promo/72275771_416666755700619_2198959204704714752_o.png">
    <p slot="description">07 December 2019 in Warsaw, Poland</p>
    <h1 slot="header">ConFrontJS 2019 Venue</h1>
</Banner>

<div class="venue-page">
    <Venue></Venue>
    <Map></Map>
    <Parking></Parking>
    <div class="row no-gutters">
        <img class="col-md-4 col-sm-12" src="/photos/70399448_400618417305453_8600304597262663680_o.png" alt=""/>
        <img class="col-md-4 col-sm-12" src="/photos/73422572_416666112367350_7145624763522613248_o.png" alt=""/>
        <img class="col-md-4 col-sm-12" src="/photos/67621942_377105956323366_7508112822119694336_n.png" alt=""/>
    </div>
    <WhereToStay></WhereToStay>
    <TouristAttractions></TouristAttractions>
</div>
