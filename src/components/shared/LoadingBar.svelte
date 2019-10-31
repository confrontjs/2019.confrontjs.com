<script>
    export let progress = '50%';
    export let baseColor = '#fff';
    export let highlightColor = '#000';
</script>

<style>
    .loading-bar {
        width: 100%;
    }
    .indicator {
        height: 4px;
        transition: width 0.2s;
    }
</style>

<div
    class="loading-bar"
    style="background-color: { baseColor };"
>
    <div
        class="indicator"
        style="
            background-color: { highlightColor };
            width: { progress }
        "
    ></div>
</div>
