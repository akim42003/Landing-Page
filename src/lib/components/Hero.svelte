<script>
    import { base } from "$app/paths";
    import { onMount } from "svelte";

    let collapsedHeight = 0;
    let heroRight;

    onMount(() => {
        collapsedHeight = heroRight.clientHeight;
    });
</script>

<div class="container hero fade-in">
    <div class="hero-columns">
        <div class="hero-left">
            <img
                src="{base}/lebron.jpg"
                alt="Alex Kim"
                class="headshot"
                style="height: {collapsedHeight || 250}px; width: {collapsedHeight || 250}px;"
            />
        </div>

        <div class="hero-right" bind:this={heroRight}>
            <h1>Alexander Kim</h1>

            <p class="bio">
                I'm an Electrical and Computer Engineering PhD Student in the <a href="https://www.kamaleswaran.com/">Kamaleswaran Lab</a>
                at <strong>Duke University</strong>.
            </p>
            <p class="bio">
                As a graduate student, I want to research clinical applications and interpretability of foundation models, multi-agent interoperability, and tinker with my side interest in the topology and geometry of latent spaces.
            </p>
        </div>

        <div class="hero-links">
            <div class="links-section">
                <h2>Links</h2>
                <a href="https://github.com/akim42003">Github</a>
                <a href="https://www.linkedin.com/in/akim42003">LinkedIn</a>
                <a href="https://scholar.google.com/citations?hl=en&user=_fNDBFgAAAAJ">Google Scholar</a>
                <a href="{base}/cv.pdf" target="_blank" rel="noopener noreferrer">Academic CV</a>
            </div>

            <div class="edu-section">
                <h2>Education</h2>
                <div class="edu-item">
                    <img src="{base}/icons/duke.png" alt="Duke University" class="edu-logo" />
                    <div class="edu-text">
                        <span class="edu-degree">ECE PhD Student</span>
                        <span class="edu-school">Duke University (2026-2031)</span>
                    </div>
                </div>
                <div class="edu-item">
                    <img src="{base}/icons/hamilton.png" alt="Hamilton College" class="edu-logo" />
                    <div class="edu-text">
                        <span class="edu-degree">BA - Mathematics (Music minor)</span>
                        <span class="edu-school">Hamilton College (2021-2025)</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    .hero {
        padding-top: 2rem;
    }

    .hero-columns {
        display: flex;
        gap: 3rem;
        align-items: stretch;
    }

    .hero-left {
        flex: 0 0 auto;
    }

    .hero-right {
        flex: 1;
    }

    .hero-links {
        flex: 0 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .links-section,
    .edu-section {
        display: flex;
        flex-direction: column;
        gap: 0.4rem;
    }

    h2 {
        font-size: 1.1rem;
        font-weight: 600;
        margin-bottom: 0.25rem;
    }

    .hero-links a {
        font-size: 0.9rem;
        color: #2563eb;
    }

    .hero-links a:hover {
        color: #1d4ed8;
    }

    .headshot {
        border-radius: 50%;
        object-fit: cover;
        border: 2px solid var(--color-border);
    }

.edu-item {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        padding: 0.1rem 0;
    }

    .edu-logo {
        width: 36px;
        height: 36px;
        object-fit: contain;
        flex-shrink: 0;
    }

    .edu-text {
        display: flex;
        flex-direction: column;
    }

    .edu-degree {
        font-size: 0.9rem;
        font-weight: 500;
        color: var(--color-text);
    }

    .edu-school {
        font-size: 0.9rem;
        color: var(--color-text-muted);
    }

    .hero-right h1 {
        font-size: 2rem;
        font-weight: 600;
        margin-bottom: 0.25rem;
    }

    .bio {
        font-size: 1.1rem;
        line-height: 1.7;
        margin-bottom: 1.25rem;
    }

    @media (max-width: 768px) {
        .hero-columns {
            flex-direction: column;
            align-items: center;
        }

        .hero-left {
            display: flex;
            justify-content: center;
            width: 100%;
        }

        .hero-links {
            width: 100%;
            flex-direction: row;
            align-items: flex-start;
            gap: 2rem;
        }

        .links-section,
        .edu-section {
            flex: 1;
        }
    }

    @media (max-width: 600px) {
        .hero-right {
            text-align: left;
        }
    }
</style>
