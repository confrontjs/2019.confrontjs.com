<script>
	// import Carousel from '@piecioshka/svelte-carousel'
</script>

<style>
.testimonials-container {
    padding: 20px 0;
    background: #ECEFF4;
    display: grid;
    grid-template-columns: 33% 33% 33%;
    grid-template-rows: auto;
    text-align: center;
}

.testimonials-container a {
    margin: 20px;
}

.testimonials-container img {
    width: 400px;
}

@media (max-width: 1300px) {
    .testimonials-container {
        grid-template-columns: 50% 50%;
    }
}

@media (max-width: 800px) {
    .testimonials-container {
        grid-template-columns: 100%;
    }
}

</style>

<!-- https://www.prankmenot.com/?twitter_tweet -->

<div class="testimonials-container">

    <!-- <Carousel autoplay="4000" perPage="{{ 1600: 5, 1200: 4, 800: 3, 500: 2 }}"> -->
        <!-- <div class="slide-content"> -->

            <!-- https://www.prankmenot.com/Bkz87E -->
            <a
                href="https://twitter.com/TejasKumar_/status/1181831345003204608"
                target="_blank"
                rel="noopener"
            >
                <img
                    src="/tweets/tejas-kumar.png"
                    alt="Tejas Kumar"
                />
            </a>

        <!-- </div> -->
        <!-- <div class="slide-content"> -->

            <!-- https://www.prankmenot.com/EZKI0t -->
            <a
                href="https://twitter.com/smalluban/status/1057232738489643008"
                target="_blank"
                rel="noopener"
            >
                <img
                    src="/tweets/dominik-lubanski.png"
                    alt="Dominik Lubański"
                />
            </a>

        <!-- </div> -->
        <!-- <div class="slide-content"> -->

            <!-- https://www.prankmenot.com/oOWiHd -->
            <a
                href="https://twitter.com/ranyitz/status/1063346524938297344"
                target="_blank"
                rel="noopener"
            >
                <img
                    src="/tweets/ran-yitzhaki.png"
                    alt="Ran Yitzhaki"
                />
            </a>

        <!-- </div> -->
        <!-- <div class="slide-content"> -->

            <!-- https://www.prankmenot.com/HUVsBR -->
            <a
                href="https://twitter.com/TejasKumar_/status/1056984161867718656"
                target="_blank"
                rel="noopener"
            >
                <img
                    src="/tweets/tejas-kumar-2.png"
                    alt="Tejas Kumar"
                />
            </a>

        <!-- </div> -->
        <!-- <div class="slide-content"> -->

            <!-- https://www.prankmenot.com/s4zCqK -->
            <a
                href="https://twitter.com/ranyitz/status/1057333189553938438"
                target="_blank"
                rel="noopener"
            >
                <img
                    src="/tweets/ran-yitzhaki-2.png"
                    alt="Ran Yitzhaki"
                />
            </a>

        <!-- </div> -->
        <!-- <div class="slide-content"> -->

            <!-- https://www.prankmenot.com/ySgGPH -->
            <a
                href="https://twitter.com/TejasKumar_/status/1056852619455553541"
                target="_blank"
                rel="noopener"
            >
                <img
                    src="/tweets/tejas-kumar-3.png"
                    alt="Tejas Kumar"
                />
            </a>

        <!-- </div> -->
    <!-- </Carousel> -->
</div>
