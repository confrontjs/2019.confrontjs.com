<script>
    import SocialMedia from '../components/SocialMedia.svelte';
</script>

<style>
    .footer-section {
        color: var(--snow-color);
        background: var(--night-color);
        text-align: center;
        padding: 30px 0 20px 0;
        display: flex;
        justify-content: space-around;
        font-size: 14px;
    }

    .footer-section .contact {
        width: 330px
    }

    .footer-section .contact p {
        line-height: 20px;
    }

    .footer-section .contact p > a {
        display: block;
        text-decoration: none;
        font-weight: bold;
        font-size: 18px;
    }

    .footer-section .press-kit {
        width: 450px;
    }

    .footer-section .press-kit a.button-primary {
        margin: 30px 0;
        display: inline-block;
    }

    .footer-section .powered-by {
        width: 330px
    }

    .footer-section .powered-by img {
        width: 120px;
    }

    @media (max-width: 480px) {
        /* ... */
    }
</style>

<footer class="footer-section">
    <div class="contact">
        <h2>Contact</h2>
        <p>
            If you have any questions, write email to us:
            <a href="mailto:confrontjs[at]warsawjs.com">confrontjs@warsawjs.com</a>
        </p>
        <SocialMedia />
    </div>

    <div class="press-kit">
        <p>
            Help us to reach a wider group of people,
            get a ready package that will make it easier for you:
        </p>
        <a
            href="https://drive.google.com/open?id=1QLgrDj1DuDo8NZw_QGjpow7nTLChnF5n"
            class="button-primary"
        >
            Download Press Kit
        </a>
        <p>
            Copyright @ 2019 by
            <a href="https://warsawjs.com/">WarsawJS</a>
            &bull;
            <a href="code-of-conduct">Code Conduct</a>
            &bull;
            <a href="contact">Contact</a>
        </p>
    </div>

    <div class="powered-by">
        <h3>Powered by</h3>
        <a href="https://warsawjs.com">
            <img src="https://warsawjs.com/static/images/logos/logo-warsawjs-with-white-text.svg" alt="">
        </a>
    </div>
</footer>
