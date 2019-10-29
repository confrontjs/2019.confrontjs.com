<script>
    export let image = '';
</script>

<style>
    .full-size-image {
        background-size: cover;
        height: 400px;
        width: 100%;
    }
</style>

<div class="full-size-image" style="background-image: url({ image });"></div>
