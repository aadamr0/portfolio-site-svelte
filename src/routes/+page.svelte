<script lang="ts">
	import { Mail, Linkedin, GithubIcon, FileText } from 'lucide-svelte';
</script>

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
			<div class="img-div-portfolio-item api-img">
				<img src="/API-scrnprnt.png" alt="Code API" />
			</div>
			<div class="text-div-portfolio-item">
				<h2>API - NC News</h2>
				<h3>Node.js API</h3>
			</div>
		</a>
	</div>
	<div class="portfolio-item-div">
		<a href="portfolio/nc-news-app">
			<div class="img-div-portfolio-item app-video">
				<img src="/fe-scrnsht.png" alt="">
			</div>
			<div class="text-div-portfolio-item">
				<h2>Web App - NC News</h2>
				<h3>A dynamic React.js web app built off the NC News API</h3>
			</div>
		</a>
	</div>
	<div class="portfolio-item-div">
		<a href="portfolio/travelog">
			<div class="img-div-portfolio-item">
				<video src="/travelog-video.mov" height="100%" autoplay loop></video>
			</div>
			<div class="text-div-portfolio-item">
				<h2>Mobile App - Travelog</h2>
				<h3>A React Native jounral/travel app.</h3>
			</div>
		</a>
	</div>
</div>
<h1 class="get-in-touch-h2 content-div">Get in touch!</h1>
<div class="contact-grid-div content-item">
	<div class="email-grid-item contact-grid-item">
		<a href="mailto: adamb.0@outlook.com">
			<h2>Email</h2>
			<div class="colour-3"><Mail size={50} /></div>
		</a>
	</div>
	<div class="linkedin-grid-item contact-grid-item">
		<a target="_blank" href="https://www.linkedin.com/in/adamj-roberts/">
			<h2>LinkedIn</h2>
			<div class="colour-3"><Linkedin size={50} /></div>
		</a>
	</div>
	<div class="github-grid-item contact-grid-item">
		<a target="_blank" href="https://github.com/aadamr0">
			<h2>GitHub</h2>
			<div class="colour-3"><GithubIcon size={50} /></div>
		</a>
	</div>
	<div class="CV-grid-item contact-grid-item">
		<a download href="/Adam Roberts Junior Software Developer.pdf">
			<h2>CV</h2>
			<div class="colour-3"><FileText size={50} /></div>
		</a>
	</div>
</div>

<style>
	* {
		font-family: Inter;
	}
	h1 {
		color: var(--h1);
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

	.portfolio-thumb-title {
		color: red;
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
			overflow: hidden;
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
			box-shadow: 0 0rem .5rem 0 var(--accent-3);
			display: flex;
			justify-content: center;
			align-items: center;
		}
		.img-div-portfolio-item img {
			height: 80%;
		}
		.text-div-portfolio-item h2 {
			color: var(--h2);
		}
		.text-div-portfolio-item h3 {
			color: var(--subtle-grey);
		}

		/* contact part */
		.content-item {
			margin-inline: var(--mobile-margin-inline);
			margin-bottom: var(--mobile-vertical-gap);
		}
		.contact-grid-div {
			display: grid;
			grid-template-columns: 1fr 1fr;
			grid-template-rows: 9rem 9rem;
			gap: var(--mobile-vertical-gap);
		}
		.contact-grid-item {
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			box-shadow: 0 0 0.5rem 0.25rem var(--border);
			border-radius: 0.5rem;
		}
		a {
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			text-decoration: none;
			width: 100%;
			height: 100%;
			color: var(--h1);
		}
		.colour-3 {
			color: var(--accent-3);
		}
		.get-in-touch-h2 {
			margin-bottom: 1rem;
		}
		.contact-grid-item h2 {
			padding-bottom: .66rem;
		}
	}
</style>
