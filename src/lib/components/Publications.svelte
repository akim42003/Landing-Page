<script>
	const publications = [
		{
			id: 1,
			title: 'Large Language Models for Zero-Shot Procedure Extraction in Orthopedic Surgery: A Comparative Evaluation',
			authors: 'Alexander Kim, et al.',
			venue: 'medRxiv',
			year: '2025',
			link: 'https://www.medrxiv.org/content/10.1101/2025.08.19.25333995v2',
			description: "Survey of LLM's for zero-shot orthopedic procedure prediction and feature extraction."
		},
		{
			id: 2,
			title: 'Machine Learning Approaches to Vocal Register Classification in Contemporary Male Pop Music',
			authors: 'Alexander Kim, Charlotte Botha',
			venue: 'Journal of New Music Research (submitted)',
			year: '2025',
			link: 'https://arxiv.org/abs/2505.11378',
			description: 'Methods for classifying vocal registers in male pop music audio signals using mel-spectrogram image analysis. Introduces AVRA (Automatic Vocal Register Analysis) software using SVM and CNN models for consistent vocal register classification.'
		},
		{
			id: 3,
			title: 'Intermediate Domain Finetuning for Weakly Supervised Domain-adaptive Clinical NER',
			authors: 'Alexander Kim, et al.',
			venue: 'ACL Anthology Bio NLP',
			year: '2023',
			link: 'https://aclanthology.org/2023.bionlp-1.29/',
			description: 'Proposes InterDAPT framework that leverages Intermediate Domain Finetuning to allow language models to adapt to narrow clinical domains with small, noisy datasets for Named Entity Recognition.'
		},
		{
			id: 4,
			title: 'Prevalence and Predictors of Concomitant Meniscal and Ligamentous Injuries Associated With ACL Surgery: An Analysis of 20 Years of ACL Reconstruction at a Tertiary Care Children\'s Hospital',
			authors: 'Alexander Kim, et al.',
			venue: 'The American Journal of Sports Medicine',
			year: '2023',
			link: 'https://journals.sagepub.com/doi/full/10.1177/03635465231205556',
			description: 'Application of NLP to extract clinical variables from 20 years of ACL procedure notes to understand the prevalance of cocomitant injuries.'
		},
		{
			id: 5,
			title: 'Distracted Driving Laws and Motor Vehicle Crash Fatalities',
			authors: 'Alexander Kim, et al.',
			venue: 'Pediatrics',
			year: '2020',
			link: 'https://publications.aap.org/pediatrics/article-abstract/145/6/e20193621/76936/Distracted-Driving-Laws-and-Motor-Vehicle-Crash?redirectedFrom=fulltext',
			description: 'A retrospective time-series analysis of fatal MVCs in the United States involving teenagers, and multivariate negative binomial regression analysis to compare MVC rates across states with different distracted driving laws.'
		}
	];

	let showAll = false;
	$: displayedPublications = showAll ? publications : publications.slice(0, 3);
</script>

<div class="container publications fade-in">
	<h2>Academic Papers</h2>
	<p class="publications-intro">
		Publications and pre-prints in reverse chronological order.
	</p>

	<div class="publications-list">
		{#each displayedPublications as pub}
			<article class="publication-card">
				<h3>
					<a href={pub.link} target="_blank" rel="noopener noreferrer">
						{pub.title}
					</a>
				</h3>
				<div class="publication-meta">
					<span class="authors">{pub.authors}</span>
					<span class="separator">·</span>
					<span class="venue">{pub.venue}</span>
					<span class="separator">·</span>
					<span class="year">{pub.year}</span>
				</div>
				<p>{pub.description}</p>
				<a href={pub.link} target="_blank" rel="noopener noreferrer" class="read-link">
					Read Publication →
				</a>
			</article>
		{/each}
	</div>

	{#if publications.length > 3}
		<button class="toggle-btn" on:click={() => showAll = !showAll}>
			{showAll ? 'Show fewer publications' : 'Show all publications'}
		</button>
	{/if}
</div>

<style>
	.publications {
		border-top: 1px solid var(--color-border);
		padding-top: 3rem;
	}

	h2 {
		font-size: 1.5rem;
		font-weight: 600;
		margin-bottom: 0.5rem;
	}

	.publications-intro {
		color: var(--color-text-muted);
		margin-bottom: 2rem;
		font-size: 1.05rem;
	}

	.publications-list {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
		margin-bottom: 1.5rem;
	}

	.publication-card {
		padding: 1.5rem;
		border: 1px solid var(--color-border);
		border-radius: 8px;
		transition: border-color 0.2s ease;
	}

	.publication-card:hover {
		border-color: #ccc;
	}

	.publication-card h3 {
		font-size: 1.05rem;
		font-weight: 600;
		margin-bottom: 0.5rem;
		line-height: 1.4;
	}

	.publication-card h3 a {
		color: var(--color-text);
	}

	.publication-card h3 a:hover {
		color: var(--color-accent);
	}

	.publication-meta {
		font-size: 0.85rem;
		color: var(--color-text-muted);
		margin-bottom: 0.75rem;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 0.4rem;
	}

	.venue {
		color: var(--color-accent);
	}

	.separator {
		color: var(--color-border);
	}

	.publication-card p {
		font-size: 0.95rem;
		color: var(--color-text-muted);
		line-height: 1.6;
		margin-bottom: 0.75rem;
	}

	.read-link {
		font-size: 0.9rem;
		color: var(--color-accent);
		font-weight: 500;
	}

	.read-link:hover {
		text-decoration: underline;
	}

	.toggle-btn {
		background: none;
		border: none;
		color: var(--color-accent);
		cursor: pointer;
		font-size: 0.95rem;
		padding: 0;
	}

	.toggle-btn:hover {
		text-decoration: underline;
	}
</style>
