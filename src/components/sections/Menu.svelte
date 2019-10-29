<script>
    export let segment = '';
</script>

<style>
	nav {
        background: var(--night-color);
	}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: inline-block;
	}

	.selected {
        font-weight: bold;
	}

	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
        color: var(--snow-color);
        text-transform: uppercase;
        font-size: 14px;
    }

    a.with-logo {
        margin: 0;
        padding: 0;
    }

    .logo-confrontjs {
        height: 76px;
        width: 76px;
        vertical-align: middle;
    }

    @media (max-width: 480px) {
        nav {
            padding: 0 0 20px 0;
        }
    }
</style>

<nav class="nav-container text-center">
    <ul class="list-unstyled">
        <li>
            <a class="with-logo" href="/" title="ConFrontJS">
                <svg class="logo-confrontjs">
                    <use xlink:href="#icon-confrontjs-light"></use>
                </svg>
            </a>
        </li>
        <!-- <li>
            <a
                href="https://forms.gle/wVUKK5HbUEC6S9CD9"
            >Call for papers</a>
        </li> -->
        <li><a rel=prefetch class='{segment === "agenda" ? "selected" : ""}' href="/agenda">Agenda</a></li>
        <li><a rel=prefetch class='{segment === "speakers" ? "selected" : ""}' href="speakers">Speakers</a></li>
        <li><a rel=prefetch class='{segment === "venue" ? "selected" : ""}' href="venue">Venue</a></li>
        <li><a rel=prefetch class='{segment === "sponsors" ? "selected" : ""}' href="sponsors">Sponsors</a></li>
        <li><a rel=prefetch class='{segment === "workshop" ? "selected" : ""}' href="workshop">Workshop</a></li>
        <!-- <li>
            <a
                class="button-primary"
                href="https://forms.gle/bPciWY3f7RyduB6o6"
            >Be a sponsor</a>
        </li> -->
        <li>
            <a
                class="button-primary"
                href="https://evenea.pl/event/confrontjs-2019/"
            >Buy tickets</a>
        </li>
    </ul>
</nav>
