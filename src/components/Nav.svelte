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
        height: 50px;
        width: 50px;
        vertical-align: middle;
    }
</style>

<nav class="nav-container">
	<ul>
		<li>
            <a class="with-logo" href=".">
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
        <li>
            <a
                href="https://evenea.pl/event/confrontjs-2019/"
                target="_blank"
                rel="noopener"
            >Tickets</a>
        </li>
		<li><a rel=prefetch class='{segment === "sponsors" ? "selected" : ""}' href='sponsors'>Sponsors</a></li>
		<li><a rel=prefetch class='{segment === "agenda" ? "selected" : ""}' href='agenda'>Agenda (WIP)</a></li>
		<li><a rel=prefetch class='{segment === "speakers" ? "selected" : ""}' href='speakers'>Speakers (WIP)</a></li>
	</ul>
</nav>
