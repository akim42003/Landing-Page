<script>
	const featuredProjects = [
		{
			title: 'LIOS--LLM Integrated OS',
			description: 'Unix-based and domain targeted for local LLM\'s, LIOS is my attempt to refine my computer architecture and C skills in a fun way. Status: Under construction.',
			link: 'https://github.com/akim42003/LIOS--LLM-Integrated-OS',
			tech: ['Assembly', 'C', 'QEMU', 'Computer Architecture']
		},
		{
			title: 'SOFIA',
			description: 'A local computer use agent that automates desktop interactions and tasks through intelligent tool calling and OCR. This AI-powered assistant can perform complex computer operations, file management, and application control to enhance productivity and streamline workflows.',
			link: 'https://github.com/akim42003/SOFIA',
			tech: ['Python', 'MCP', 'Computer Vision', 'LLM']
		},
		{
			title: 'tensorkit-learn',
			description: 'A tensor-based machine learning library built for educational and personal purposes. This Python library provides fundamental ML algorithms and neural network implementations with a focus on learning and experimentation.',
			link: 'https://github.com/akim42003/tensorkit-learn',
			tech: ['C++', 'Python', 'Machine Learning', 'Neural Networks']
		},
		{
			title: 'AVRA - Automatic Vocal Register Analysis',
			description: 'A full-stack application that allows musicians of all levels to further their understanding and application of vocal technique. Built during summer 2024 through an Emerson Foundation grant, this project combines computer vision and machine learning to create a vocal register classifier using spectrograms with SVM and CNN models.',
			link: 'https://github.com/akim42003/AVRA',
			tech: ['TypeScript', 'React-Native', 'Xcode']
		}
	];

	const otherProjects = [
		{
			title: 'HandyFit',
			description: 'Now on the App Store! A local calorie tracking application that harnesses computer vision to assess the nutritional content of meals. Users can analyze food images to automatically calculate calories, macronutrients, and dietary information, making nutrition tracking effortless and accurate.',
			link: 'https://github.com/akim42003/HandyFit',
			tech: ['Python', 'Computer Vision', 'iOS']
		},
		{
			title: 'PlayCaller.ai',
			description: 'NBA analytics tool using CNN to predict scoring likelihood from game broadcast images. Features play design interface and defensive/offensive success prediction based on court positioning.',
			link: 'https://github.com/akim42003/PlayCaller.ai',
			tech: ['PyTorch', 'React.js', 'CNN']
		},
		{
			title: 'Multi-tool Synthesizer Keyboard',
			description: 'A hardware-software project creating a music synthesizer with full 88-key piano range, multiple instrument sounds, drum pad, and real-time controls using Arduino and CircuitPython.',
			link: 'https://github.com/akim42003/Multi-tool-Synthesizer-Keyboard',
			tech: ['Python', 'Arduino', 'Hardware']
		},
		{
			title: 'Virtual PAO and VRO',
			description: 'The orthopedic surgical simulation library I developed at BCH/HMS in 2023 (part of the Virtual Hip project).',
			link: 'https://github.com/akim42003/virtual-pao-vro',
			tech: ['Python', 'MeshLab', 'scipy']
		},
		{
			title: 'ZQ',
			description: 'A Python-based hands-free text editor that enables voice-controlled document editing and code writing. Features natural language processing for command interpretation, making text editing accessible and efficient through voice commands and automation.',
			link: 'https://github.com/akim42003/ZQ',
			tech: ['Python', 'Speech Recognition', 'NLP']
		},
		{
			title: 'NBA Prospect Potential',
			description: 'Comprehensive NBA analytics project built for CS 307. Implements advanced statistical analysis, player performance metrics, and predictive modeling for basketball data insights and team strategy optimization.',
			link: 'https://github.com/akim42003/nba-prospect-potential',
			tech: ['Python', 'Scikit-Learn', 'Neural Networks']
		},
		{
			title: 'Flappy Bot',
			description: 'A Deep Q-Learning agent that plays Flappy Bird using reinforcement learning. This project demonstrates the application of DQN algorithms to game environments with impressive performance results.',
			link: 'https://github.com/akim42003/Flappy-Bird-Free-For-All',
			tech: ['Python', 'Deep Learning', 'RL']
		}
	];

	let showOtherProjects = false;
</script>

<div class="container projects fade-in">
	<h2>Projects</h2>
	<p class="projects-intro">
		A collection of projects showcasing machine learning, web development, and creative technology.
	</p>

	<div class="featured-projects">
		{#each featuredProjects as project}
			<article class="project-card featured">
				<h3>
					<a href={project.link} target="_blank" rel="noopener noreferrer">
						{project.title}
					</a>
				</h3>
				<p>{project.description}</p>
				<div class="tech-tags">
					{#each project.tech as tech}
						<span class="tech-tag">{tech}</span>
					{/each}
				</div>
			</article>
		{/each}
	</div>

	<div class="other-section">
		<button class="toggle-other" on:click={() => showOtherProjects = !showOtherProjects}>
			{showOtherProjects ? 'Hide other projects' : 'Show more projects'}
		</button>

		{#if showOtherProjects}
			<div class="other-projects">
				{#each otherProjects as project}
					<article class="project-card">
						<h4>
							<a href={project.link} target="_blank" rel="noopener noreferrer">
								{project.title}
							</a>
						</h4>
						<p>{project.description}</p>
						<div class="tech-tags">
							{#each project.tech as tech}
								<span class="tech-tag">{tech}</span>
							{/each}
						</div>
					</article>
				{/each}
			</div>
		{/if}
	</div>
</div>

<style>
	.projects {
		border-top: 1px solid var(--color-border);
		padding-top: 3rem;
	}

	h2 {
		font-size: 1.5rem;
		font-weight: 600;
		margin-bottom: 0.5rem;
	}

	.projects-intro {
		color: var(--color-text-muted);
		margin-bottom: 2rem;
		font-size: 1.05rem;
	}

	.featured-projects {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
		gap: 1.5rem;
		margin-bottom: 2rem;
	}

	.project-card {
		padding: 1.5rem;
		border: 1px solid var(--color-border);
		border-radius: 8px;
		transition: border-color 0.2s ease;
	}

	.project-card:hover {
		border-color: #ccc;
	}

	.project-card.featured {
		background: #fafafa;
	}

	.project-card h3 {
		font-size: 1.1rem;
		font-weight: 600;
		margin-bottom: 0.75rem;
	}

	.project-card h3 a {
		color: var(--color-text);
	}

	.project-card h3 a:hover {
		color: var(--color-accent);
	}

	.project-card h4 {
		font-size: 1rem;
		font-weight: 600;
		margin-bottom: 0.5rem;
	}

	.project-card h4 a {
		color: var(--color-text);
	}

	.project-card h4 a:hover {
		color: var(--color-accent);
	}

	.project-card p {
		font-size: 0.95rem;
		color: var(--color-text-muted);
		line-height: 1.6;
		margin-bottom: 1rem;
	}

	.tech-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.tech-tag {
		background: #f0f0f0;
		padding: 0.25rem 0.6rem;
		border-radius: 4px;
		font-size: 0.8rem;
		color: var(--color-text-muted);
	}

	.other-section {
		margin-top: 1rem;
	}

	.toggle-other {
		background: none;
		border: none;
		color: var(--color-accent);
		cursor: pointer;
		font-size: 0.95rem;
		padding: 0;
		margin-bottom: 1.5rem;
	}

	.toggle-other:hover {
		text-decoration: underline;
	}

	.other-projects {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: 1rem;
		animation: fadeIn 0.3s ease-out;
	}

	@keyframes fadeIn {
		from { opacity: 0; }
		to { opacity: 1; }
	}
</style>
