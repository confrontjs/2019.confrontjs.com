<script>
    export let image = '';
</script>

<style>
    .full-size-image {
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        height: 400px;
        width: 100%;
    }

    @media (max-width: 720px) {
        .full-size-image {
            background-size: contain;
            height: 200px;
        }
    }
</style>

<div class="full-size-image" style="background-image: url({ image });"></div>
