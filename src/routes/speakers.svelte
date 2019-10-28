<script>
    import Banner from '../components/Banner.svelte';
    import SpeakerCard from '../components/SpeakerCard.svelte';
    import Speakers from '../data/speakers';
    import shuffle from 'lodash-es/shuffle';

    const SpeakersShuffle = shuffle(Speakers);

    export let segment = '';
</script>

<style>
    .speakers-container {
        padding: 20px 40px;
    }

    .speakers-container > ul {
        /* display: grid; */
        /* grid-template-columns: auto auto; */
        /* grid-template-rows: auto; */
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    .speakers-container > ul li {
        margin: 20px 0;
        width: 650px;
    }

    @media (max-width: 480px) {
        .speakers-container > ul li {
            width: 100%;
        }
    }
</style>

<svelte:head>
    <title>Speakers • ConFrontJS 2019 • Front-end Conference</title>
</svelte:head>

<div class="speakers-page">
    <Banner image="/banners/IMG_2984.png">
        <p slot="description">29 October 2019 in Warsaw, Poland</p>
        <h1 slot="header">ConFrontJS 2019 Speakers</h1>
    </Banner>

    <div class="speakers-container">
        <ul class="list-unstyled">
            {#each SpeakersShuffle as speaker, i}
                <li>
                    <SpeakerCard speaker={speaker}></SpeakerCard>
                </li>
            {/each}
        </ul>
    </div>
</div>
