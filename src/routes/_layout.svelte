<script>
	import Icons from '../components/Icons.svelte';
	import Menu from '../components/Menu.svelte';
	import Testimonials from '../components/Testimonials.svelte';
	import Footer from '../components/Footer.svelte';
	import FacebookPixel from '../components/FacebookPixel.svelte';

	export let segment;
</script>

<style>
	main {
		position: relative;
		max-width: 56em;
		background-color: white;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>

<Icons />
<Menu {segment}/>

<main>
	<slot></slot>
</main>

<Testimonials />
<Footer />
<FacebookPixel />
