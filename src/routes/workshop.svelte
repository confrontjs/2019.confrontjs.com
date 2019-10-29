<script>
    import Banner from '../components/sections/Banner.svelte';
    export let segment = '';
</script>

<style>
    .button-mix {
        font-size: 22px;
    }
</style>

<svelte:head>
    <title>Workshop • ConFrontJS 2019 • Front-end Conference</title>
</svelte:head>

<Banner image="/banners/IMG_2723.png">
    <p slot="description">29 October 2019 in Warsaw, Poland</p>
    <h1 slot="header">ConFrontJS 2019 Workshop</h1>
</Banner>

<div class="workshop-page">

    <div class="content">
        <h1>Let's Talk About Your App's Performance</h1>

        <div class="row">
            <div class="col-5">
                <p>
                    Szkolenie dla osób, które chcą podnieść swoje umiejętności budowania aplikacji w React.js.
                    Celem szkoleń MasterClass jest zwiększanie wiedzy w kierunku bycia mistrzem — MasterClass.
                    Trenerami cyklu szkoleń WarsawJS MasterClass są doświadczeni developerzy,
                    którzy przekazują swoją wiedzą na podstawie wielu lat doświadczeń.
                    Nie ma selekcji — obowiązuje zasada: "kto pierwszy ten lepszy".
                    Nauka w kameralnym gronie.
                </p>
            </div>

            <div class="offset-1 col-3">
                <h2>Place of training</h2>

                <p>
                    aleja "Solidarności" 173
                    Spark C, 6. piętro
                    Warszawa
                </p>
            </div>

            <div class="col-2 text-center">
                <h2>Date</h2>

                <p>
                    06-12-2019<br/>
                    10:00 - 18:00
                </p>

                <a href="httpe://evenea.pl/event/confrontjs-2019" class="button-mix">
                    Buy ticket
                </a>
            </div>
        </div>

        <div class="row">
            <div class="col-6">
                <h2>What are you going to learn:</h2>

                <ul>
                    <li>The internals of the JS engine</li>
                    <li>What is the Critical Rendering Path in the browser?</li>
                    <li>What are the main performance bottlenecks in a web app (and how to solve/avoid them)?</li>
                    <li>How to monitor web applications both front and backend</li>
                    <li>How to solve performance issues in your app</li>
                    <li>How to avoid performance issues in your app</li>
                    <li>Optimization Design Patterns</li>
                    <li>See examples from performance improvements in production</li>
                    <li>Understand how your code interacts with memory, CPU, GPU and more</li>
                    <li>Performance facts that will make you the star of the next party you're going to</li>
                </ul>

                <p>
                    *** Note - this is an advanced JS session.
                    Prior experience with JS is highly recommended ***
                </p>

                <p>
                    *** Note - this is a hands-on session. ***
                </p>
            </div>

            <div class="col-5">
                <h3>Podczas dwóch dni szkolenia uczestnik otrzymuje:</h3>

                <ul>
                    <li>Materiały szkoleniowe przygotowane specjalnie na dane szkolenie</li>
                    <li>Zadania, które pozwolą mu wykonać część pracy w domu</li>
                    <li>Listę polecanych materiałów do dalszej nauki</li>
                    <li>Dostęp do projektów przygotowanych na potrzeby szkolenia</li>
                </ul>

                <img
                    class="my-5"
                    src="/trainers/yonatan-kra.jpg"
                    alt="Yonatan Kra"
                />

                <h4 class="primary-color m-0">Workshop Trainer</h4>

                <h2 class="m-0">Yonatan Kra</h2>

                <p>
                    Software architect at WalkMe, egghead instructor
                    and former CTO at webiks is going to reveal the secrets
                    of runtime performance in the browser.
                </p>
            </div>
        </div>

    </div>

</div>
