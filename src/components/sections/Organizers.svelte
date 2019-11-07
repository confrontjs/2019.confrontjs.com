<script>
    import Organizer from '../shared/Organizer.svelte';
    import Organizers from '../../data/hosts';
</script>

<style>
    .organizers-section {
        margin: 0px 0 80px 0;
    }

    .organizers-title {
        margin-top: 0px;
    }
</style>

<section class="organizers-section">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h1 class="organizers-title">Organizers</h1>
            </div>
        </div>

        <div class="row">
            {#each Organizers as host, i}
                <div class="col-lg-4 col-sm-6 col-xs-12">
                    <Organizer host={host}/>
                </div>
            {/each}
        </div>
    </div>
</section>
