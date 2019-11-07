<script>
    import Attraction from '../shared/Attraction.svelte';
    import Attractions from '../../data/attractions';
</script>

<section class="tourist-attractions-section">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h1>Tourist Attractions</h1>
            </div>
        </div>

        <ul class="list-unstyled">
            {#each Attractions as attraction, i}
                <li>
                    <Attraction attraction={attraction}/>
                </li>
            {/each}
        </ul>

        <footer>
            <p>
                <em>
                    Copyright by
                    <a href="https://theculturetrip.com/europe/poland/articles/20-must-visit-attractions-in-warsaw/">Culture Trip</a>
                </em>
            </p>
        </footer>
    </div>
</section>
