<script>
    import { base } from "$app/paths";
    import { slide } from "svelte/transition";
    import { onMount } from "svelte";

    let showMore = false;
    let collapsedHeight = 0;
    let contentEl;

    onMount(() => {
        collapsedHeight = contentEl.clientHeight;
    });
</script>

<div class="container about fade-in">
    <h2>About</h2>

    <div class="about-grid">
        <div class="about-content" bind:this={contentEl}>
            <p>
		I earned my BA in Mathematics from <strong>Hamilton College</strong> in 2025. Some of my favorite courses were Graph Theory, Modern Algebra and Advanced Linear Algebra. As an undergrad, I was a research intern at the <a href = "https://www.musculoskeletal.ai/">Musculoskeletal Informatics Group</a> at <strong>Boston Children's Hospital</strong> led by Dr. Ata Kiapour, and lead an indepdentent research project for the music department as an <strong> Emerson Fellow</strong> in 2024. 
            </p>
	<p> After undergrad, I moved to Madison Wisconsin where I worked at <strong>Epic Systems</strong> and took courses at <strong>UW-Madison</strong> in the mathematics and computer-science departments.
	</p>
	<p>
                        In my freetime, I enjoy basketball,
                        skateboarding, cooking and reading and writing for my <a href = "https://blog.alexmkim.io/">blog</a>.
                    </p>
	

            {#if showMore}
                <div class="more-content" transition:slide={{ duration: 300 }}>
		<span class="date-marker">--2022-2023</span>
                    <p>
                        My first year at MIG, I helped process and verify
                        data pipelines for our CT/MRI-Mesh Segmentation and NLP projects. I also worked on an image feature extraction
                        script as my first experience with computer vision. This initial exposure showed me 
                        the potential of ML in healthcare, as well as the impact of academic research. In particular, the InterDAPT weakly-supervised finetuning framework was eventually published in <strong> ACL Anthology</strong> with clinical results published in <strong> AJSM.</strong>
                    </p>
		                    <p>
                        I returned the next year with the lab's startup arm <strong
                            >BonePixel</strong
                        >, writing 3D modeling algorithms. This experience led
                        me to explore personal projects through hackathons and
                        experiments with computer vision and NBA game footage.

                    </p>
			<span class="date-marker">--2024-2025</span>

                    <p>
                        I was granted an <strong>Emerson Fellowship</strong> for summer
                        2024, which funded the development of a vocal register classification pipeline
                        with a musician-friendly GUI. This tool helps singers understand
                        and apply technique, particularly useful for my acapella group,
                        The Buffers.
                    </p>
		<p> During the first half of 2025, I created a tensor-based ML library based in C++ and began work on a computer use agent project I call SOFIA. By August, SOFIA could search operate my desktop (not a VM) with computer use to an elementary degree and had various file manipulation/CLI capabilities that made for a neat demo!
		<span class="date-marker">--2025-2026</span>
		<p> After graduation, I worked as an Implementation Specialist at <strong> Epic Systems </strong>. This role expanded my view of how clinicians actually interact with technology and will continue to inform how I approach applied research in medical domains. 
		</p>
		<p> While in Wisconsin, I also took a mix of graduate and undergraduate courses at <strong>UW-Madison</strong> in multi-agent ML systems, measure and integration theory, theory of data science (concentration, high dimensional geometry, convex optimization, etc) and data structures and algorithms. 
		</p>
                </div>
            {/if}

            <button
                class="show-more-btn"
                on:click={() => (showMore = !showMore)}
            >
                {showMore ? "Show less" : "Show more"}
            </button>
        </div>

        <div class="about-image-container" style="height: {collapsedHeight || 'auto'}px;">
            <img src="{base}/selfie.jpeg" alt="Alex Kim" class="about-image" />
            <p class="image-caption">DGX Station at BCH MIG 2021</p>
        </div>
    </div>
</div>

<style>
    .about {
        border-top: 1px solid var(--color-border);
        padding-top: 3rem;
    }

    h2 {
        font-size: 1.5rem;
        font-weight: 600;
        margin-bottom: 1.5rem;
    }

    .about-grid {
        display: grid;
        grid-template-columns: 1fr 250px;
        gap: 3rem;
        align-items: start;
    }

    .about-content p {
        margin-bottom: 1rem;
        line-height: 1.7;
        font-size: 1.05rem;
    }

    .about-content strong {
        font-weight: 500;
    }

    .more-content {
        animation: fadeIn 0.3s ease-out;
    }

    .date-marker {
        display: block;
        font-family: monospace;
        font-size: 0.85rem;
        color: var(--color-accent);
        letter-spacing: 0.05em;
        margin-top: 1.25rem;
        margin-bottom: 0.25rem;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    .show-more-btn {
        background: none;
        border: none;
        color: var(--color-accent);
        cursor: pointer;
        font-size: 0.95rem;
        padding: 0;
        margin-top: 0.5rem;
    }

    .show-more-btn:hover {
        text-decoration: underline;
    }

    .about-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 8px;
        border: 1px solid var(--color-border);
    }

    .image-caption {
        font-size: 0.8rem;
        color: var(--color-text-muted);
        text-align: center;
        margin-top: 0.5rem;
        font-style: italic;
    }

    @media (max-width: 768px) {
        .about-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
        }

        .about-image-container {
            order: -1;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .about-image {
            max-width: 100%;
            height: 300px;
            object-fit: cover;
            object-position: top;
        }
    }
</style>
