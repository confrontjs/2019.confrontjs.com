<style>
    .why-section {
        padding: 50px 0;
    }

    .why-section ul {
        margin: 80px 0 0 0;
        display: flex;
        justify-content: space-between;
    }

    .why-item {
        width: 310px;
        height: 200px;
        border: 2px solid var(--dark-color);
        position: relative;
        display: flex;
        align-items: center;
        text-align: center;
        padding: 20px;
    }

    .why-item .icon-wrapper {
        position: absolute;
        left: calc(50% - 90px / 2);
        top: calc(-90px / 2);
        background: var(--mix-color);
        width: 90px;
        height: 90px;
        border-radius: 50%;
        padding: 20px;
    }

    .why-item .icon-wrapper .icon {
        width: 50px;
        height: 50px;
    }

</style>

<div class="why-section">
    <h1>Why ConFrontJS?</h1>

    <ul class="list-unstyled">

        <li class="why-item">
            <span class="icon-wrapper">
                <svg class="icon">
                    <use xlink:href="#icon-ticket"></use>
                </svg>
            </span>
            Have great networking time in community built on trust and mutual respect
        </li>
        <li class="why-item">
            <span class="icon-wrapper">
                <svg class="icon">
                    <use xlink:href="#icon-earth"></use>
                </svg>
            </span>
            Share experience with experts you haven't met before
        </li>
        <li class="why-item">
            <span class="icon-wrapper">
                <svg class="icon">
                    <use xlink:href="#icon-air-freight"></use>
                </svg>
            </span>
            Get engaged and meet professionals who love what they do
        </li>
        <li class="why-item">
            <span class="icon-wrapper">
                <svg class="icon">
                    <use xlink:href="#icon-respect"></use>
                </svg>
            </span>
            Find support in community that shares knowledge everyday
        </li>

    </ul>
</div>
