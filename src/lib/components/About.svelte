<script>
    import { base } from "$app/paths";

    let showMore = false;
</script>

<div class="container about fade-in">
    <h2>About</h2>

    <div class="about-grid">
        <div class="about-content">
            <p>
                Currently, I'm a senior at <strong>Hamilton College</strong> studying
                Mathematics and Music. Ever since I can remember, I've had a passion
                for creating things—whether it's through music, legos, or lines of
                code.
            </p>

            <p>
                I first discovered the possibilities of machine learning during
                my internship at the
                <strong
                    >Boston Children's Hospital Musculoskeletal Informatics
                    Group</strong
                >.
            </p>

            {#if showMore}
                <div class="more-content">
                    <p>
                        As a Data Science Intern, I helped process and verify
                        dataset quality and wrote image feature extraction
                        programs as my first experience with computer vision. I
                        got to see ML's impact in healthcare, contributing to 3D
                        model segmentation pipelines and NLP treatment planning
                        projects.
                    </p>

                    <p>
                        I returned the next year with the startup <strong
                            >BonePixel</strong
                        >, writing 3D modeling algorithms. This experience led
                        me to explore personal projects through hackathons and
                        experiments with computer vision.
                    </p>

                    <p>
                        I was granted an <strong>Emerson Fellowship</strong> for summer
                        2024, developing a vocal register classification pipeline
                        with a musician-friendly GUI. This tool helps singers understand
                        and apply technique, particularly useful for my acapella group,
                        The Buffers.
                    </p>

                    <p>
                        Outside of STEM and music, I enjoy basketball,
                        skateboarding, cooking with family, and crocheting.
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
