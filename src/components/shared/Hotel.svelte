<script>
    export let hotel = {};
</script>

<style>
    .hotel {
        display: inline-block;
        width: 100%;
        margin: 50px 0 0px 0;
        position: relative;
    }

    .hotel-preview {
        background: #000;
        width: 100%;
    }

    .hotel-preview:hover {
        opacity: 0.8;
    }

    .hotel-name {
        width: 80%;
        margin: 0;
    }

    .hotel-address {
        margin: 0;
    }

    @media (min-width: 1200px) {
        .hotel {
            max-width: 420px;
            display: block;
            margin: 0 auto;
        }
    }
    
</style>

<div class="hotel">
    <a href="{ hotel.profile_url }">
        <img
            class="hotel-preview img-fluid"
            src="{ hotel.image_url }"
            alt="{ hotel.name }"
        />
    </a>

    <div class="row mb-4">
        <div class="col-md-3 font-bold">{ hotel.distance }</div>

        <div class="offset-md-6 col-md-3 text-right">
            <span class="d-block font-bold">{ hotel.trip.time }</span>
            <span class="d-block">{ hotel.trip.type }</span>
        </div>
    </div>

    <h3 class="hotel-name secondary-color">{ hotel.name }</h3>
    <p class="hotel-address">{ hotel.address }</p>
</div>
