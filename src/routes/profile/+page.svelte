<script>
	import PaintingGallery from '../../lib/PaintingGallery.svelte';
</script>

<div class="E">Recent Activity</div>

<div>
	<div class="ProfileHeader">
		<h2>Welcome back, username!</h2>
	</div>
</div>

<div class="side-by-side">
	<div class="Activity"></div>

	<div class="image">
		<img
			height="100"
			src="https://bing.com/th/id/OIP.0JeF9kf_sWPTa9HrmLIypgHaFz?w=257&h=211&c=8&rs=1&qlt=90&o=6&cb=12&dpr=1.5&pid=3.1&rm=2&adlt=strict"
			alt="...."
		/>
	</div>
</div>

<div>
	<div class="artworkSection">
		<h3>Your Latest Artwork</h3>
		<PaintingGallery limit={4} thumbnailSize="120px" filterByPainter="me" showPainter={false} />
		<a href="/yourartwork" class="view-all-link">View All Artwork</a>
	</div>
</div>

<div>
	<div class="Border"></div>
</div>

<div>
	<div class="RecentActivity">
		<h5>A list of comments you received will display here.</h5>
	</div>
</div>

<div>
	<div class="Achievements"></div>
</div>

<div>
	<div class="newPiece">
		<a href="/drawing-tool">
			<button>Click here to create new art!</button>
		</a>
	</div>
</div>

List of your friends will display here:

<div class="Border2"></div>

<div></div>

<style>
	.ProfileHeader {
		display: flex;
		justify-content: center;
	}

	.artworkSection {
		padding: 2rem;
		margin: 2rem 0;
		background-color: #f8f9fa;
		border-radius: 8px;
		text-align: center;
	}

	.artworkSection h3 {
		margin-bottom: 1.5rem;
		color: #333;
	}

	.view-all-link {
		display: inline-block;
		margin-top: 1rem;
		padding: 0.5rem 1rem;
		background-color: #007bff;
		color: white;
		text-decoration: none;
		border-radius: 4px;
		transition: background-color 0.2s;
	}

	.view-all-link:hover {
		background-color: #0056b3;
	}

	.Border {
		height: 250px;
		width: 175px;
		border: 2px solid black;
	}

	.Border {
		display: flex;
		justify-content: center;
	}

	.RecentActivity {
		display: flex;
	}

	.Achievements {
		display: flex;
		justify-content: flex-end;
	}

	.newPiece {
		display: flex;
		justify-content: center;
		align-content: center;
	}

	.newPiece button {
		padding: 1rem 2rem;
		background-color: #28a745;
		color: white;
		border: none;
		border-radius: 4px;
		cursor: pointer;
		transition: background-color 0.2s;
	}

	.newPiece button:hover {
		background-color: #1e7e34;
	}

	.Border2 {
		display: flex;
		height: 250px;
		width: 200px;
		border: 2px solid black;
	}

	.image {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.side-by-side {
		display: flex;
		justify-content: end;
	}

	.E {
		display: flex;
		margin-bottom: -150px;
	}
</style>
