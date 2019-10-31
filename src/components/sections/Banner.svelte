<script>
    export let image = "http://placeskull.com/1440/500";
</script>
<style>
    .banner {
        height: 650px;
        background-size: cover;
        background-repeat: no-repeat;
        color: var(--snow-color);
        font-weight: bold;
        position: relative;
    }

    .banner .apla {
        background: linear-gradient(90deg, rgba(46, 52, 64, 0.96) 33.33%, rgba(95, 95, 96, 0) 87.5%, rgba(255, 255, 255, 0) 99.99%, rgba(196, 196, 196, 0) 100%, rgba(196, 196, 196, 0) 100%);
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
    }

    .banner .texts {
        position: relative;
        padding: 160px 0 0 0
    }

    .banner .texts :global(p) {
        margin: 0;
        display: block;
    }

    .banner .texts :global(h1) {
        display: block;
        max-width: 720px;
        margin: 0;
    }

    @media (max-width: 800px) {
        .banner {
            height: 100%;
            padding: 30px;
        }
    }
</style>

<div
    class="banner"
    style="background-image: url({image})"
>
    <div class="apla"></div>

    <div class="content">
        <div class="texts">
            <slot name="description"></slot>
            <slot name="header"></slot>
        </div>
    </div>
</div>
