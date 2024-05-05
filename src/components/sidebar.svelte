<script lang="ts">
	import { Mail, Linkedin, FileText, GithubIcon } from 'lucide-svelte';
</script>

<div class="sidebar-div">
	<div class="sidebar-top-div">
		<p id="logo-s">ADAM ROBERTS</p>
		<p>Junior Software Developer</p>
	</div>
	<div class="sidebar-mid-div">
		<p class="sidebar-title">Go to</p>
		<ul>
			<li><a href="/">Home / Portfolio</a></li>
			<li><a href="/about">About me</a></li>
		</ul>
	</div>
	<div class="sidebar-bottom-div">
		<p class="sidebar-title">Contact details</p>
		<ul>
			<li><a href="mailto: adamb.0@outlook.com"><Mail /> Email</a></li>
			<li>
				<a download href="/Adam Roberts Junior Software Developer.pdf"><FileText /> CV (pdf)</a>
			</li>
			<li>
				<a target="_blank" href="https://www.linkedin.com/in/adamj-roberts/"
					><Linkedin /> LinkedIn
				</a>
			</li>
			<li><a target="_blank" href="https://github.com/aadamr0"><GithubIcon /> GitHub </a></li>
		</ul>
	</div>
</div>

<style>
	.sidebar-div {
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;
		border-right: 1px solid var(--border);
	}
	.sidebar-top-div {
		flex-grow: 0;
		flex-shrink: 0;
		flex-basis: 26%;
		border-bottom: 1px solid var(--border);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.sidebar-top-div p {
		font-family: Inter;
	}
	#logo-s {
		font-weight: 700;
	}
	.sidebar-mid-div {
		flex-grow: 0;
		flex-shrink: 0;
		flex-basis: 37%;
		border-bottom: 1px solid var(--border);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.sidebar-bottom-div {
		flex-grow: 0;
		flex-shrink: 0;
		flex-basis: 37%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	ul {
		width: 11rem;
		left: 50%;
		text-align: center;
		padding-left: 0.5rem;
		border-left: 1px solid var(--accent-2);
	}
	a {
		text-decoration: none;
		color: var(--text);
		display: flex;
		gap: 0.25rem;
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
	}
	li {
		list-style: none;
		/* padding-block: .3rem; */
		height: 2rem;
		width: 90%;
		transition: 0.15s;
		border-radius: 0.25rem;
	}
	li:hover {
		padding-left: 0.33rem;
		box-shadow: 0 0 0.5rem var(--accent-2);
	}
	.sidebar-title {
		margin-bottom: 1.5rem;
		font-family: 'Courier New', Courier, monospace;
	}
</style>
