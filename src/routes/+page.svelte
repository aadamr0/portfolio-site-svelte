<div class="welcome-div content-div">
	<h2>Hey, welcome!</h2>
</div>
<div class="introduction-div content-div">
	<h2>I am Adam, a talented junior software developer.</h2>
	<h2>I work with [tech stack here] and I'm looking for an entry level position.</h2>
</div>

<br />

<div class="divider"></div>
<p class="divider-title content-div">Portfolio</p>

<div class="portfolio-grid-div content-div">
	<div class="portfolio-item-div">
		<a href="portfolio/nc-news-api">
			<div class="img-div-portfolio-item">
				<img src="https://placehold.co/600x400" alt="placeholder" />
			</div>
			<div class="text-div-portfolio-item">
				<h2>NC News API</h2>
				<h3>About</h3>
			</div>
		</a>
	</div>
	<div class="portfolio-item-div">
		<a href="portfolio/nc-news-app">
			<div class="img-div-portfolio-item">
				<img src="https://placehold.co/600x400" alt="placeholder" />
			</div>
			<div class="text-div-portfolio-item">
				<h2>NC News App</h2>
				<h3>About</h3>
			</div>
		</a>
	</div>
	<div class="portfolio-item-div">
		<a href="portfolio/travelog">
			<div class="img-div-portfolio-item">
				<img src="https://placehold.co/600x400" alt="placeholder" />
			</div>
			<div class="text-div-portfolio-item">
				<h2>Travelog</h2>
				<h3>About</h3>
			</div>
		</a>
	</div>
</div>

<style>
	* {
		font-family: Inter;
	}
	h2 {
		background: linear-gradient(45deg, var(--h2), var(--h1));
		-webkit-background-clip: text;
		background-clip: text;
		color: transparent;
	}
	.divider-title {
		font-family: 'Courier New', Courier, monospace;
		color: var(--subtle-grey);
	}

	/* mobile design */
	@media only screen and (max-width: 768px) {
		.content-div {
			margin-inline: var(--mobile-margin-inline);
		}
		.welcome-div {
			margin-top: var(--top-of-page-mobile-margin);
		}
		.divider {
			margin-left: var(--mobile-margin-inline);
		}
		.divider-title {
			margin-bottom: var(--mobile-vertical-gap);
		}
		.portfolio-grid-div {
			display: grid;
			grid-template-columns: auto;
			grid-template-rows: auto;
			gap: 3rem;
			margin-bottom: var(--mobile-vertical-gap);
		}
		.portfolio-item-div {
			width: 100%;
		}
		.portfolio-item-div a {
			display: block;
			width: 100%;
			height: 100%;
			text-decoration: none;
		}
		.img-div-portfolio-item {
			width: 100%;
			height: 13rem;
			margin-bottom: 0.5rem;
			background-color: var(--off-white-bg);
			box-shadow: 0 0.25rem 0.25rem 0 var(--border);
			display: flex;
			justify-content: center;
			align-items: center;
		}
		.img-div-portfolio-item img {
			height: 50%;
		}
		.text-div-portfolio-item h2 {
			color: var(--h2);
		}
		.text-div-portfolio-item h3 {
			color: var(--subtle-grey);
		}
	}
</style>
