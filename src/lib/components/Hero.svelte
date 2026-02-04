<script>
	import { base } from '$app/paths';

	const technologies = [
		{ name: 'C++', icon: 'cpp.svg' },
		{ name: 'Python', icon: 'python.svg' },
		{ name: 'TypeScript', icon: 'typescript.svg' },
		{ name: 'CUDA', icon: 'cuda.svg' },
		{ name: 'Linux', icon: 'linux.svg' },
		{ name: 'Docker', icon: 'docker.svg' },
		{ name: 'PyTorch', icon: 'pytorch.svg' },
		{ name: 'OpenCV', icon: 'opencv.svg' },
		{ name: 'Scikit-Learn', icon: 'scikit-learn.svg' },
		{ name: 'React/Expo', icon: 'react.svg' },
		{ name: 'LaTeX', icon: 'latex.svg' },
		{ name: 'PostgreSQL', icon: 'postgresql.svg' },
		{ name: 'GitHub', icon: 'github.svg' },
		{ name: 'Epic EHR', icon: 'epic.svg' }
	];
</script>

<div class="container hero fade-in">
	<div class="intro">
		<img
			src="{base}/lebron.jpg"
			alt="Alex Kim"
			class="headshot"
		/>
		<div class="intro-text">
			<h1>Alex Kim</h1>
			<p class="tagline">Machine Learning & Software Developer</p>
		</div>
	</div>

	<p class="bio">
		Hi, I'm Alex! I enjoy building things with data, sports, and math.
		I create full-stack applications, ML/AI solutions, and electronics
		to learn, and solve problems across diverse disciplines and research areas.
	</p>

	<div class="actions">
		<a href="#projects" class="btn btn-primary">View Projects</a>
		<a href="{base}/resume.pdf" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">Resume</a>
	</div>

	<div class="tech-section">
		<h2>Technologies</h2>
		<div class="tech-grid">
			{#each technologies as tech}
				<div class="tech-item">
					<img src="{base}/icons/{tech.icon}" alt="{tech.name}" class="tech-icon" />
					<span class="tech-name">{tech.name}</span>
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	.hero {
		padding-top: 2rem;
	}

	.intro {
		display: flex;
		align-items: center;
		gap: 1.5rem;
		margin-bottom: 1.5rem;
	}

	.headshot {
		width: 100px;
		height: 100px;
		border-radius: 50%;
		object-fit: cover;
		border: 2px solid var(--color-border);
	}

	.intro-text h1 {
		font-size: 2rem;
		font-weight: 600;
		margin-bottom: 0.25rem;
	}

	.tagline {
		color: var(--color-text-muted);
		font-size: 1.05rem;
	}

	.bio {
		font-size: 1.1rem;
		line-height: 1.7;
		margin-bottom: 1.5rem;
		max-width: 700px;
	}

	.actions {
		display: flex;
		gap: 1rem;
		margin-bottom: 3rem;
	}

	.btn {
		padding: 0.6rem 1.25rem;
		border-radius: 6px;
		font-size: 0.9rem;
		font-weight: 500;
		transition: all 0.2s ease;
	}

	.btn-primary {
		background: var(--color-text);
		color: var(--color-bg);
	}

	.btn-primary:hover {
		background: #333;
		color: var(--color-bg);
	}

	.btn-secondary {
		border: 1px solid var(--color-border);
		color: var(--color-text);
	}

	.btn-secondary:hover {
		border-color: var(--color-text);
	}

	.tech-section h2 {
		font-size: 1.25rem;
		font-weight: 600;
		margin-bottom: 1.5rem;
	}

	.tech-grid {
		display: grid;
		grid-template-columns: repeat(7, 1fr);
		gap: 1.5rem;
		max-width: 900px;
	}

	.tech-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.5rem;
		padding: 1rem;
		border: 1px solid var(--color-border);
		border-radius: 8px;
		transition: all 0.2s ease;
	}

	.tech-item:hover {
		border-color: #ccc;
		transform: translateY(-2px);
	}

	.tech-icon {
		width: 48px;
		height: 48px;
		object-fit: contain;
	}

	.tech-name {
		font-size: 0.75rem;
		color: var(--color-text-muted);
		text-align: center;
	}

	@media (max-width: 900px) {
		.tech-grid {
			grid-template-columns: repeat(4, 1fr);
		}
	}

	@media (max-width: 600px) {
		.intro {
			flex-direction: column;
			text-align: center;
		}

		.actions {
			flex-direction: column;
		}

		.btn {
			text-align: center;
		}

		.tech-grid {
			grid-template-columns: repeat(2, 1fr);
			gap: 1rem;
		}

		.tech-item {
			padding: 0.75rem;
		}

		.tech-icon {
			width: 36px;
			height: 36px;
		}
	}
</style>
