<script lang="ts">
	export let data;
	const project = data.project;
	import { onMount } from 'svelte';
</script>

<div class="back-btn content-item">
	<a href="/" class="back-a">Go back</a>
</div>
<div class="title-div content-item">
	<h1>{project.title}</h1>
</div>
<div class="project-media-div content-item">
	{#if project.mediaType === 'img'}
		<img class="project-media" src={project.mediaUrl} alt="" />
	{:else}
		<video id="vid" playsinline height="102%" autoplay loop src={project.mediaUrl}
			><track kind="captions" /></video
		>
	{/if}
</div>
<div class="project-description content-item">
	<p>{project.description}</p>
</div>
<div class="links-div content-item">
	<ul>
		{#if project.links.GitHub}
			<li>
				<a target="_blank" href={project.links.GitHub}>GitHub repo</a>
			</li>
		{/if}
		{#if project.links.Demo}
			<li>
				<a target="_blank" href={project.links.Demo}>Demo</a>
			</li>
		{/if}
	</ul>
</div>
<div class="tech-stack-div content-item">
	<p>Tech stack: {project.techStack}</p>
</div>

<style>
	/* desktop */
	@media only screen and (min-width: 768px) {
		h1 {
			color: var(--h1);
		}
		.back-btn {
			margin-top: 4rem;
		}
		a {
			transition-duration: 0.15s;
			color: var(--accent-3);
			padding: 0.5rem;
			border-radius: 0.5rem;
		}
		a:hover {
			box-shadow: 0 0 0.5rem var(--accent-2);
		}
		li {
			padding-block: 0.5rem;
		}
		ul {
			list-style: disc;
			list-style-position: inside;
		}
		.content-item {
			margin-inline: var(--desktop-margin-inline);
			margin-bottom: var(--mobile-vertical-gap);
		}
		.project-media-div {
			box-shadow: 0 0 0.45rem 0.15rem var(--border);
			border-radius: 1rem;
			height: 17rem;
			overflow: clip;
			display: flex;
			justify-content: center;
			align-items: center;
		}
		.project-media-div img {
			object-fit: contain;
			height: 100%;
			width: 100%;
		}
		#vid {
			pointer-events: none;
		}
	}

	/* mobile */
	@media only screen and (max-width: 768px) {
		h1 {
			color: var(--h1);
		}
		.back-btn {
			margin-top: var(--top-of-page-mobile-margin);
		}
		a {
			color: var(--accent-3);
			padding: 0.5rem;
		}
		ul {
			list-style: disc;
			list-style-position: inside;
		}
		.content-item {
			margin-inline: var(--mobile-margin-inline);
			margin-bottom: var(--mobile-vertical-gap);
		}
		.project-media-div {
			box-shadow: 0 0 0.45rem 0.15rem var(--border);
			border-radius: 1rem;
			height: 17rem;
			overflow: clip;
			display: flex;
			justify-content: center;
			align-items: center;
		}
		.project-media-div img {
			object-fit: contain;
			height: 100%;
			width: 100%;
		}
		#vid {
			pointer-events: none;
		}
	}
</style>
