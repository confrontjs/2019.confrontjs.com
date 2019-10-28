<script>
    export let person = {};
</script>

<style>
    .social-media-link {
        display: inline-block;
    }
    .social-media-icon {
        width: 40px;
        height: 40px;
        padding: 5px;
        margin: 5px;
    }

    .social-media-icon:hover {
        background: var(--secondary-color);
    }
</style>

{#if person.contact.linkedin_url}
    <a
        href="{ person.contact.linkedin_url }"
        class="social-media-link"
        title="linkedin"
    >
        <svg class="social-media-icon">
            <use xlink:href="#icon-linkedin-dark"></use>
        </svg>
    </a>
{/if}

{#if person.contact.twitter_url }
    <a
        href="{ person.contact.twitter_url }"
        class="social-media-link"
        title="Twitter"
    >
        <svg class="social-media-icon">
            <use xlink:href="#icon-twitter-dark"></use>
        </svg>
    </a>
{/if}

{#if person.contact.github_url}
    <a
        href="{ person.contact.github_url }"
        class="social-media-link"
        title="GitHub"
    >
        <svg class="social-media-icon">
            <use xlink:href="#icon-github-dark"></use>
        </svg>
    </a>
{/if}

{#if person.contact.facebook_url}
    <a
        href="{ person.contact.facebook_url }"
        class="social-media-link"
        title="facebook"
    >
        <svg class="social-media-icon">
            <use xlink:href="#icon-facebook-dark"></use>
        </svg>
    </a>
{/if}

{#if person.contact.instagram_url}
    <a
        href="{ person.contact.instagram_url }"
        class="social-media-link"
        title="instagram"
    >
        <svg class="social-media-icon">
            <use xlink:href="#icon-instagram-dark"></use>
        </svg>
    </a>
{/if}

{#if person.contact.youtube_url}
    <a
        href="{ person.contact.youtube_url }"
        class="social-media-link"
        title="youtube"
    >
        <svg class="social-media-icon">
            <use xlink:href="#icon-youtube-dark"></use>
        </svg>
    </a>
{/if}

{#if person.contact.behance_url}
    <a
        href="{ person.contact.behance_url }"
        class="social-media-link"
        title="behance"
    >
        <svg class="social-media-icon">
            <use xlink:href="#icon-behance-dark"></use>
        </svg>
    </a>
{/if}
