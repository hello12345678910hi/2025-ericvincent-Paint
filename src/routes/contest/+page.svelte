<script>
	// Contest data with topics and date windows
	const contests = [
		{
			id: 1,
			title: 'Autumn Landscapes',
			description: 'Capture the beauty of fall with your digital brush',
			startDate: '2025-11-01',
			endDate: '2025-11-15'
		},
		{
			id: 2,
			title: 'Portrait Challenge',
			description: 'Create expressive portraits that tell a story',
			startDate: '2025-10-15',
			endDate: '2025-10-31'
		},
		{
			id: 3,
			title: 'Abstract Dreams',
			description: 'Let your imagination flow with abstract compositions',
			startDate: '2025-11-16',
			endDate: '2025-11-30'
		},
		{
			id: 4,
			title: 'Minimalist Art',
			description: 'Express more with less - simple yet powerful designs',
			startDate: '2025-12-01',
			endDate: '2025-12-15'
		}
	];

	function formatDate(dateString) {
		return new Date(dateString).toLocaleDateString('en-US', {
			month: 'long',
			day: 'numeric',
			year: 'numeric'
		});
	}
</script>

<div class="container">
	<div class="header">
		<h1>🎨 Drawing Contests</h1>
		<p class="subtitle">Join our themed drawing challenges and showcase your creativity!</p>
	</div>

	<div class="contests-grid">
		{#each contests as contest}
			<div class="contest-card">
				<div class="contest-header">
					<h2>{contest.title}</h2>
				</div>

				<p class="description">{contest.description}</p>

				<div class="date-info">
					<div class="date-item">
						<span class="date-label">Start:</span>
						<span class="date-value">{formatDate(contest.startDate)}</span>
					</div>
					<div class="date-item">
						<span class="date-label">End:</span>
						<span class="date-value">{formatDate(contest.endDate)}</span>
					</div>
				</div>
			</div>
		{/each}
	</div>

	<div class="info-section">
		<h3>📝 How to Participate</h3>
		<ol class="participation-steps">
			<li>Choose an active contest theme above</li>
			<li>Create your artwork using our drawing tool</li>
			<li>Save your work with the contest theme in the title</li>
			<li>Share and compete with other artists!</li>
		</ol>
	</div>
</div>

<style>
	.container {
		max-width: 1000px;
		margin: 0 auto;
		padding: 2rem;
	}

	.header {
		text-align: center;
		margin-bottom: 3rem;
	}

	.header h1 {
		font-size: 2.5rem;
		color: #333;
		margin-bottom: 0.5rem;
	}

	.subtitle {
		font-size: 1.2rem;
		color: #666;
		margin: 0;
	}

	.contests-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 2rem;
		margin-bottom: 3rem;
	}

	.contest-card {
		background: white;
		border: 2px solid #e9ecef;
		border-radius: 12px;
		padding: 1.5rem;
		transition:
			transform 0.2s,
			box-shadow 0.2s;
	}

	.contest-card:hover {
		transform: translateY(-2px);
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
	}

	.contest-header {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		margin-bottom: 1rem;
		gap: 1rem;
	}

	.contest-header h2 {
		font-size: 1.4rem;
		color: #333;
		margin: 0;
		flex-grow: 1;
	}

	@keyframes pulse {
		0% {
			opacity: 1;
		}
		50% {
			opacity: 0.8;
		}
		100% {
			opacity: 1;
		}
	}

	.description {
		color: #666;
		margin-bottom: 1.5rem;
		line-height: 1.5;
	}

	.date-info {
		margin-bottom: 1.5rem;
	}

	.date-item {
		display: flex;
		justify-content: space-between;
		margin-bottom: 0.5rem;
		padding: 0.5rem;
		background: #f8f9fa;
		border-radius: 6px;
	}

	.date-label {
		font-weight: 600;
		color: #495057;
	}

	.date-value {
		color: #666;
	}

	.info-section {
		background: #f8f9fa;
		padding: 2rem;
		border-radius: 12px;
	}

	.info-section h3 {
		color: #333;
		margin-bottom: 1rem;
	}

	.participation-steps {
		list-style: decimal;
	}

	.participation-steps li {
		padding: 0.5rem 0;
		color: #666;
		position: relative;
		padding-left: 2rem;
	}
</style>
