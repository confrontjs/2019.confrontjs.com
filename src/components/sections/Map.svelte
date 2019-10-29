<script>
    import { onMount } from 'svelte';

    const venue = [20.9482648, 52.1783039];
    const apiToken = 'pk.eyJ1IjoicGFyaXJhbSIsImEiOiJjazFtYnJyZDcwYTUzM25wNjBycXE3a2lnIn0.SCaVmzN7cSKLaZOH52XTKg';
    const settings = {
        container: 'map',
        style: 'mapbox://styles/mapbox/dark-v9',
        center: venue,
        zoom: 15
    };

    function setupMap() {
        if (typeof mapboxgl === 'undefined') {
            console.warn('mapboxgl is not defined, ups!');
            return;
        }

        mapboxgl.accessToken = apiToken;

        const map = new mapboxgl.Map(settings);
        const directions = new MapboxDirections(mapboxgl);
        const geolocation = new mapboxgl.GeolocateControl({
            positionOptions: {
                enableHighAccuracy: true
            },
            trackUserLocation: true
        });
        map.addControl(directions, 'top-left');
        map.addControl(geolocation);

        new mapboxgl.Marker({ color: '#fadf1d' })
            .setLngLat(venue)
            .addTo(map);
    }

    let apla = null;

    function activate() {
        apla.remove();
    }

    onMount(setupMap);
</script>

<style>
    .map-section {
        position: relative;
    }

    #map {
        width: 100%;
        height: 500px;
    }

    .apla {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        color: var(--snow-color);
        display: flex;
        font-size: 40px;
        font-weight: bold;
        justify-content: center;
        align-items: center;
        z-index: 2;
    }
</style>

<div class="map-section">
    <div id="map"></div>
    <div class="apla" on:click={activate} bind:this={apla}>
        Click to activate
    </div>
</div>
