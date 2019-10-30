<style>
    .waves-type-5 {
        background: var(--dark-color);
        position: relative;
        height: 80px;
        width: 100%;
        z-index: 1;
    }
    .waves-type-5 .wave {
        position: absolute;
        left: 0;
        width: 100%;
        z-index: 100;
        display: block;
    }
    .waves-type-5 .wave-1 {
        top: -20px;
    }
    .waves-type-5 .wave-2 {
        top: 150px;
    }
    .waves-type-5 .wave-3 {
        top: 0px;
    }
    @media (max-width: 800px) {
        .waves-type-5 {
            display: none;
        }
    }
</style>

<div class="waves-type-5">

    <svg class="wave wave-1" viewBox="0 0 1440 140" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1016.5 0H1440V124.031C1062.5 38.291 223 215.791 0 98.24V0H603.5H1016.5Z" fill="#ECEFF4"/>
    </svg>

    <svg class="wave wave-2" viewBox="0 0 1447 68" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1446 24.3868C1423.33 55.905 1344.04 74.8596 1208.5 62.8916C1070.5 50.7067 946.986 -18.7982 674.5 6.35317C458 26.3368 327.5 106.188 1 42.3392" stroke="#ECEFF4" stroke-width="1.5"/>
    </svg>

    <svg class="wave wave-3" viewBox="0 0 1441 172" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1440 1C1350 94.0836 1185.5 201.447 918.5 162.973C664.196 126.328 340.5 17.7551 1 100.297" stroke="#2E3440" stroke-width="1.5"/>
    </svg>

</div>
