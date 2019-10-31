<script>
    import SpeakerTitle from '../shared/SpeakerTitle.svelte';

    export let item = {};
    export let index = -1;

    function twoDigits(data) {
        return String(data).padStart(2, '0');
    }

    function getClass() {
        return item.details.keynote
            ? 'keynote'
            : '';
    }
</script>

<style>
    .agenda-card {
        margin: 80px auto;
        width: 100%;
        text-align: left;
    }

    .agenda-details h2 {
        padding: 20px 0;
        margin: 0;
    }

    .speaker-avatar {
        max-width: 204px;
    }

    .agenda-content {
        padding-top: 40px;
    }

    .agenda-content h4.speaker-type {
        margin: 0;
    }

    .agenda-content h2.speaker-name {
        color: var(--secondary-color);
    }

    .agenda-content h2.non-talk-title {
        margin: 0;
        padding: 0;
    }

    .agenda-content p.speaker-job-position {
        margin: 0;
        font-size: 13px;
        font-weight: lighter;
    }

    .agenda-content h4.talk-title {
        color: var(--secondary-color);
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

    /* for keynote */

    .keynote .agenda-content h2.speaker-name {
        color: var(--primary-color);
    }

    .keynote .agenda-content h4.talk-title {
        color: var(--primary-color);
    }

    @media (max-width: 960px) {
        .speaker-avatar {
            max-width: 100%;
        }
    }

    @media (max-width: 480px) {
        .tags {
            display: grid;
        }
    }
</style>

<div class="agenda-card row { item.type } { getClass() }">
    <div class="agenda-details col-lg-2 col-xs-12">
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
                    alt="{ item.details.speaker.name }"
                />
            </a>
        {/if}
    </div>

    <div class="agenda-content offset-lg-1 col-lg-7 col-xs-12">
        {#if item.type === 'talk' }
            <h4 class="speaker-type">
                <SpeakerTitle talk={item.details}/>
            </h4>
            <h2 class="speaker-name m-0 p-0">
                { item.details.speaker.name }
            </h2>
            <p class="speaker-job-position">
                { item.details.speaker.position } @{ item.details.speaker.company }
            </p>

            <div class="tags">
                {#each item.details.tech as t}
                    <small class="tag">{ t }</small>
                {/each}
            </div>

            <h4 class="talk-title m-0 p-0">
                { item.details.title }
            </h4>

            <p class="talk-abstract d-none d-sm-block">{ item.details.abstract.trim() }</p>
        {/if}

        {#if item.type === 'talk-not-ready' }
            <h2 class="not-ready-speaker-name">{ item.details }</h2>
        {/if}

        {#if item.type === '' }
            <h2 class="non-talk-title">{ item.details }</h2>
        {/if}
    </div>
</div>
