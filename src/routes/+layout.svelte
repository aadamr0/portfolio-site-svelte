<script lang="ts">
	import './globals.css';

	import Topbar from '../components/topbar.svelte';
	import Sidebar from '../components/sidebar.svelte';

	import { fade } from 'svelte/transition';
	export let data;
	const transitionSpeed = 125;
	const transitionPause = 125;
</script>

<div id="app">
	<div class="topbar-layout-div"><Topbar /></div>
	<div class="sidebar-layout-div"><Sidebar /></div>
	<div class="content-layout-div">
		<div class="content-column-div">
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
				<p>C 2024</p>
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
		overflow: scroll;
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
		flex-basis: 18%;
	}

	.topbar-layout-div {
		display: none;
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
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 10%;
		}

		footer {
			margin-top: auto;
			border-top: 1px solid var(--border);
			display: flex;
			justify-content: space-between;
		}
		footer p {
			color: var(--subtle-grey);
			font-size: .8rem;
		}
	}
</style>
