<script>
	import { onMount } from 'svelte';
	import { getAllPaintings, getPaintingsByPainter } from './paintingStorage.js';

	export let limit = null; // Optional: limit number of paintings to show
	export let showTitle = true;
	export let showDate = true;
	export let showPainter = true; // New prop to show painter name
	export let filterByPainter = null; // Optional: filter by specific painter name
	export let thumbnailSize = '150px';

	let paintings = [];
	let loading = true;

	onMount(() => {
		loadPaintings();
	});

	function loadPaintings() {
		try {
			let allPaintings;
			if (filterByPainter) {
				allPaintings = getPaintingsByPainter(filterByPainter);
			} else {
				allPaintings = getAllPaintings();
			}

			if (limit && limit > 0) {
				allPaintings = allPaintings.slice(0, limit);
			}
			paintings = allPaintings;
			loading = false;
		} catch (error) {
			console.error('Error loading paintings:', error);
			loading = false;
		}
	}

	function formatDate(dateString) {
		return new Date(dateString).toLocaleDateString('en-US', {
			month: 'short',
			day: 'numeric',
			year: 'numeric'
		});
	}
</script>

<div class="gallery">
	{#if loading}
		<div class="loading">Loading artwork...</div>
	{:else if paintings.length === 0}
		<div class="empty">No artwork to display</div>
	{:else}
		<div class="gallery-grid">
			{#each paintings as painting (painting.id)}
				<div class="gallery-item">
					<div class="thumbnail" style="width: {thumbnailSize}; height: {thumbnailSize};">
						<img src={painting.data} alt={painting.title || 'Artwork'} />
					</div>
					{#if showTitle}
						<h4 class="painting-title">{painting.title || 'Untitled'}</h4>
					{/if}
					{#if showPainter && painting.painterName}
						<p class="painter-name">by {painting.painterName}</p>
					{/if}
					{#if showDate}
						<p class="painting-date">{formatDate(painting.createdAt)}</p>
					{/if}
				</div>
			{/each}
		</div>
	{/if}
</div>

<style>
	.gallery {
		width: 100%;
	}

	.loading,
	.empty {
		text-align: center;
		padding: 2rem;
		color: #666;
		font-style: italic;
	}

	.gallery-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
		gap: 1rem;
	}

	.gallery-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
	}

	.thumbnail {
		border-radius: 8px;
		overflow: hidden;
		background-color: #f8f9fa;
		border: 1px solid #ddd;
		transition: transform 0.2s;
	}

	.thumbnail:hover {
		transform: scale(1.05);
	}

	.thumbnail img {
		width: 100%;
		height: 100%;
		object-fit: contain;
		display: block;
	}

	.painting-title {
		margin: 0.5rem 0 0.25rem 0;
		font-size: 0.9rem;
		font-weight: 600;
		color: #333;
		line-height: 1.2;
	}

	.painter-name {
		margin: 0 0 0.25rem 0;
		font-size: 0.8rem;
		color: #007bff;
		font-style: italic;
	}

	.painting-date {
		margin: 0;
		font-size: 0.8rem;
		color: #666;
	}

	@media (max-width: 768px) {
		.gallery-grid {
			grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
			gap: 0.75rem;
		}

		.painting-title {
			font-size: 0.8rem;
		}

		.painter-name {
			font-size: 0.7rem;
		}

		.painting-date {
			font-size: 0.7rem;
		}
	}
</style>
