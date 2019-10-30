<script>
    import SocialMedia from '../shared/SocialMedia.svelte';
</script>

<style>
    .footer-section {
        color: var(--snow-color);
        background: var(--night-color);
        padding-bottom: 30px;
        font-size: 14px;
    }

    .footer-section .contact p {
        line-height: 20px;
    }

    .footer-section .contact p > a {
        display: block;
        text-decoration: none;
        font-weight: bold;
        font-size: 16px;
    }

    .footer-section .press-kit {
        padding-top: 30px;
    }

    .footer-section .press-kit p.about {
        white-space: pre-line;
    }

    .footer-section .press-kit a.button-primary {
        margin: 30px 0;
        display: inline-block;
    }

    .footer-section .powered-by img {
        width: 120px;
    }

    @media (max-width: 480px) {
        /* ... */
    }
</style>

<footer class="footer-section text-center container-fluid">
    <div class="row">
        <div class="contact col-md-3 col-sm-12">
            <h2>Contact</h2>
            <p>
                If you have any questions, write email to us:
                <a href="mailto:confrontjs[at]warsawjs.com">confrontjs@warsawjs.com</a>
            </p>
            <SocialMedia />
        </div>

        <div class="press-kit offset-md-1 col-md-4 col-sm-12">
            <p class="about">
                Help us to reach a wider group of people,
                get a ready package that will make it easier for you:
            </p>

            <a
                class="button-primary"
                data-content="Download Press Kit"
                href="https://drive.google.com/open?id=1QLgrDj1DuDo8NZw_QGjpow7nTLChnF5n"
            >Download Press Kit</a>

            <p>
                Copyright @ 2019 by
                <a href="https://warsawjs.com/">WarsawJS</a>
                &bull;
                <a href="code-of-conduct">Code of Conduct</a>
                &bull;
                <a href="contact">Contact</a>
            </p>
        </div>

        <div class="powered-by offset-md-1 col-md-3 col-sm-12">
            <h3>Powered by</h3>
            <a href="https://warsawjs.com">
                <img
                    src="https://warsawjs.com/static/images/logos/logo-warsawjs-with-white-text.svg"
                    alt="WarsawJS"
                />
            </a>
        </div>
    </div>
</footer>
