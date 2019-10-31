<script>
    import Organizer from '../shared/Organizer.svelte';
    import Organizers from '../../data/hosts';
</script>

<style>
    .organizers-section {
        margin: 100px 0 20px 0;
    }

    .organizers-section ul {
        display: flex;
        justify-content: space-between;
    }
</style>

<section class="organizers-section">
    <div class="content">
        <h1>Organizers</h1>

        <ul class="row list-unstyled">
            {#each Organizers as host, i}
                <li class="col-lg-4 col-sm-6 col-xs-12">
                    <Organizer host={host}/>
                </li>
            {/each}
        </ul>
    </div>
</section>
