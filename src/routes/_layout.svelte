<script>
	import Icons from '../components/Icons.svelte';
	import Nav from '../components/Nav.svelte';
    import Newsletter from '../components/Newsletter.svelte';
    import Contact from '../components/Contact.svelte';
    import CodeOfConduct from '../components/CodeOfConduct.svelte';
	import Footer from '../components/Footer.svelte';

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
<Nav {segment}/>

<main>
	<slot></slot>

    <Contact />
    <Newsletter />
    <CodeOfConduct />
    <Footer />
</main>
