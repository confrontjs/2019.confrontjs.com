<script>
	import Icons from '../components/shared/Icons.svelte';
	import Menu from '../components/sections/Menu.svelte';
	import Testimonials from '../components/sections/Testimonials.svelte';
	import Footer from '../components/sections/Footer.svelte';
	import FacebookPixel from '../components/shared/FacebookPixel.svelte';
    import Newsletter from '../components/sections/Newsletter.svelte';

	export let segment = '';
</script>

<style>
	main {
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
<FacebookPixel />
