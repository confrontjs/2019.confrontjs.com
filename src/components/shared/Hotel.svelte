<script>
    export let hotel = {};
</script>

<style>
    .hotel {
        display: inline-block;
        width: 420px;
        margin: 0 0 50px 0;
    }

    .hotel-name {
        width: 80%;
        margin: 0;
    }

    .hotel-address {
        margin: 0;
    }
</style>

<div class="hotel">
    <img src="{ hotel.image_url }" alt=""/>

    <div class="row">
        <div class="col-2">{ hotel.distance }</div>

        <div class="offset-8 col-2">
            <span>{ hotel.trip.time }</span>
            <span>{ hotel.trip.type }</span>
        </div>
    </div>

    <h3 class="hotel-name secondary-color">{ hotel.name }</h3>
    <p class="hotel-address">{ hotel.address }</p>
</div>
