<style>
    .waves-type-2 {
        background: var(--dark-color);
        position: relative;
        height: 150px;
        width: 100%;
        z-index: 1;
    }
    .waves-type-2 .wave {
        position: absolute;
        left: 0;
        width: 100%;
        z-index: 100;
        display: block;
    }
    .waves-type-2 .wave-1 {
        top: -70px;
    }
    .waves-type-2 .wave-2 {
        top: -40px;
    }
    @media (max-width: 800px) {
        .waves-type-2 {
            display: none;
        }
    }
</style>

<div class="waves-type-2">
    <svg class="wave wave-1" viewBox="0 0 1442 177" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0H1442V127C921.778 80.4801 150.709 258.93 0 128.09V0Z" fill="#2E3440"/>
    </svg>

    <svg class="wave wave-2" viewBox="0 0 1441 136" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1440 1C1350 74.11 1185.5 158.436 918.5 128.217C664.196 99.4355 340.5 14.1598 1 78.9901" stroke="#ECEFF4" stroke-width="1.5"/>
    </svg>

</div>
