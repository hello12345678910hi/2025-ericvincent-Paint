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
	<a href="/drawing-tool">drawing tool</a>
	<a href="/achievements">achievements</a>
	<a href="/settings">settings</a>
	<a href="/login">login</a>
	<a href="/signup">signup</a>
	<a href="/contest">contest</a>
	<a href="/profile">profile</a>
	<a href="/signup2">signup 2</a>
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