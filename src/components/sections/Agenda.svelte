<script>
    import AgendaItem from '../shared/AgendaItem.svelte';
    import Agenda from '../../data/agenda';
    export let segment = '';
</script>

<style>
    .agenda-section {
        color: var(--snow-color);
        background: var(--night-color);
        padding: 30px;
    }
</style>

<section class="agenda-section">
    <div class="content">

        <h1>Agenda</h1>

        <ul class="list-unstyled">
            {#each Agenda as item, i}
                <li>
                    <AgendaItem item={item} index={i + 1}></AgendaItem>
                </li>
            {/each}
        </ul>
    </div>
</section>
