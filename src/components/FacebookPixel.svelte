<script>

    function setupFacebookPixel() {

        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '522763151821565');
        fbq('track', 'PageView');

    }

    if (typeof window !== 'undefined') {
        setupFacebookPixel();
    }

    export let segment;
</script>

<style>
    .facebook-pixel-container {}
</style>

<div class="facebook-pixel-container">

    <noscript>
        <img
            alt=""
            height="1"
            width="1"
            style="display:none"
            src="https://www.facebook.com/tr?id=522763151821565&amp;ev=PageView&amp;noscript=1"
        />
    </noscript>

</div>
