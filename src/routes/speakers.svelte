<script>
    import Speakers from '../data/speakers';
    import shuffle from 'lodash-es/shuffle';

    const SpeakersShuffle = shuffle(Speakers);

    export let segment;
</script>

<style>
    .speakers-container {
        padding: 20px;
    }

    .speakers-container > ul {
        padding: 0;
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .speakers-container > ul li {
        margin: 10px 0;
    }

    .speaker-card {
        width: 40%;
        background: #E5E9F0;
        padding: 20px 30px;
        text-align: center;
    }

    .speaker-avatar {
        width: 150px;
        height: 150px;
    }

    .social-media-icons {
        margin: 10px 0;
    }

    .social-media-icon {
        width: 40px;
        height: 40px;
        padding: 5px;
        margin: 5px;
    }

    .social-media-icon:hover {
        background: #17E9E0;
    }

    .speaker-bio {
        text-align: justify;
    }

    @media (max-width: 480px) {
        .speaker-card {
            width: 100%;
        }
    }
</style>

<svelte:head>
    <title>Speakers • ConFrontJS 2019 • Front-end Conference</title>
</svelte:head>

<div class="speakers-container">

    <h1>Speakers</h1>

    <ul>
        {#each SpeakersShuffle as speaker, i}
            <li class="speaker-card">
                <a
                    href="https://twitter.com/{speaker.twitter.handle}"
                    title="Twitter"
                    target="_blank"
                    rel="noopener"
                >
                    <img
                        src="{ speaker.avatarUrl }"
                        class="speaker-avatar"
                        alt="Avatar of { speaker.name }"
                    />
                </a>

                <h3>{ speaker.name }</h3>
                <p><strong>{ speaker.position }</strong> @ <strong>{ speaker.company }</strong></p>
                <!-- <em>{ speaker.country }</em> -->

                <div class="social-media-icons">
                    <a
                        href="https://twitter.com/{speaker.twitter.handle}"
                        title="Twitter"
                        target="_blank"
                        rel="noopener"
                    >
                        <svg class="social-media-icon">
                            <use xlink:href="#icon-twitter"></use>
                        </svg>
                    </a>
                    <a
                        href="https://github.com/{speaker.github.handle}"
                        title="GitHub"
                        target="_blank"
                        rel="noopener"
                    >
                        <svg class="social-media-icon">
                            <use xlink:href="#icon-github"></use>
                        </svg>
                    </a>
                </div>

                <p class="speaker-bio">{ speaker.bio }</p>
            </li>
        {/each}
    </ul>

</div>
