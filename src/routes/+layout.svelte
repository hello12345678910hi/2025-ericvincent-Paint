<script>
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="nav">
	<a href="/home">home</a>
	<a href="/drawing-tool">drawing tool</a>
	<a href="/achievements">achievements</a>
	<a href="/settings">settings</a>
	<a href="/login">login</a>
	<a href="/profile">profile</a>
	<a href="/yourartwork">artwork</a>
</div>

{@render children?.()}

<style>
	.nav {
		display: flex;
		gap: 1rem;
		padding: 1rem;
		background-color: lightgray;
	}
</style>