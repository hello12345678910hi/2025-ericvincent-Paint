<script>
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="nav">
	<a href="/">home</a>
	<a href="/drawing-tool">draw</a>
	<a href="/contest">contest</a>
	<a href="/yourartwork">my artwork</a>
	<div class="sep"></div>
	<a href="/login">login</a>
</div>

{@render children?.()}

<style>
	.nav {
		display: flex;
		gap: 1rem;
		padding: 1rem;
		background-color: gray;
	}

	.nav a {
		text-decoration: none;
		text-transform: uppercase;
		color: white;
		font-family: Verdana, Geneva, Tahoma, sans-serif;
		font-weight: bold;
	}
	.sep {
		flex-grow: 1;
	}
</style>
