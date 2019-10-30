<script>
    import LoadingBar from '../components/shared/LoadingBar.svelte';

	import Icons from '../components/shared/Icons.svelte';
	import Menu from '../components/sections/Menu.svelte';
	import Testimonials from '../components/sections/Testimonials.svelte';
	import Footer from '../components/sections/Footer.svelte';
	import FacebookPixel from '../components/shared/FacebookPixel.svelte';
    import Newsletter from '../components/sections/Newsletter.svelte';

    export let segment = '';

    let loadingIndicator = 0;

    function getHeight() {
        const doc = document;
        const body = doc.body;
        const elem = doc.documentElement;
        return Math.max(
            body.scrollHeight, elem.scrollHeight,
            body.offsetHeight, elem.offsetHeight,
            body.clientHeight, elem.clientHeight
        );
    }

    function refreshLoadingIndicator() {
        if (typeof window === 'undefined') {
            return;
        }

        const doc = document;
        const elem = doc.documentElement;

        const offset = window.pageYOffset + elem.clientHeight;
        const height = getHeight();

        const progress = Math.round(offset / height * 100);

        loadingIndicator = `${progress}%`;
    }

    refreshLoadingIndicator();
</script>

<style>
    .fixed-navbar {
        position: fixed;
        top: 0;
        left: 0;
        height: 76px;
        width: 100%;
        z-index: 4;
    }

	main {
        box-sizing: border-box;
        padding: 78px 0 0 0;
    }

    @media (max-width: 700px) {
        main {
            padding: 70px 0 0 0;
        }
    }
</style>

<svelte:window on:scroll={refreshLoadingIndicator}/>

<Icons />

<div class="fixed-navbar">
    <Menu {segment}/>
    <LoadingBar
        progress="{ loadingIndicator }"
        baseColor="#5E99D3"
        highlightColor="#A64AC9"
    />
</div>

<main>
	<slot></slot>
</main>

<!-- <Testimonials /> -->
<Newsletter />
<Footer />
<FacebookPixel />
