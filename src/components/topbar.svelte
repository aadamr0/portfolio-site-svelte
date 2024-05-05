<script lang="ts">
	let isOpen: Boolean = false;
	function toggleOpen() {
		isOpen = !isOpen;
	}
</script>

<div id="topbar-div">
	<a href="/" class="topbar-1">
		<h1 id="logo">ADAM ROBERTS</h1>
	</a>
	<a href="/about" class="topbar-2">
		<p>About me</p>
	</a>
	<a href="/contact" class="topbar-3">
		<p>Contact/CV</p>
	</a>
</div>

<style>
	* {
		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	}
	#topbar-div {
		width: 100%;
		height: 100%;
		border-bottom: 1px solid var(--border);
		position: relative;
		display: flex;
	}

	.topbar-1 {
		flex-grow: 0;
		flex-shrink: 0;
		flex-basis: 40%;
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		border-right: 1px solid var(--border);
		text-align: center;
	}

	.topbar-1 h1 {
		font-size: 1rem;
	}

	.topbar-2 {
		flex-grow: 1;
		flex-shrink: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		border-right: 1px solid var(--border);
	}

	.topbar-3 {
		flex-grow: 1;
		flex-shrink: 0;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	#logo {
		font-family: Inter;
	}

	a {
		font-family: 'Courier New', Courier, monospace;
		text-decoration: none;
		color: var(--h2);
	}
</style>
