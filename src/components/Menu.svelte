<script>
    export let segment;
</script>

<style>
	nav {
		border-bottom: 1px solid rgba(255,62,0,0.1);
		font-weight: 300;
        padding: 0 1em;
        text-align: center;
	}

	ul {
		margin: 0;
		padding: 0;
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
		position: relative;
        display: inline-block;
        font-weight: bold;
	}

	.selected::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		background-color: rgb(255,62,0);
		display: block;
		bottom: -1px;
	}

	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
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

    a.buy-tickets {
        border: 1px solid;
        border-radius: 5px;
        padding: 5px 10px;
    }

    a.buy-tickets:hover {
        background: #2e3440;
        color: white;
    }
</style>

<nav class="nav-container">
    <ul>
        <li>
            <a class="with-logo" href="." title="ConFrontJS">
                <svg class="logo-confrontjs">
                    <use xlink:href="#icon-confrontjs"></use>
                </svg>
            </a>
        </li>
        <li>
            <a
                href="https://forms.gle/wVUKK5HbUEC6S9CD9"
                target="_blank"
                rel="noopener"
            >Call for papers</a>
        </li>
        <li><a rel=prefetch class='{segment === "sponsors" ? "selected" : ""}' href='sponsors'>Sponsors</a></li>
        <li><a rel=prefetch class='{segment === "agenda" ? "selected" : ""}' href='agenda'>Agenda</a></li>
        <li><a rel=prefetch class='{segment === "speakers" ? "selected" : ""}' href='speakers'>Speakers</a></li>
        <li><a rel=prefetch class='{segment === "contact" ? "selected" : ""}' href='contact'>Contact</a></li>
        <li>
            <a
                class="buy-tickets"
                href="https://evenea.pl/event/confrontjs-2019/"
                target="_blank"
                rel="noopener"
            >Buy tickets</a>
        </li>
    </ul>
</nav>
