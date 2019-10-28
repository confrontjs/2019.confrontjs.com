<script>
    import Organizer from './Organizer.svelte';
    import Organizers from '../data/hosts';
</script>

<style>
    .organizers-section {
        margin: 100px 0;
    }

    .organizers-section ul {
        display: flex;
        justify-content: space-between;
    }
</style>

<div class="organizers-section">
    <h1>Organizers</h1>

    <ul class="list-unstyled">
        {#each Organizers as host, i}
            <li>
                <Organizer host={host}></Organizer>
            </li>
        {/each}
    </ul>
</div>
