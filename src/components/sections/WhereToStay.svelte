<script>
    import Hotel from '../shared/Hotel.svelte';
    import Hotels from '../../data/hotels';
</script>

<style>
    .where-to-stay-section {
        color: var(--snow-color);
        background: var(--night-color);
        padding: 50px 0;
    }
</style>

<div class="where-to-stay-section">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h1>Where to stay?</h1>
            </div>
        </div>

        <ul class="list-unstyled d-flex flex-wrap justify-content-around">
            {#each Hotels as hotel, i}
                <li>
                    <Hotel hotel={hotel}/>
                </li>
            {/each}
        </ul>
    </div>
</div>
