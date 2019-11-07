<script>
    import Banner from '../components/sections/Banner.svelte';
    import SpeakerCard from '../components/shared/SpeakerCard.svelte';
    import Speakers from '../data/speakers';
    import shuffle from 'lodash-es/shuffle';
    import Barry from '../data/speakers/barry-solone';

    const SpeakersShuffle = shuffle(Speakers);

    // Barry always will be at the end of the list.
    SpeakersShuffle.push(Barry);

    export let segment = '';
</script>

<style>
    .speakers-container {
        padding: 50px 0px 80px;
    }

    /* .speakers-container > ul {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    } */

    /* .speakers-container > ul li {
        margin: 10px 0;
        width: 49%;
    }

    @media (max-width: 1480px) {
        .speakers-container {
            padding: 0;
        }

        .speakers-container > ul li {
            width: 100%;
        }
    } */
</style>

<svelte:head>
    <title>Speakers • ConFrontJS 2019 • Front-end Conference</title>
</svelte:head>

<div class="speakers-page">
    <Banner image="/promo/IMG_2984.png">
        <p slot="description">07 December 2019 in Warsaw, Poland</p>
        <h1 slot="header">ConFrontJS 2019 Speakers</h1>
    </Banner>

    <div class="container">
        <div class="speakers-container">
            
                <div class="row">
                    {#each SpeakersShuffle as speaker, i}
                        <div class="col-md-12 col-lg-6" style="margin-top: 30px;">
                            <SpeakerCard speaker={speaker}/>
                        </div>
                    {/each}
                </div>
        </div>
    </div>
</div>
