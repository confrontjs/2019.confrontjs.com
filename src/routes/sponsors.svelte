<script>
    import Sponsor from '../components/Sponsor.svelte';
    import Sponsors from '../data/sponsors';

    function sponsorType(type) {
        return Sponsors.filter((sponsor) => {
            return (sponsor.type === type);
        });
    }

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
        justify-content: space-between;
    }

    .sponsors-section > ul li {
        margin: 10px 0;
    }
</style>

<svelte:head>
	<title>Sponsors • ConFrontJS 2019 • Front-end Conference</title>
</svelte:head>

<div class="sponsors-container">

    <h1>Sponsors</h1>

    <p>
        <a
            href="https://drive.google.com/open?id=1ZB27yhtGoWkUBQopM6eSkbuvYIi5RaKW"
            target="_blank"
            rel="noopener"
        >Download</a> sponsors offer.
    </p>

    <p>
        Be a sponsor - fill this <a
            href="https://forms.gle/bPciWY3f7RyduB6o6"
            target="_blank"
            rel="noopener"
        >form</a>.
    </p>

    <div class="sponsors-section">

        <h2 class="sponsor-name">Gold Sponsors</h2>

        <ul>
            {#each sponsorType('gold') as sponsor, i}
                <li class="sponsor-card">
                    <Sponsor sponsor="{sponsor}"></Sponsor>
                </li>
            {/each}
        </ul>

    </div>

    <div class="sponsors-section">

        <h2 class="sponsor-name">Silver Sponsors</h2>

        <ul>
            {#each sponsorType('silver') as sponsor, i}
                <li class="sponsor-card">
                    <Sponsor sponsor="{sponsor}"></Sponsor>
                </li>
            {/each}
        </ul>

    </div>

    <div class="sponsors-section">

        <h2 class="sponsor-name">Bronze Sponsors</h2>

        <ul>
            {#each sponsorType('bronze') as sponsor, i}
                <li class="sponsor-card">
                    <Sponsor sponsor="{sponsor}"></Sponsor>
                </li>
            {/each}
        </ul>


        <p>In progress.</p>

    </div>

</div>
