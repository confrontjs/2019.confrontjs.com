<script>
    import Agenda from '../data/agenda';
    export let segment;
</script>

<style>
    .agenda-container {
        padding: 20px;
    }

    .agenda-container > ul {
        padding: 0;
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .agenda-container > ul li {
        margin: 10px 0;
    }

    .agenda-card {
        width: 100%;
        background: #E5E9F0;
        text-align: left;
    }

    .agenda-card h2 {
        background: #E5E9F0;
        color: #434C5E;
        padding: 10px;
        margin: 0;
    }

    .agenda-card .talk h2 {
        background: #4C566A;
        color: #ECEFF4;
    }

    .agenda-card summary::-webkit-details-marker {
        display: none;
    }

    .agenda-item {
        padding: 10px;
        overflow: hidden;
    }

    .agenda-item:empty {
        display: none;
    }

    .speaker-avatar {
        width: 100px;
        float: left;
        margin-right: 20px;
    }

    .tags {
        /* padding: 5px; */
        display: block;
    }

    .tag {
        background: #2E3440;
        color: #ECEFF4;
        margin: 5px;
        padding: 5px;
    }

    @media (max-width: 480px) {
        .tags {
            display: grid;
        }
    }
</style>

<svelte:head>
    <title>Agenda • ConFrontJS 2019 • Front-end Conference</title>
</svelte:head>

<div class="agenda-container">

    <h1>Agenda</h1>

    <ul>
        {#each Agenda as item, i}
            <li class="agenda-card">
                <details open class="{ item.type === "Talk" ? 'talk' : '' }">
                    <summary>
                        <h2>{ item.start } — { item.end } | { item.type }</h2>
                    </summary>

                    <div class="agenda-item">
                        {#if item.type && item.details }
                            <a href="/speakers">
                                <img
                                    src="{ item.details.speaker.avatarUrl }"
                                    class="speaker-avatar"
                                    alt=""
                                />
                            </a>
                            <h3>{ item.details.title }</h3>

                            <div class="tags">
                                {#each item.details.tech as t}
                                    <small class="tag">{ t }</small>
                                {/each}
                            </div>

                            <p>{ item.details.abstract }</p>
                        {/if}
                    </div>
                </details>
            </li>
        {/each}
    </ul>

</div>
