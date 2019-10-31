<style>
    .waves-type-7 {
        position: relative;
        height: 20px;
        width: 100%;
        z-index: 1;
    }
    .waves-type-7 .wave {
        position: absolute;
        left: 0;
        width: 100%;
        z-index: 100;
        display: block;
    }
    .waves-type-7 .wave-1 {
        top: -80px;
    }
    .waves-type-7 .wave-2 {
        top: -50px;
    }
    .waves-type-7 .wave-3 {
        top: 90px;
    }
    @media (max-width: 800px) {
        .waves-type-7 {
            display: none;
        }
    }
</style>

<div class="waves-type-7">

    <!-- jasne tło -->
    <svg class="wave wave-1" viewBox="0 0 1440 140" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1016.5 0H1440V124.031C1062.5 38.291 223 215.791 0 98.24V0H603.5H1016.5Z" fill="#ECEFF4"/>
    </svg>

    <!-- ciemny pasek -->
    <svg class="wave wave-2" viewBox="0 0 1437 139" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M-3 1C87 75.9061 251.5 162.304 518.5 131.343C772.804 101.854 1096.5 14.4831 1436 80.9061" stroke="#2E3440" stroke-width="1.5"/>
    </svg>

    <!-- jasny pasek -->
    <svg class="wave wave-3" viewBox="0 0 1440 70" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M-5 25.0525C17.6667 57.3452 96.9555 76.7655 232.5 64.5034C370.5 52.0191 494.014 -19.1936 766.5 6.57576C983 27.0504 1113.5 108.864 1440 43.4461" stroke="#ECEFF4" stroke-width="1.5"/>
    </svg>


</div>
