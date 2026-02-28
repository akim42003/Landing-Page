<script>
	const contacts = [
		{ label: 'Email', value: 'alexander.kim.417@gmail.com', href: 'alexander.kim.417@gmail.com' },
		{ label: 'Phone', value: '617-659-0691', href: 'tel:617-659-0691' },
		{ label: 'LinkedIn', value: 'linkedin.com/in/akim42003', href: 'https://www.linkedin.com/in/akim42003' },
		{ label: 'GitHub', value: 'github.com/akim42003', href: 'https://github.com/akim42003' }
	];
</script>

<footer class="footer">
	<div class="container">
		<div class="footer-content">
			<div class="contact-section">
				<h3>Contact</h3>
				<p>Feel free to connect or comment about any of my work.</p>
				<ul class="contact-list">
					{#each contacts as contact}
						<li>
							<span class="contact-label">{contact.label}:</span>
							<a href={contact.href} target="_blank" rel="noopener noreferrer">
								{contact.value}
							</a>
						</li>
					{/each}
				</ul>
			</div>
		</div>

		<div class="footer-bottom">
			<p>&copy; February 2026 Alex Kim. Built with SvelteKit.</p>
		</div>
	</div>
</footer>

<style>
	.footer {
		border-top: 1px solid var(--color-border);
		margin-top: 3rem;
		padding: 3rem 0 2rem;
	}

	.footer-content {
		margin-bottom: 2rem;
	}

	h3 {
		font-size: 1.1rem;
		font-weight: 600;
		margin-bottom: 0.5rem;
	}

	.contact-section > p {
		color: var(--color-text-muted);
		margin-bottom: 1rem;
	}

	.contact-list {
		list-style: none;
	}

	.contact-list li {
		margin-bottom: 0.5rem;
		font-size: 0.9rem;
	}

	.contact-label {
		color: var(--color-text-muted);
		margin-right: 0.25rem;
	}

	.footer-bottom {
		padding-top: 1.5rem;
		border-top: 1px solid var(--color-border);
	}

	.footer-bottom p {
		color: var(--color-text-muted);
		font-size: 0.85rem;
	}
</style>
