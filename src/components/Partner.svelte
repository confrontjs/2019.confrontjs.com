<script>
    export let partner = {
        name: 'fake',
        type: 'fake',
        url: 'fake',
        logoUrl: 'fake'
    };
</script>

<style>
    a {
        display: inline-block;
    }
    img {
        width: 100px;
        height: 100px;
    }
</style>

<a
    href={ partner.url }
    title={ partner.name }
    rel="noopener"
>
    <img
        src={ partner.logoUrl }
        class="partner-avatar"
        alt="Avatar of { partner.name }"
    />
</a>
