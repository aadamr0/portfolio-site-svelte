<script lang="ts">
	import Navscreen from './navscreen.svelte';

	let isOpen: Boolean = false;
	function toggleOpen() {
		isOpen = !isOpen;
	}
</script>

<div id="topbar-div">
	<p id="logo">Logo</p>
	<button on:click={toggleOpen} class="open-btn">Open button</button>

	<div class:open={isOpen} class="navscreen-div">
		<Navscreen />
		<button on:click={toggleOpen} class="close-btn">Close button</button>
	</div>
</div>

<style>
	#topbar-div {
		width: 100%;
		height: 100%;
		border-bottom: 1px solid var(--border);
		position: relative;

		--fade-time: 0.25s;
	}

	#logo {
		font-family: Inter;
		position: absolute;
		top: 35%;
		left: 5%;
	}

	.open-btn {
		position: absolute;
		top: 35%;
		right: 5%;
	}

	.close-btn {
		position: fixed;
		top: 3%;
		right: 3%;
	}

	.navscreen-div {
		position: fixed;
		visibility: hidden;
		opacity: 0;
		transition: var(--fade-time);
	}

	.open {
		visibility: visible;
		opacity: 1;
	}
</style>
