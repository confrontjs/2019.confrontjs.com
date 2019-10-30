<style>
    .waves-type-3 {
        position: relative;
        height: 70px;
        width: 100%;
        z-index: 1;
    }
    .waves-type-3 .wave {
        position: absolute;
        left: 0;
        width: 100%;
        z-index: 100;
        display: block;
    }
    .waves-type-3 .wave-1 {
        top: 0px;
    }
    .waves-type-3 .wave-2 {
        top: 40px;
    }
    .waves-type-3 .wave-3 {
        top: 0px;
    }
    @media (max-width: 800px) {
        .waves-type-3 {
            display: none;
        }
    }
</style>

<div class="waves-type-3">
    <svg class="wave wave-1" viewBox="0 0 1440 140" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1016.5 0H1440V124.031C1062.5 38.291 223 215.791 0 98.24V0H603.5H1016.5Z" fill="#3B4252"/>
    </svg>

    <svg class="wave wave-2" viewBox="0 0 1447 68" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1446 24.4758C1423.33 55.9943 1344.04 74.949 1208.5 62.9809C1070.5 50.796 946.986 -18.7094 674.5 6.44208C458 26.4259 327.5 106.278 1 42.4284" stroke="#2E3440" stroke-width="1.5"/>
    </svg>

    <svg class="wave wave-3" viewBox="0 0 1440 136" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1440 1C1350 74.11 1185.5 158.436 918.5 128.217C664.196 99.4355 340.5 14.1598 1 78.9901" stroke="#ECEFF4" stroke-width="1.5"/>
    </svg>

</div>
