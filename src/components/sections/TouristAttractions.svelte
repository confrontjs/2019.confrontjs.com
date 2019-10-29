<script>
    import Attraction from '../shared/Attraction.svelte';
    import Attractions from '../../data/attractions';
</script>

<section class="tourist-attractions-section">
    <div class="content">
        <h1>Tourist Attractions</h1>

        <ul class="list-unstyled">
            {#each Attractions as attraction, i}
                <li>
                    <Attraction attraction={attraction}></Attraction>
                </li>
            {/each}
        </ul>
    </div>
</section>
