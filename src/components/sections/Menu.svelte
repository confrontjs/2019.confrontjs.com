<script>
    export let segment = '';
</script>

<style>
	.nav-container {
        background: var(--night-color);
        overflow: hidden;
        text-align: center;
        position: relative;
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

	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: inline-block;
        /* color: var(--snow-color); */
        color: rgba(255, 255, 255, 0.9);
        text-transform: uppercase;
        font-size: 14px;
    }

    li:hover a, .selected {
        text-shadow: 0px 0px 1px #fff;
        color: rgba(255, 255, 255, 1);
        /* font-weight: bold; */
	}

    .logo {
        padding: 0;
        height: 80px;
        float: left;
        z-index: 20;
        position: relative;
    }

    .logo-confrontjs {
        height: 80px;
        line-height: 80px;
        width: 80px;
        margin-top: -2px;
    }

    .button-hamburger {
        color: var(--snow-color);
        font-size: 70px;
        line-height: 0px;
        position: absolute;
        top: 34px;
        right: 8px;
        /* padding: 20px; */
        cursor: pointer;
        display: block;
        user-select: none;
    }

    .menu-list {
        display: none;
        width: 100%;
    }

    .button-buyTickets {
        position: absolute;
        right: 64px;
        top: 20px;
        z-index: 20;
    }

    /*  */
    
    #hamburger:checked + .menu-list {
        display: block;
        width: 100%;
        margin-top: 80px;
        margin-bottom: 20px;
    }
    
    #hamburger:checked + .menu-list ul li {
        display: block;
    }

    /*  */

    @media (min-width: 360px) {
        .button-buyTickets {
            right: 80px;
        }
    }

    @media (min-width: 768px) {

        #hamburger:checked + .menu-list {
            display: inline-block;
            width: auto;
            margin-top: 16px;
            margin-bottom: 0;
        }

        #hamburger:checked + .menu-list ul li {
            display: inline-block;
        }

        .menu-list {
            display: inline-block;
            width: auto;
            margin-top: 16px;
            margin-right: 140px;
            float: right;
        }

        .button-buyTickets {
            right: 15px;
        }

        .button-hamburger {
            display: none;
        }

    }

    @media (min-width: 991px) {
        .menu-list {
            margin-right: 330px;
            position: absolute;
            margin-left: auto;
            margin-right: auto;
            left: 0; 
            right: 0;
            z-index: 9;

        }
    }
    
</style>

<div class="nav-container">

    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <a class="logo" href="/" title="ConFrontJS">
                    <svg class="logo-confrontjs">
                        <use xlink:href="#icon-confrontjs-light"></use>
                    </svg>
                </a>

                <a class="button-primary button-buyTickets" data-content="Buy tickets" href="https://evenea.pl/event/confrontjs-2019/">
                    Buy tickets
                </a>

                <label for="hamburger" class="button-hamburger">≣</label>
                <input id="hamburger" class="d-none" type="checkbox"/>
                
                <nav class="menu-list">
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
                            <a class="button-primary" data-content="Be a sponsor" href="https://forms.gle/bPciWY3f7RyduB6o6">
                                Be a sponsor
                            </a>
                        </li> -->
                        <!-- <li>
                            <a class="button-primary" data-content="Buy tickets" href="https://evenea.pl/event/confrontjs-2019/">
                                Buy tickets
                            </a>
                        </li> -->
                    </ul>
                </nav>

            </div>
        </div>
    </div>
</div>
