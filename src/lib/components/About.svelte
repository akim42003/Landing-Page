<script>
    import { base } from "$app/paths";

    let showMore = false;
</script>

<div class="container about fade-in">
    <h2>About</h2>

    <div class="about-grid">
        <div class="about-content">
            <p>
		I earned my BA in Mathematics (Music minor) from <strong>Hamilton College</strong> in 2025. Some of my favorite courses were Graph Theory, Modern Algebra and Advanced Linear Algebra. As an undergrad, I was a research intern at the <a href = "https://www.musculoskeletal.ai/">Musculoskeletal Informatics Group</a> at <strong>Boston Children's Hospital</strong> led by Dr. Ata Kiapour, and lead an indepdentent research project for the music department as an <strong> Emerson Fellow</strong> in 2024. 
            </p>
	<p> After undergrad, I moved to Madison Wisconsin where I worked at <strong>Epic Systems</strong> and took courses at <strong>UW-Madison</strong> in the mathematics and computer-science departments.
	</p>
	<p>
                        In my freetime, I enjoy basketball,
                        skateboarding, cooking and reading and writing for my <a href = "https://blog.alexmkim.io/">blog</a>.
                    </p>
	

            {#if showMore}
                <div class="more-content">
                    <p>
                        My first year at MIG, I helped process and verify
                        dataset quality and wrote image feature extraction
                        programs as my first experience with computer vision. I
                        got to see ML's impact in healthcare, contributing to 3D
                        model segmentation pipelines and the InterDAPT framework which was eventually published in <strong> ACL Anthology </strong>.
                    </p>

                    <p>
                        I returned the next year with the labs startup arm <strong
                            >BonePixel</strong
                        >, writing 3D modeling algorithms. This experience led
                        me to explore personal projects through hackathons and
                        experiments with computer vision and NBA game footage.

                    </p>

                    <p>
                        I was granted an <strong>Emerson Fellowship</strong> for summer
                        2024, which funded the development of a vocal register classification pipeline
                        with a musician-friendly GUI. This tool helps singers understand
                        and apply technique, particularly useful for my acapella group,
                        The Buffers.
                    </p>
		<p> After graduation, I worked as an Implementation Specialist at <strong> Epic Systems </strong>. This role expanded my view of how clinicians actually interact with technology and will continue to inform how I approach applied research in medical domains. 
		</p>
		<p> While in Wisconsin, I also took at <strong>UW-Madison</strong> in multi-agent ML systems, measure and integration theory, theory of data science (concentration, high dimensional geometry, convex optimization, etc) and data structures and algorithms. 
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

        <div class="about-image-container">
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
        }

        .about-image {
            max-width: 250px;
        }
    }
</style>
