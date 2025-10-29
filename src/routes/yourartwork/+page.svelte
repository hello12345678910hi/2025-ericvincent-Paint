<script>
	import { onMount } from 'svelte';
	import {
		getAllPaintings,
		deletePainting,
		updatePaintingMetadata
	} from '../../lib/paintingStorage.js';

	let paintings = [];
	let loading = true;

	onMount(() => {
		loadPaintings();
	});

	function loadPaintings() {
		try {
			paintings = getAllPaintings().filter((p) => !p.painterName || p.painterName === '');
			loading = false;
		} catch (error) {
			console.error('Error loading paintings:', error);
			loading = false;
		}
	}

	function deleteSinglePainting(id, title) {
		if (confirm(`Are you sure you want to delete "${title || 'Untitled'}"?`)) {
			if (deletePainting(id)) {
				loadPaintings(); // Reload the paintings list
			} else {
				alert('Failed to delete painting. Please try again.');
			}
		}
	}

	function goToDrawingTool() {
		window.location.href = '/drawing-tool';
	}

	function formatDate(dateString) {
		return new Date(dateString).toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'short',
			day: 'numeric'
		});
	}
</script>

<div class="container">
	<div class="header">
		<h1>Your Artwork</h1>
		<button on:click={goToDrawingTool} class="create-button"> Create New Art </button>
	</div>

	{#if loading}
		<div class="loading">Loading your artwork...</div>
	{:else if paintings.length === 0}
		<div class="empty-state">
			<p>No artwork found.</p>
			<p>Start creating by clicking the "Create New Art" button above!</p>
		</div>
	{:else}
		<div class="artwork-grid">
			{#each paintings as painting (painting.id)}
				<div class="artwork-item">
					<div class="artwork-header">
						<h3>{painting.title || 'Untitled'}</h3>
						<button
							on:click={() => deleteSinglePainting(painting.id, painting.title)}
							class="delete-btn"
							title="Delete this artwork"
						>
							Delete
						</button>
					</div>

					<div class="artwork-preview">
						<img src={painting.data} alt={painting.title || 'Artwork'} />
					</div>

					<div class="artwork-info">
						{#if painting.painterName}
							<p class="painter-name">by {painting.painterName}</p>
						{/if}
						<p class="date">{formatDate(painting.createdAt)}</p>
					</div>
				</div>
			{/each}
		</div>
	{/if}
</div>

<style>
	.container {
		padding: 2rem;
		max-width: 1200px;
		margin: 0 auto;
	}

	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 2rem;
		flex-wrap: wrap;
		gap: 1rem;
	}

	h1 {
		margin: 0;
		color: #333;
	}

	.create-button {
		background-color: #007bff;
		color: white;
		border: none;
		padding: 0.75rem 1.5rem;
		border-radius: 4px;
		cursor: pointer;
		font-size: 1rem;
		transition: background-color 0.2s;
	}

	.create-button:hover {
		background-color: #0056b3;
	}

	.loading {
		text-align: center;
		padding: 2rem;
		font-size: 1.2rem;
		color: #666;
	}

	.empty-state {
		text-align: center;
		padding: 3rem;
		color: #666;
	}

	.empty-state p {
		margin: 0.5rem 0;
	}

	.artwork-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		gap: 2rem;
	}

	.artwork-item {
		border: 1px solid #ddd;
		border-radius: 8px;
		padding: 1rem;
		background-color: white;
		transition:
			transform 0.2s,
			box-shadow 0.2s;
	}

	.artwork-item:hover {
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
	}

	.artwork-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 0.5rem;
		margin-bottom: 1rem;
	}

	.artwork-header h3 {
		margin: 0;
		flex-grow: 1;
		font-size: 1.1rem;
		color: #333;
	}

	.delete-btn {
		background: gray;
		border: none;
		color: white;
		padding: 0.5rem;
		border-radius: 4px;
		cursor: pointer;
		font-size: 1rem;
		transition: background-color 0.2s;
		min-width: 40px;
		height: 40px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.delete-btn:hover {
		background-color: #c82333;
	}

	.artwork-preview {
		margin-bottom: 1rem;
		border-radius: 4px;
		overflow: hidden;
		background-color: #f8f9fa;
	}

	.artwork-preview img {
		width: 100%;
		height: 200px;
		object-fit: contain;
		display: block;
	}

	.artwork-info {
		margin-bottom: 1rem;
	}

	.painter-name {
		margin: 0.25rem 0;
		font-size: 0.9rem;
		color: #007bff;
		font-style: italic;
		font-weight: 500;
	}

	.date {
		margin: 0.25rem 0;
		font-size: 0.9rem;
		color: #666;
	}

	.artwork-actions {
		display: flex;
		gap: 0.5rem;
		flex-wrap: wrap;
	}

	.view-button {
		padding: 0.5rem 1rem;
		border: 1px solid #ddd;
		border-radius: 4px;
		background-color: white;
		cursor: pointer;
		font-size: 0.9rem;
		transition: background-color 0.2s;
	}

	.view-button:hover {
		background-color: #f8f9fa;
	}

	@media (max-width: 768px) {
		.container {
			padding: 1rem;
		}

		.artwork-grid {
			grid-template-columns: 1fr;
		}

		.header {
			flex-direction: column;
			align-items: stretch;
		}

		.artwork-actions {
			flex-direction: column;
		}
	}
</style>
