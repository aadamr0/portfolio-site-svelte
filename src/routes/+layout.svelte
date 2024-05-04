<script lang="ts">
	import './globals.css';

	import Topbar from '../components/topbar.svelte';
	import Sidebar from '../components/sidebar.svelte';

	import { fade } from 'svelte/transition';
	import { onNavigate } from '$app/navigation';
	export let data;
	const transitionSpeed = 125;
	const transitionPause = 125;

	import { page } from '$app/stores';
	let content;

	onNavigate(({ to }) => {
		const currentRoute = $page.url.pathname;
		setTimeout(() => {
			const nextRoute = to?.route.id;
			if (currentRoute !== nextRoute) content.scrollTop = 0;
		}, transitionSpeed);
	});
</script>

<div id="app">
	<div class="topbar-layout-div"><Topbar /></div>
	<div class="sidebar-layout-div"><Sidebar /></div>
	<div class="content-layout-div">
		<div bind:this={content} class="content-column-div">
			{#key data}
				<div
					in:fade={{ duration: transitionSpeed, delay: transitionSpeed + transitionPause }}
					out:fade={{ duration: transitionSpeed }}
				>
					<slot />
				</div>
			{/key}
			<footer>
				<p>Adam Roberts</p>
				<p>&copy 2024</p>
			</footer>
		</div>
	</div>
</div>

<style>
	#app {
		display: flex;
	}

	.content-layout-div {
		height: 100%;
		width: 100%;
		overflow: clip;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.content-column-div {
		height: 100%;
		display: flex;
		flex-direction: column;
	}

	/* desktop */
	.sidebar-layout-div {
		display: block;
		flex-grow: 0;
		flex-shrink: 0;
		flex-basis: 17rem;
	}

	.topbar-layout-div {
		display: none;
	}
	/* desktop */
	@media only screen and (min-width: 768px) {
		.content-column-div {
			box-shadow: 0 0 3rem var(--border);
			overflow: scroll;
			flex-grow: 0;
			flex-shrink: 0;
			flex-basis: 75%;
		}
		footer {
			margin-top: auto;
			border-top: 1px solid var(--border);
			display: flex;
			justify-content: space-between;
		}
		footer p {
			color: var(--subtle-grey);
			font-size: 1rem;
		}
	}

	/* mobile */
	@media only screen and (max-width: 768px) {
		#app {
			flex-direction: column;
		}

		.sidebar-layout-div {
			display: none;
		}

		.topbar-layout-div {
			display: block;
			position: fixed;
			top: 0;
			left: 0;
			z-index: 1000;
			width: 100%;
			height: 9%;
			background-color: white;
			box-shadow: 0 0 1rem -.5rem var(--h2);

		}

		.content-column-div {
			overflow: scroll;
		}

		footer {
			margin-top: auto;
			border-top: 1px solid var(--border);
			display: flex;
			justify-content: space-between;
		}
		footer p {
			color: var(--subtle-grey);
			font-size: 0.8rem;
		}
	}
</style>
