<style>
    .why-section {
        padding: 50px 0;
    }

    .why-section ul {
        margin: 80px 0 0 0;
        display: flex;
        justify-content: space-between;
    }

    .why-section ul li {
        margin: 0 0 30px 0
    }

    .why-item {
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

<section class="why-section">
    <div class="content">
        <h1>Why ConFrontJS?</h1>

        <ul class="list-unstyled row justify-content-around">

            <li class="col-md-3 col-sm-6 col-xs-12">
                <div class="why-item">
                    <span class="icon-wrapper">
                        <svg class="icon">
                            <use xlink:href="#icon-ticket"></use>
                        </svg>
                    </span>
                    Have great networking time in community built on trust and mutual respect
                </div>
            </li>
            <li class="col-md-3 col-sm-6 col-xs-12">
                <div class="why-item">
                    <span class="icon-wrapper">
                        <svg class="icon">
                            <use xlink:href="#icon-earth"></use>
                        </svg>
                    </span>
                    Share experience with experts you haven't met before
                </div>
            </li>
            <li class="col-md-3 col-sm-6 col-xs-12">
                <div class="why-item">
                    <span class="icon-wrapper">
                        <svg class="icon">
                            <use xlink:href="#icon-air-freight"></use>
                        </svg>
                    </span>
                    Get engaged and meet professionals who love what they do
                </div>
            </li>
            <li class="col-md-3 col-sm-6 col-xs-12">
                <div class="why-item">
                    <span class="icon-wrapper">
                        <svg class="icon">
                            <use xlink:href="#icon-respect"></use>
                        </svg>
                    </span>
                    Find support in community that shares knowledge everyday
                </div>
            </li>
        </ul>
    </div>
</section>
