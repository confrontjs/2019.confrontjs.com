<script>
    import SocialMediaIcons from './SocialMediaIcons.svelte';

    export let host = {};
</script>

<style>
    .organizer-profile {
        display: inline-block;
        padding: 0 10px;
    }

    .organizer-profile img {
        width: 250px;
    }

    .organizer-profile h2 {
        margin: 30px 0 0 0;
    }

    .organizer-profile h4 {
        font-weight: bold;
        margin: 0 0 30px 0;
    }
</style>

<div class="organizer-profile">
    <a href="{ host.homepage_url } ">
        <img src="{ host.avatar_url }" alt="{ host.name }">
    </a>

    <h2>{ host.name }</h2>
    <h4 class="primary-color">{ host.position }</h4>

    <p className="lead">
        { host.bio.en || host.bio.pl }
    </p>

    <SocialMediaIcons person={ host }/>
</div>