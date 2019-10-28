<script>
    import Hotel from './Hotel.svelte';
</script>

<style>
    .where-to-stay-section {
        color: var(--snow-color);
        background: var(--night-color);
    }
</style>

<div class="where-to-stay-section">

    <h1>Where to stay?</h1>

    <ul class="list-unstyled">
        <li>
            <Hotel></Hotel>
        </li>
    </ul>

</div>
