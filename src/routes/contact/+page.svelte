<script lang="ts">
	import { Mail, Linkedin, FileText, GithubIcon } from 'lucide-svelte';
</script>

<div class="contact-title content-item">
	<h1>CV & Contact details</h1>
</div>
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
	@media only screen and (max-width: 768px) {
		h1 {
			/* margin-top: var(--top-of-page-mobile-margin); */
			margin-top: 35%;
			color: var(--h2);
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
		.contact-grid-item h2 {
			padding-bottom: .66rem;
		}
	}
</style>
