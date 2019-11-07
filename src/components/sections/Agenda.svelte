<script>
    import AgendaItem from '../shared/AgendaItem.svelte';
    import Agenda from '../../data/agenda';
    export let segment = '';
</script>

<style>
    .agenda-section {
        color: var(--snow-color);
        background: var(--night-color);
        padding: 60px 0 30px 0;
    }

    h1 {
        margin-bottom: 0;
    }
</style>

<section class="agenda-section">
    <div class="container">

        <div class="row">
            <div class="col-md-12">
                <h1>Agenda</h1>
            </div>
        </div>

        <div class="agenda-cards">
            {#each Agenda as item, i}
                <AgendaItem item={item} index={i + 1}/>
            {/each}
        </div>
    </div>
</section>
