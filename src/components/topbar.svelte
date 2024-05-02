<script lang="ts">
	let isOpen: Boolean = false;
	function toggleOpen() {
		isOpen = !isOpen;
	}
</script>

<div id="topbar-div">
	<a href="/" class="topbar-1">
		<p id="logo">Logo</p>
	</a>
	<a href="/about" class="topbar-2">
		<p>about</p>
	</a>
	<a href="/contact" class="topbar-3">
		<p>CV & contact</p>
	</a>
</div>

<style>
	#topbar-div {
		width: 100%;
		height: 100%;
		/* border-bottom: 1px solid var(--border); */
		background: linear-gradient(
			to bottom,
			rgba(256, 256, 256, 1),
			rgba(256, 256, 256, 0.9),
			rgba(256, 256, 256, 0)
		);
		position: relative;
		display: flex;
	}

	.topbar-1 {
		flex-grow: 0;
		flex-shrink: 0;
		flex-basis: 40%;
	}

	.topbar-2 {
		flex-grow: 1;
		flex-shrink: 0;
	}

	.topbar-3 {
		flex-grow: 1;
		flex-shrink: 0;
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
