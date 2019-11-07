<script>
    import Hotel from '../shared/Hotel.svelte';
    import Hotels from '../../data/hotels';
</script>

<style>
    .where-to-stay-section {
        color: var(--snow-color);
        background: var(--night-color);
        padding: 50px 0 80px;
        position: relative;
    }

    .where-to-stay-section h1 {
        position: relative;
        z-index: 2;
    }

    @media (min-width: 801px) {
        .where-to-stay-section {
            padding: 80px 0 160px;
        }
    }

    @media (min-width: 991px) {
        .where-to-stay-section {
            padding: 0px 0 150px;
        }
    }
    
</style>

<div class="where-to-stay-section">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h1>Where to stay?</h1>
            </div>
        </div>

        <div class="row">
            {#each Hotels as hotel, i}
                <div class="col-md-6">
                    <Hotel hotel={hotel}/>
                </div>
            {/each}
        </div>
    </div>
</div>
