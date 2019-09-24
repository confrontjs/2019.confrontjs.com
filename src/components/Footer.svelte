<script>
    import Newsletter from '../components/Newsletter.svelte';
    import SocialMedia from '../components/SocialMedia.svelte';
</script>

<style>
.footer-container {
    background: #ECEFF4;
    text-align: center;
    padding: 0 0 20px 0;
}
.footer-container .panel {
    max-width: 56em;
    margin: auto;
    display: flex;
    justify-content: space-between;
    padding: 0 0 10px 0;
}
</style>

<footer class="footer-container">
    <div class="panel">
        <Newsletter />
        <SocialMedia />
    </div>

    <p>
        Copyright @ 2019 by
        <a
            href="https://warsawjs.com/"
            target="_blank"
            rel="noopener"
        >WarsawJS</a>
        &bull;
		<a href='code-of-conduct'>Code Conduct</a>
    </p>
</footer>
