<script>
	import Icons from '../components/Icons.svelte';
	import Menu from '../components/Menu.svelte';
	import Testimonials from '../components/Testimonials.svelte';
	import Footer from '../components/Footer.svelte';
	import FacebookPixel from '../components/FacebookPixel.svelte';
    import Newsletter from '../components/Newsletter.svelte';

	export let segment = '';
</script>

<style>
	main {
		position: relative;
		max-width: 1440px;
		background-color: white;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>

<Icons />
<Menu {segment}/>

<main>
	<slot></slot>
</main>

<!-- <Testimonials /> -->
<Newsletter />
<Footer />
<!-- <FacebookPixel /> -->
