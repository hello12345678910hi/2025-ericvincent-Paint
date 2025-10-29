<script>
	import Canvas from '../../lib/Canvas.svelte';
	import Palette from '../../lib/Palette.svelte';
	import {
		savePainting as saveToStorage,
		generatePaintingId,
		getAllPaintings
	} from '../../lib/paintingStorage.js';

	const colors = ['#d58141', '#d7c44c', '#4fa9cc', '#3f8d27'];
	const background = '#fff';

	let color = colors[0];
	const paletteColor = color;
	let canvas;
	let saveStatus = '';
	let paintingTitle = '';
	let painterName = '';

	// Function to save the current painting
	async function saveCurrentPainting() {
		if (!canvas) {
			saveStatus = 'Error: Canvas not available';
			return;
		}

		const canvasData = canvas.getCanvasData();
		if (!canvasData) {
			saveStatus = 'Error: No drawing data to save';
			return;
		}

		const paintingId = generatePaintingId();
		const metadata = {
			title: paintingTitle || `Painting ${new Date().toLocaleDateString()}`,
			painterName: painterName,
			colors: colors,
			background: background
		};

		const success = saveToStorage(paintingId, canvasData, metadata);

		if (success) {
			saveStatus = 'Painting saved successfully!';
			paintingTitle = ''; // Clear the title input
			painterName = ''; // Clear the name input
			setTimeout(() => {
				saveStatus = '';
			}, 3000);
		} else {
			saveStatus = 'Error saving painting';
		}
	}

	// Function to exit drawing board
	function exitDrawingBoard() {
		// Navigate back or close the drawing tool
		if (confirm('Are you sure you want to exit? Any unsaved work will be lost.')) {
			window.history.back();
		}
	}
</script>

<!-- Title and Name inputs for saving -->
<div class="save-section">
	<div class="input-row">
		<input
			type="text"
			bind:value={paintingTitle}
			placeholder="Enter painting title (optional)"
			class="title-input"
		/>
		<input
			type="text"
			bind:value={painterName}
			placeholder="Enter your name (optional)"
			class="name-input"
		/>
	</div>
	{#if saveStatus}
		<p
			class="save-status"
			class:success={saveStatus.includes('successfully')}
			class:error={saveStatus.includes('Error')}
		>
			{saveStatus}
		</p>
	{/if}
</div>

<main>
	<Canvas {color} {background} bind:this={canvas} />
	<Palette
		{paletteColor}
		{colors}
		{background}
		on:color={({ detail }) => {
			color = detail.color;
		}}
	/>
</main>

<div class="button-container">
	<button on:click={exitDrawingBoard} class="secondary-button">Exit Drawing Board</button>
</div>

<div class="button-container">
	<button on:click={saveCurrentPainting} class="save-button">Save your work</button>
</div>

<style>
	:global(.visually-hidden:not(:focus):not(:active)) {
		clip: rect(0 0 0 0);
		clip-path: inset(50%);
		height: 1px;
		width: 1px;
		overflow: hidden;
		position: absolute;
		white-space: nowrap;
	}

	.save-section {
		padding: 1rem;
		text-align: center;
	}

	.input-row {
		display: flex;
		gap: 1rem;
		justify-content: center;
		flex-wrap: wrap;
		margin-bottom: 0.5rem;
	}

	.title-input,
	.name-input {
		padding: 0.5rem;
		border: 1px solid #ccc;
		border-radius: 4px;
		font-size: 1rem;
		width: 100%;
		max-width: 200px;
		min-width: 150px;
	}

	.save-status {
		margin: 0.5rem 0;
		padding: 0.5rem;
		border-radius: 4px;
		font-weight: bold;
	}

	.save-status.success {
		background-color: #d4edda;
		color: #155724;
		border: 1px solid #c3e6cb;
	}

	.save-status.error {
		background-color: #f8d7da;
		color: #721c24;
		border: 1px solid #f5c6cb;
	}

	main {
		background-color: #cdcdcd;
		display: flex;
		flex-direction: column;
		gap: 0.5rem 0;
	}

	main :global(canvas) {
		align-self: center;
	}

	.button-container {
		padding: 0.5rem;
		text-align: center;
	}

	button {
		padding: 0.75rem 1.5rem;
		font-size: 1rem;
		border: none;
		border-radius: 4px;
		cursor: pointer;
		transition: background-color 0.2s;
		margin: 0.25rem;
		min-width: 150px;
	}

	.secondary-button {
		background-color: #6c757d;
		color: white;
	}

	.secondary-button:hover {
		background-color: #545b62;
	}

	.save-button {
		background-color: #28a745;
		color: white;
	}

	.save-button:hover {
		background-color: #1e7e34;
	}

	@media (max-width: 768px) {
		.input-row {
			flex-direction: column;
			align-items: center;
		}

		.title-input,
		.name-input {
			max-width: 250px;
		}
	}
</style>
