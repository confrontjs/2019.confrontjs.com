<script>
    import Banner from '../components/sections/Banner.svelte';
    export let segment = '';
</script>

<style>
    .button-mix {
        font-size: 22px;
    }
    .trainer-avatar {
        max-width: 100%;
    }
</style>

<svelte:head>
    <title>Workshop • ConFrontJS 2019 • Front-end Conference</title>
</svelte:head>

<Banner image="/promo/IMG_2723.png">
    <p slot="description">07 December 2019 in Warsaw, Poland</p>
    <h1 slot="header">ConFrontJS 2019 Workshop</h1>
</Banner>

<div class="workshop-page">

    <div class="content">
        <h4 class="primary-color mb-0">Workshop Title</h4>

        <h1 class="mt-0">
            Let's Talk About<br/>Your App's Performance
        </h1>

        <div class="row">
            <div class="col-md-5 col-sm-12">
                <p>
                    A workshop for people who want to improve their skills
                    in performance optimization. The goal of MasterClass training
                    is to make another step to be a true master - MasterClass.
                    The trainer is a person with many years of experience
                    in programming and teaching. There is no selection - the
                    principle "first come first served" applies. Learning in
                    a small circle.
                </p>
            </div>

            <div class="offset-md-1 col-md-3 col-sm-12">
                <h2>Place of training</h2>

                <p>
                    Engineering Design Center (EDC)
                    Łukasiewicz Research Network – Institute of Aviation<br/>
                    Aleja Krakowska 110/114<br/>
                    02-256 Warsaw, Poland
                </p>
            </div>

            <div class="col-md-2 col-sm-12 text-center">
                <h2>Date</h2>

                <p>
                    06-12-2019<br/>
                    10:00 - 18:00
                </p>

                <a
                    class="button-mix my-3 d-inline-block"
                    data-content="Buy ticket"
                    href="https://evenea.pl/event/confrontjs-2019"
                >Buy ticket</a>
            </div>
        </div>

        <div class="row">
            <div class="col-md-6 col-sm-12">
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

            <div class="col-md-5 col-sm-12">
                <h3>Price includes:</h3>

                <ul>
                    <li>One whole day of training</li>
                    <li>Training materials specially prepared for the given training</li>
                    <li>Tasks that will allow him to do part of the work at home</li>
                    <li>A list of recommended materials for further learning</li>
                </ul>

                <img
                    class="trainer-avatar my-5"
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
