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
		<nav>
			<p id="navscreen-logo">Adam Roberts Software Developer</p>
			<a on:click={toggleOpen} href="/">Home</a>
			<a on:click={toggleOpen} href="/about">About</a>
			<a on:click={toggleOpen} href="/contact">Contact</a>
		</nav>
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

	nav {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: #fff;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		gap: 3rem;
	}

	#navscreen-logo {
		position: absolute;
		top: 10%;
		left: 3%;
		font-size: 1.5rem;
		font-family: Inter;
		font-weight: bold;
		color: var(--h1);
	}

	a {
		font-family: 'Courier New', Courier, monospace;
		font-size: 2rem;
		text-decoration: none;
		color: var(--h2);
		border-bottom: 1px solid var(--accent-2);
		border-radius: 10%;
		padding: 1rem;
		padding-bottom: 0.5rem;
		position: relative;
		top: 5%;
	}
</style>
