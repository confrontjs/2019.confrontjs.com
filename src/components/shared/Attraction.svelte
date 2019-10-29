<script>
    export let attraction = {};
</script>

<style>
    .attraction-photo {
        max-width: 100%;
    }
</style>

<div class="row mb-5">
    <div class="col-4">
        <img
            class="attraction-photo"
            src="{ attraction.image_url }"
            alt="{ attraction.name }"
        />
    </div>

    <div class="col-8">
        <h3 class="primary-color m-0">{ attraction.name }</h3>
        <h4 class="m-0">{ attraction.address }</h4>

        <p>
            { attraction.abstract }
        </p>
    </div>
</div>
