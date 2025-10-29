<script>
	import PaintingGallery from '../lib/PaintingGallery.svelte';
</script>

<!-- Gallery -->
<div>
	<div class="welcome">
		<h1>Welcome back!</h1>
	</div>
</div>

<div>
	<div class="recent-work-section">
		<p>Here are a list of other cool drawings people like you made:</p>
		<PaintingGallery />
	</div>
</div>

<div>
	<div class="hmpage">
		<a href="/drawing-tool">
			<button>Create your artwork</button>
		</a>
	</div>
</div>

<style>
	.welcome {
		display: flex;
		justify-content: center;
	}

	.recent-work-section {
		padding: 2rem;
		margin: 2rem 0;
		background-color: #f8f9fa;
		border-radius: 8px;
		text-align: center;
	}

	.recent-work-section h2 {
		margin-bottom: 1.5rem;
		color: #333;
	}

	.hmpage {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.hmpage button {
		padding: 1rem 2rem;
		font-size: 1.1rem;
		background-color: #28a745;
		color: white;
		border: none;
		border-radius: 4px;
		cursor: pointer;
		transition: background-color 0.2s;
	}

	.hmpage button:hover {
		background-color: #1e7e34;
	}
</style>
