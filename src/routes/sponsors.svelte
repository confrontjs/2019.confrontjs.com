<script>
    import Sponsor from '../components/Sponsor.svelte';
    import Sponsors from '../data/sponsors';

    function sponsorType(type) {
        return Sponsors.filter((sponsor) => {
            return (sponsor.type === type);
        });
    }

    const GoldSponsors = sponsorType('gold');
    const SilverSponsors = sponsorType('silver');
    const BronzeSponsors = sponsorType('bronze');

    export let segment;
</script>

<style>
    .sponsors-container {
        padding: 20px;
    }

    .sponsors-section {
        margin: 80px 0;
    }

    .sponsors-section > ul {
        padding: 0;
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    .sponsors-section > ul li {
        margin: 10px 0;
    }
</style>

<svelte:head>
    <title>Sponsors • ConFrontJS 2019 • Front-end Conference</title>
</svelte:head>

<div class="sponsors-container">

    <h1>
        Sponsors
        <strong>
            (<a
                href="https://drive.google.com/open?id=1ZB27yhtGoWkUBQopM6eSkbuvYIi5RaKW"
                target="_blank"
                rel="noopener"
            >Offer</a>)
        </strong>
    </h1>

    {#if GoldSponsors.length > 0 }

        <div class="sponsors-section">
            <h2 class="sponsor-name">Gold Sponsors</h2>
            <ul>
                {#each GoldSponsors as sponsor, i}
                    <li class="sponsor-card">
                        <Sponsor sponsor="{sponsor}"></Sponsor>
                    </li>
                {/each}
            </ul>
        </div>

    {/if}

    {#if SilverSponsors.length > 0}

        <div class="sponsors-section">
            <h2 class="sponsor-name">Silver Sponsors</h2>
            <ul>
                {#each SilverSponsors as sponsor, i}
                    <li class="sponsor-card">
                        <Sponsor sponsor="{sponsor}"></Sponsor>
                    </li>
                {/each}
            </ul>
        </div>

    {/if}

    {#if BronzeSponsors.length > 0 }

        <div class="sponsors-section">
            <h2 class="sponsor-name">Bronze Sponsors</h2>
            <ul>
                {#each BronzeSponsors as sponsor, i}
                    <li class="sponsor-card">
                        <Sponsor sponsor="{sponsor}"></Sponsor>
                    </li>
                {/each}
            </ul>
        </div>

    {/if}

</div>
