<script>
    import SocialMediaIcons from './SocialMediaIcons.svelte';
    import slug from 'slug';

    export let host = {};

    function getAvatarUrl() {
        const filename = slug(host.name).toLowerCase();
        return `/hosts/${filename}.jpg`;
    }
</script>

<style>
.organizer-profile {
    width: 400px;
    display: inline-block;
}

.organizer-profile img {
    width: 250px;
}

.organizer-profile h2 {
    margin: 30px 0 0 0;
}

.organizer-profile h4 {
    font-weight: bold;
    color: var(--primary-color);
    margin: 0 0 30px 0;
}

</style>

<div class="organizer-profile">
    <img src="{ getAvatarUrl() }" alt="">

    <h2>{ host.name }</h2>
    <h4>{ host.position }</h4>

    <p className="lead">
        { host.bio.en || host.bio.pl }
    </p>

    <SocialMediaIcons person={ host }/>
</div>