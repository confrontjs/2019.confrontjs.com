<script>
    import SocialMedia from '../shared/SocialMedia.svelte';
    import Version from '../shared/Version.svelte';
</script>

<style>
    .footer {
        color: var(--snow-color);
        background: var(--night-color);
        padding: 80px 0px;
        font-size: 14px;
    }

    .footer-title {
        margin-top: 0px;
    }

    .contact p {
        line-height: 20px;
    }

    .contact p > a {
        display: block;
        text-decoration: none;
        font-weight: bold;
        font-size: 16px;
    }

    .press-kit {
        padding-top: 0px;
    }

    .press-kit p.about {
        white-space: pre-line;
        margin-top: 0;
    }

    .press-kit a.button-primary {
        margin: 30px 0;
        display: inline-block;
    }

    .powered-by img {
        width: 120px;
    }
</style>

<footer class="footer">

    <div class="container">
    
        <div class="row">
            <div class="col-md-3 col-sm-12">
                <div class="contact">
                    <h2 class="footer-title">Contact</h2>
                    <p>
                        If you have any questions, write email to us:
                        <a href="mailto:confrontjs[at]warsawjs.com">confrontjs@warsawjs.com</a>
                    </p>
                    <SocialMedia/>
                    <Version/>
                </div>
            </div>

            <div class="offset-md-1 col-md-4 col-sm-12">
                <div class="press-kit">
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
                        <a href="/code-of-conduct">Code of Conduct</a>
                        &bull;
                        <a href="/privacy-policy">Privacy Policy</a>
                        &bull;
                        <a href="/contact">Contact</a>
                    </p>
                </div>
            </div>

            <div class="offset-md-1 col-md-3 col-sm-12">
                <div class="powered-by">
                    <h3 class="footer-title">Powered by</h3>
                    <a href="https://warsawjs.com">
                        <img
                            src="https://warsawjs.com/static/images/logos/logo-warsawjs-with-white-text.svg"
                            alt="WarsawJS"
                        />
                    </a>
                </div>
            </div>
        </div>
    </div>
</footer>
