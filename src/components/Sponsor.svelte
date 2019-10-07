<script>
    export let sponsor = {
        name: 'fake',
        type: 'fake',
        url: 'fake',
        logoUrl: 'fake'
    };
</script>

<a
    href={ sponsor.url }
    title={ sponsor.name }
    target="_blank"
    rel="noopener"
>
    <img
        src={sponsor.logoUrl}
        class="sponsor-avatar"
        alt="Avatar of {sponsor.name}"
    />
</a>

<!-- <h4 class="sponsor-name">{ sponsor.name }</h4> -->
