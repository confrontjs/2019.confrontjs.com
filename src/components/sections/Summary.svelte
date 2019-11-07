<style>
    .summary {
        background: var(--dark-color);
        padding: 80px 0px;
    }

    .summary-entry {
        color: var(--snow-color);
        background-image: url(/symbols/haze.svg);
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        height: 148px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 30px;
    }

    .last {
        margin-bottom: 0;
    }

    @media (min-width: 768px) {
        .summary {
            padding: 0px 0px 40px;
        }   
    }

    @media (min-width: 1200px) {
        .summary {
            padding: 80px 0px 0px;
        }
    }
</style>

<div class="summary">
    <div class="container">
        <div class="row">
            <div class="col-sm-4 col-xs-12">
                <div class="summary-entry">
                    1 Day
                </div>
            </div>
            <div class="col-sm-4 col-xs-12">
                <div class="summary-entry">
                    1 Track
                </div>
            </div>
            <div class="col-sm-4 col-xs-12">
                <div class="summary-entry last">
                    11 Talks
                </div>
            </div>
        </div>
    </div>
</div>
