<style>
    .waves-type-1 {
        position: relative;
        height: 80px;
        width: 100%;
        z-index: 0;
    }
    .waves-type-1 .wave {
        position: absolute;
        left: 0;
        width: 100%;
        z-index: 100;
        display: block;
    }
    .waves-type-1 .wave-1 {
        top: -40px;
    }
    .waves-type-1 .wave-2 {
        top: -30px;
    }
    .waves-type-1 .wave-3 {
        top: 0px;
    }
    @media (max-width: 800px) {
        .waves-type-1 {
            display: none;
        }
    }
</style>

<div class="waves-type-1">

    <!-- ciemne tło -->
    <svg class="wave wave-1" viewBox="0 0 1442 338" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1441.6 86.6188C1253.84 -33.7318 999.49 -3.43057 833.26 28.7296C667.029 60.8898 502.801 88.9047 305.027 28.7296C107.253 -31.4456 0.103885 28.7296 0.103885 28.7296V338H1441.6V86.6188Z" fill="#2E3440"/>
    </svg>

    <svg class="wave wave-2" viewBox="0 0 1443 143" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 31.061C23.6667 71.4206 102.956 95.6923 238.5 80.367C376.5 64.7641 500.014 -24.2381 772.5 7.96863C989 33.5581 1130 189.587 1442 127.176" stroke="#3B4252" stroke-width="1.5"/>
    </svg>

    <svg class="wave wave-3" viewBox="0 0 1442 141" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 9.74463C102.333 56.3455 256.5 170.143 523.5 131.448C777.804 94.5926 934.5 -99.4756 1441 68.4122" stroke="#ECEFF4" stroke-width="1.5"/>
    </svg>
</div>
