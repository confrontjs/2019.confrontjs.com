<script>
    export let segment = '';
</script>

<style>
    .logo-confrontjs {
        height: 300px;
    }

    .color-codes-page {
        padding: 20px;
    }

    .color-pallette {
        display: flex;
        justify-content: space-between;
        max-width: 920px;
        margin: auto;
    }

    .color-view {
        width: 200px;
        padding: 20px;
    }
</style>

<svelte:head>
    <title>Color Codes • ConFrontJS 2019 • Front-end Conference in Warsaw</title>
</svelte:head>

<div class="color-codes-page">
    <div class="content text-center">
        <svg class="logo-confrontjs">
            <use xlink:href="#icon-confrontjs-dark"></use>
        </svg>

        <h1>Color Codes</h1>

        <div class="color-pallette">
            <div class="color-view" style="background-color: #FFFFFF">
                <h3>WHITE</h3>
                <h4>HEX COLOR: <strong>FFFFFF</strong></h4>
                <!-- <h4>RGB: <strong>XXX</strong></h4> -->
            </div>
            <div class="color-view" style="background-color: #17E9E0">
                <h3>PRIMARY</h3>
                <h4>HEX COLOR: <strong>17E9E0</strong></h4>
                <!-- <h4>RGB: <strong>XXX</strong></h4> -->
            </div>
            <div class="color-view" style="background-color: #A64AC9">
                <h3>SECONDARY</h3>
                <h4>HEX COLOR: <strong>A64AC9</strong></h4>
                <!-- <h4>RGB: <strong>XXX</strong></h4> -->
            </div>
            <div class="color-view" style="background-color: #5E99D3">
                <h3>MIX</h3>
                <h4>HEX COLOR: <strong>5E99D3</strong></h4>
                <!-- <h4>RGB: <strong>XXX</strong></h4> -->
            </div>
        </div>
    </div>
</div>