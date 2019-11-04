<script>
    export let segment = '';
</script>

<style>
	nav {
        background: var(--night-color);
        overflow: hidden;
        text-align: center;
        display: flex;
        justify-content: center;
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
		display: inline-block;
        color: var(--snow-color);
        text-transform: uppercase;
        font-size: 14px;
    }

    .logo {
        padding: 0;
        height: 80px;
    }

    .logo-confrontjs {
        height: 80px;
        line-height: 80px;
        width: 80px;
        margin: 0 20px 0 0;
    }

    .hamburger-button {
        color: var(--snow-color);
        font-size: 15vw;
        line-height: 50px;
        padding: 20px;
        cursor: pointer;
        display: none;
        vertical-align: top;
        user-select: none;
    }

    .menu-list {
        margin: 15px 0 0 0;
        display: inline-block;
    }

    @media (max-width: 700px) {
        nav {
            display: block;
        }
        .logo-confrontjs {
            height: 60px;
            line-height: 60px;
        }
        .logo {
            padding: 0;
            height: 60px;
        }
        .hamburger-button {
            display: inline-block;
            padding: 0 0 0 150px;
        }
        .menu-list {
            margin: 0;
            padding: 0 0 20px 0;
            display: none;
        }
        #hamburger:checked + .menu-list {
            display: block;
        }
        #hamburger:checked + .menu-list ul li {
            display: block;
        }
    }
</style>

<nav class="nav-container">
    <a class="logo" href="/" title="ConFrontJS">
        <svg class="logo-confrontjs">
            <use xlink:href="#icon-confrontjs-light"></use>
        </svg>
    </a>

    <label for="hamburger" class="hamburger-button">≣</label>
    <input id="hamburger" class="d-none" type="checkbox"/>

    <div class="menu-list">
        <ul class="list-unstyled">
            <!-- <li>
                <a
                    href="https://forms.gle/wVUKK5HbUEC6S9CD9"
                >Call for papers</a>
            </li> -->
            <li><a rel=prefetch class='{segment === "agenda" ? "selected" : ""}' href="/agenda">Agenda</a></li>
            <li><a rel=prefetch class='{segment === "speakers" ? "selected" : ""}' href="/speakers">Speakers</a></li>
            <li><a rel=prefetch class='{segment === "venue" ? "selected" : ""}' href="/venue">Venue</a></li>
            <li><a rel=prefetch class='{segment === "sponsors" ? "selected" : ""}' href="/sponsors">Sponsors</a></li>
            <li><a rel=prefetch class='{segment === "workshop" ? "selected" : ""}' href="/workshop">Workshop</a></li>
            <!-- <li>
                <a
                    class="button-primary"
                    data-content="Be a sponsor"
                    href="https://forms.gle/bPciWY3f7RyduB6o6"
                >Be a sponsor</a>
            </li> -->
            <li>
                <a
                    class="button-primary"
                    data-content="Buy tickets"
                    href="https://evenea.pl/event/confrontjs-2019/"
                >Buy tickets</a>
            </li>
        </ul>
    </div>
</nav>
