<script lang="ts">
	import { Mail, Linkedin, GithubIcon, FileText } from 'lucide-svelte';
	import { onMount } from 'svelte';

	onMount(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	});
</script>

<div class="welcome-div content-div">
	<h2 id="welcome">Hey, welcome!</h2>
</div>
<div class="introduction-div content-div">
	<h2 id="intro">
		I am Adam, a talented junior software developer trained by the top bootcamp in the UK. <br />
	</h2>
	<div class="br"></div>
	<p>
		I work with JavaScript, frontend frameworks like React and Svelte, and backend tech like Express
		and PostgreSQL.
	</p>
	<div class="br"></div>
	<p>I am looking for an entry level position in an excellent company.</p>
	<div class="br"></div>
	<p>Take a look at my portfolio and get in touch, I am always happy to chat!</p>
</div>

<br />

<div class="divider"></div>
<p class="divider-title content-div">Portfolio</p>

<div class="portfolio-grid-div content-div">
	<div class="portfolio-item-div">
		<a href="portfolio/portfolio-site">
			<div class="img-div-portfolio-item">
				<video playsinline autoplay width="75%" loop src="/portfolio-video.mov"></video>
			</div>
			<div class="text-div-portfolio-item">
				<h2>Portfolio Website</h2>
				<h3>You're on it</h3>
			</div>
		</a>
	</div>
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
				<img src="/fe-scrnsht.png" alt="" />
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
				<video id="my-vid" src="/travelog-video.mov" height="90%" autoplay loop playsinline
				></video>
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
			<h2>CV (pdf)</h2>
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
		background: linear-gradient(to right, var(--h2), var(--h1));
		-webkit-background-clip: text;
		background-clip: text;
		color: transparent;
	}
	.divider-title {
		font-family: 'Courier New', Courier, monospace;
		color: var(--subtle-grey);
	}
	.my-vid {
		pointer-events: none;
	}

	/* desktop design */
	@media only screen and (min-width: 768px) {
		.content-div {
			margin-inline: var(--desktop-margin-inline);
			margin-bottom: var(--desktop-vertical-gap);
		}
		.welcome-div {
			margin-top: var(--top-of-page-desktop-margin);
			margin-bottom: 1rem;
		}
		#welcome {
			font-size: 2rem;
		}
		.introduction-div {
			font-size: 1.5rem;
			margin-bottom: 3rem;
		}
		.br {
			margin-bottom: 0.5rem;
		}
		.divider-title {
			margin-bottom: var(--desktop-vertical-gap);
		}
		.portfolio-grid-div {
			display: grid;
			grid-template-columns: 1fr 1fr;
			grid-template-rows: auto;
			gap: 3rem;
			margin-bottom: var(--mobile-vertical-gap);
		}
		.portfolio-item-div {
			max-width: 100%;
			height: 19rem;
			overflow: hidden;
			border-radius: 1rem;
			transition: 0.15s;
			padding: 0.5rem;
		}
		.portfolio-item-div:hover {
			box-shadow: 0 0 0.5rem var(--accent-3);
		}
		.portfolio-item-div a {
			display: block;
			width: 100%;
			height: 100%;
			text-decoration: none;
		}
		.img-div-portfolio-item {
			width: 100%;
			height: 70%;
			margin-bottom: 0.5rem;
			background-color: var(--off-white-bg);
			display: flex;
			justify-content: center;
			align-items: center;
			border: 1px solid var(--border);
			border-radius: 1rem;
		}
		.img-div-portfolio-item img {
			width: 95%;
			object-fit: scale-down;
		}
		.text-div-portfolio-item h2 {
			color: var(--text);
		}
		.text-div-portfolio-item h3 {
			color: var(--h2);
		}

		/* contact part */
		.get-in-touch-h2 {
			margin-inline: 10%;
		}
		.content-item {
			margin-inline: var(--mobile-margin-inline);
			margin-bottom: var(--mobile-vertical-gap);
		}
		.contact-grid-div {
			display: grid;
			grid-template-columns: 1fr 1fr;
			grid-template-rows: 9rem 9rem;
			gap: var(--mobile-vertical-gap);
			margin-inline: 10%;
		}
		.contact-grid-item {
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			border: 1px solid var(--border);
			transition: 0.15s;
			border-radius: 0.5rem;
		}
		.contact-grid-item:hover {
			box-shadow: 0 0 0.5rem var(--accent-2);
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
			padding-bottom: 0.66rem;
		}
		#intro {
			font-weight: 500;
		}
		
	}

	/* mobile design */
	@media only screen and (max-width: 768px) {
		.br {
			margin-bottom: 0.5rem;
		}
		.content-div {
			margin-inline: var(--mobile-margin-inline);
		}
		.welcome-div {
			margin-top: 5.5rem;
			margin-bottom: 0.5rem;
		}
		.introduction-div {
			margin-bottom: 1rem;
		}
		.divider {
			margin-left: var(--mobile-margin-inline);
		}
		.divider-title {
			margin-bottom: 2rem;
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
			border-radius: 1rem;
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
			border: 1px solid var(--accent-3);
			border-radius: 1rem;
			display: flex;
			justify-content: center;
			align-items: center;
		}
		.img-div-portfolio-item img {
			width: 95%;
		}
		.text-div-portfolio-item h2 {
			color: var(--text);
		}
		.text-div-portfolio-item h3 {
			color: var(--h2);
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
			/* box-shadow: 0 0 .5rem var(--border); */
			border: 1px solid var(--border);
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
			padding-bottom: 0.66rem;
		}
		#intro {
			font-weight: 500;
		}
		#my-vid {
			pointer-events: none;
		}
	}
</style>
