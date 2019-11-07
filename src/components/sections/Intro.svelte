
<script>
    import BuyTicketsButton from './BuyTicketsButton.svelte';

    export let segment = '';
</script>

<style>
    .intro-container {
        text-align: center;
        color: var(--night-color);
    }

    .logo-confrontjs {
        height: 300px;
    }

    p {
        margin: 0;
        text-transform: uppercase;
        font-weight: bold;
    }

    p.headline {
        margin-top: -30px;
        font-size: 36px;
        line-height: 1.2;
        margin-bottom: 16px;
    }

    p.subline {
        font-size: 24px;
    }

    @media (min-width: 370px) {
        p.headline {
            font-size: 40px;
        }
    }

    @media (min-width: 430px) {
        p.headline {
            font-size: 46px;
        }
    }

</style>

<div class="intro-container">

    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <svg class="logo-confrontjs">
                    <use xlink:href="#icon-confrontjs-dark"></use>
                </svg>

                <p class="headline">Front-end conference</p>

                <p class="subline">7 December 2019 in&nbsp;Warsaw,&nbsp;Poland</p>
                <BuyTicketsButton />
            </div>
        </div>
    </div>
</div>
