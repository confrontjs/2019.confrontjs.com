<script>
    import SpeakerTitle from '../shared/SpeakerTitle.svelte';

    export let item = {};
    export let index = -1;

    function twoDigits(data) {
        return String(data).padStart(2, '0');
    }
</script>

<style>
    .agenda-card {
        margin: 20px auto;
        width: 100%;
        text-align: left;
    }

    .agenda-details h2 {
        padding: 20px 0;
        margin: 0;
    }

    .speaker-avatar {
        width: 204px;
    }

    .agenda-content h4.speaker-type {
        margin: 0;
    }

    .agenda-content h2.speaker-name {
        color: var(--secondary-color);
    }

    .agenda-content.keynote h2.speaker-name {
        color: var(--primary-color);
    }

    .agenda-content h2.non-talk-title {
        margin: 0;
        padding: 0;
    }

    .agenda-content p.speaker-job-position {
        margin: 0;
    }

    .agenda-content p.talk-abstract {
        font-weight: lighter;
        margin-top: 0;
        white-space: pre-line;
    }

    .iterator {
        border-bottom: 2px solid var(--snow-color);
        text-align: left;
        display: block;
        font-size: 13px;
    }

    .tags {
        padding: 20px 0;
        display: block;
    }

    .tag {
        color: var(--snow-color);
        margin: 0 20px 0 0;
        text-transform: uppercase;
        font-weight: bold;
    }

    @media (max-width: 480px) {
        .tags {
            display: grid;
        }
    }
</style>

<div class="agenda-card row { item.type === "Talk" ? 'talk' : '' }">
    <div class="agenda-details col-2">
        <span class="iterator">{ twoDigits(index) }.</span>

        <h2>{ item.start }</h2>

        {#if item.type === 'talk' }
            <a
                href="/speakers"
                tabindex="-1"
            >
                <img
                    src="{ item.details.speaker.avatarUrl }"
                    class="speaker-avatar"
                    alt=""
                />
            </a>
        {/if}
    </div>

    <div class="agenda-content offset-1 col-9">
        {#if item.type === 'talk' }
            <h4 class="speaker-type">
                <SpeakerTitle talk={item.details}></SpeakerTitle>
            </h4>
            <h2 class="speaker-name m-0 p-0">
                { item.details.speaker.name }
            </h2>
            <p class="speaker-job-position">
                <strong>{ item.details.speaker.position }</strong> @ <strong>{ item.details.speaker.company }</strong>
            </p>

            <div class="tags">
                {#each item.details.tech as t}
                    <small class="tag">{ t }</small>
                {/each}
            </div>

            <h4 class="secondary-color m-0 p-0">
                { item.details.title }
            </h4>

            <p class="talk-abstract">{ item.details.abstract }</p>
        {/if}

        {#if item.type === 'talk-not-ready' }
            <h2 class="not-ready-speaker-name">{ item.details }</h2>
        {/if}

        {#if item.type === '' }
            <h2 class="non-talk-title">{ item.details }</h2>
        {/if}
    </div>
</div>
