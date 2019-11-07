<style>
    .why-section {
        padding: 20px 0 80px;
    }

    .why-item {
        
        border: 2px solid var(--dark-color);
        position: relative;
        text-align: center;
        margin-top: 75px;
        padding: 60px 20px 20px 20px;
    }

    .why-item p {
        margin: 0;
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

    @media (min-width: 768px) {        
        .why-item {
            min-height: 160px;
            margin-top: 60px;
        }
    }

    @media (min-width: 991px) {
        .why-item {
            min-height: 210px;
            margin-top: 60px;
        }
    }

    @media (min-width: 1200px) {
        .why-item {
            margin-top: 45px;
            min-height: 180px;
        }
    }

</style>

<section class="why-section">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h1>Why ConFrontJS?</h1>
            </div>
        </div>

        <div class="row">

            <div class="col-lg-3 col-md-6 col-xs-12">
                <div class="why-item first">
                    <div class="icon-wrapper">
                        <svg class="icon">
                            <use xlink:href="#icon-ticket"></use>
                        </svg>
                    </div>
                    <p>
                        Have great networking time in community built on trust and mutual respect
                    </p>
                </div>
            </div>

            <div class="col-lg-3 col-md-6 col-xs-12">
                <div class="why-item">
                    <div class="icon-wrapper">
                        <svg class="icon">
                            <use xlink:href="#icon-earth"></use>
                        </svg>
                    </div>
                    <p>
                        Share experience with experts you haven't met before
                    </p>
                </div>
            </div>

            <div class="col-lg-3 col-md-6 col-xs-12">
                <div class="why-item">
                    <div class="icon-wrapper">
                        <svg class="icon">
                            <use xlink:href="#icon-air-freight"></use>
                        </svg>
                    </div>
                    <p>
                        Get engaged and meet professionals who love what they do
                    </p>
                </div>
            </div>

            <div class="col-lg-3 col-md-6 col-xs-12">
                <div class="why-item">
                    <div class="icon-wrapper">
                        <svg class="icon">
                            <use xlink:href="#icon-respect"></use>
                        </svg>
                    </div>
                    <p>
                        Find support in community that shares knowledge everyday
                    </p>
                </div>
            </div>
        </div>

        <!-- <ul class="list-unstyled row justify-content-around">

            <li class="col-md-3 col-sm-6 col-xs-12">
                <div class="why-item">
                    <div class="icon-wrapper">
                        <svg class="icon">
                            <use xlink:href="#icon-ticket"></use>
                        </svg>
                    </div>
                    Have great networking time in community built on trust and mutual respect
                </div>
            </li>
            <li class="col-md-3 col-sm-6 col-xs-12">
                <div class="why-item">
                    <div class="icon-wrapper">
                        <svg class="icon">
                            <use xlink:href="#icon-earth"></use>
                        </svg>
                    </div>
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
        </ul> -->
    </div>
</section>
