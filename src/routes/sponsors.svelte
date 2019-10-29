<script>
    import Banner from '../components/sections/Banner.svelte';
    import Sponsor from '../components/shared/Sponsor.svelte';
    import Partner from '../components/shared/Partner.svelte';
    import Message from '../components/shared/Message.svelte';

    import Sponsors from '../data/sponsors';
    import Partners from '../data/partners';

    function sponsorType(type) {
        return Sponsors.filter((sponsor) => {
            return (sponsor.type === type);
        });
    }

    const GoldSponsors = sponsorType('Gold');
    const RestSponsors = Sponsors.filter((sponsor) => {
        return !GoldSponsors.includes(sponsor);
    });

    export let segment = '';
</script>

<style>
    .sponsors-container {
        padding: 20px;
        text-align: center;
    }

    .sponsors-container h2.sponsor-type,
    .sponsors-container h3.sponsor-type {
        font-weight: normal;
    }

    .sponsors-section {
        margin: 0 0 100px 0;
        display: block;
    }

    .sponsors-section > ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    .sponsors-section > ul li {
        margin: 0 20px;
    }

    .offer {
        width: 500px;
        margin: 0 auto;
    }

    .offer .button-mix {
        margin: 20px 0;
        display: inline-block;
    }

    .partners-section {
        margin: 100px 0 0 0;
    }

    .partners-section > ul li {
        margin: 20px;
    }
</style>

<svelte:head>
    <title>Sponsors • ConFrontJS 2019 • Front-end C onference</title>
</svelte:head>

<div class="sponsors-page">
    <Banner image="/banners/IMG_2543.png">
        <p slot="description">07 December 2019 in Warsaw, Poland</p>
        <h1 slot="header">ConFrontJS 2019 Sponsors</h1>
    </Banner>

    <Message>
        <h2 slot="header">Thanks to Our Sponsors</h2>

        <p slot="body">
            These organizations have been instrumental in shaping ConFrontJS so far!<br/>
            Would you like to add your name to the list?<br/>
            Check out our sponsorship opportunities.
        </p>
    </Message>

    <div class="content">
        <div class="sponsors-container">

            {#if GoldSponsors.length > 0 }

                <div class="gold-sponsors sponsors-section">
                    <ul class="list-unstyled">
                        {#each GoldSponsors as sponsor, i}
                            <li class="sponsor-card">
                                <Sponsor sponsor="{sponsor}"></Sponsor>
                                <h2 class="sponsor-type">Gold Sponsor</h2>
                            </li>
                        {/each}
                    </ul>
                </div>

            {/if}

            {#if RestSponsors.length > 0}

                <div class="rest-sponsors sponsors-section">
                    <ul class="list-unstyled">
                        {#each RestSponsors as sponsor, i}
                            <li class="sponsor-card">
                                <Sponsor sponsor="{sponsor}"></Sponsor>
                                <h3 class="sponsor-type">{sponsor.type} Sponsor</h3>
                            </li>
                        {/each}
                    </ul>
                </div>

            {/if}

            <div class="offer">
                <h2>What About You?</h2>

                <p>
                    Sponsoring ConFrontJS is a great way to contribute to the healthy growth
                    of TypeScript’s open source community. Please join us in creating
                    an amazing experience for each and every attendee.
                </p>

                <a
                    class="button-mix"
                    href="https://drive.google.com/open?id=1ZB27yhtGoWkUBQopM6eSkbuvYIi5RaKW"
                >Download offer</a>
            </div>

            {#if Partners.length > 0 }
                <div class="partners-section">
                    <h2 class="mb-5">Partners and Supporters</h2>

                    <ul class="list-unstyled">
                        {#each Partners as partner, i}
                            <li class="partner-card">
                                <Partner partner="{partner}"></Partner>
                            </li>
                        {/each}
                    </ul>
                </div>

            {/if}
        </div>
    </div>

</div>
