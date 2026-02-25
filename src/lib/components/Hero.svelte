<script>
    import { base } from "$app/paths";

    const skillCategories = [
        {
            label: "Languages",
            items: [
                { name: "Python", icon: "python.svg" },
                { name: "C++", icon: "cpp.svg" },
                { name: "C", icon: "c.svg" },
                { name: "Go", icon: "go.svg" },
                { name: "TypeScript", icon: "typescript.svg" },
                { name: "Java", icon: "java.svg" },
            ],
        },
        {
            label: "Frameworks",
            items: [
                { name: "PyTorch", icon: "pytorch.svg" },
                { name: "React", icon: "react.svg" },
                { name: "Svelte", icon: "svelte.svg" },
                { name: "Scikit-Learn", icon: "scikit-learn.svg" },
            ],
        },
        {
            label: "Other",
            items: [
                { name: "Linux", icon: "linux.svg" },
                { name: "LaTeX", icon: "latex.svg" },
            ],
        },
    ];
</script>

<div class="container hero fade-in">
    <div class="hero-columns">
        <div class="hero-left">
            <div class="intro">
                <img src="{base}/lebron.jpg" alt="Alex Kim" class="headshot" />
                <div class="intro-text">
                    <h1>Alex Kim</h1>
                    <p class="tagline">PhD Student at Duke University</p>
                </div>
            </div>

            <p class="bio">
               I'm an Electrical and Computer Engineering PhD Candidate in the Kamaleswaran
		Lab at <strong> Duke University</strong>. In 2025, I graduated from <strong>
		Hamilton College</strong> with my Bachelors in Mathematics and a minor in Music. I'm interested in clinical applications of AI/ML, interpretability of language models, multi-agent interoperability, and the topology and geometry of latent spaces. 
                       </p>

            <div class="actions">
                <a href="#projects" class="btn btn-primary">View Projects</a>
                <a
                    href="{base}/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="btn btn-secondary">Resume</a
                >
            </div>
        </div>

        <div class="hero-right">
            <h2>Skills</h2>
            {#each skillCategories as category}
                <div class="skills-grid">
                    {#each category.items as skill}
                        <div class="skill-item">
                            <img
                                src="{base}/icons/{skill.icon}"
                                alt={skill.name}
                                class="skill-icon"
                            />
                            <span class="skill-name">{skill.name}</span>
                        </div>
                    {/each}
                </div>
            {/each}

            <h2>Education</h2>
            <div class="edu-item">
                <img
                    src="{base}/icons/duke.png"
                    alt="Duke University"
                    class="edu-logo"
                />
                <div class="edu-text">
                    <span class="edu-degree">ECE PhD Candidate</span>
                    <span class="edu-school">Duke University (2026-2031)</span>
                </div>
            </div>
            <div class="edu-item">
                <img
                    src="{base}/icons/hamilton.png"
                    alt="Hamilton College"
                    class="edu-logo"
                />
                <div class="edu-text">
                    <span class="edu-degree"
                        >BA - Mathematics (Music minor)</span
                    >
                    <span class="edu-school">Hamilton College (2021-2025)</span>
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
        align-items: start;
    }

    .hero-left {
        flex: 1;
    }

    .hero-right {
        flex: 0 0 auto;
    }

    .hero-right h2 {
        font-size: 1.25rem;
        font-weight: 600;
        margin-bottom: 1rem;
    }

    .skills-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 0.75rem;
        margin-bottom: 0.75rem;
    }

    .skills-grid:last-of-type {
        margin-bottom: 0;
    }

    .edu-item {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        padding: 0.25rem 0;
        margin-bottom: 0.25rem;
    }

    .edu-item:last-child {
        margin-bottom: 0;
    }

    .edu-logo {
        width: 36px;
        height: 36px;
        object-fit: contain;
    }

    .edu-text {
        display: flex;
        flex-direction: column;
    }

    .edu-degree {
        font-size: 0.85rem;
        font-weight: 500;
        color: var(--color-text);
    }

    .edu-school {
        font-size: 0.8rem;
        color: var(--color-text-muted);
    }

    .skill-item {
        display: flex;
        align-items: center;
        gap: 0.6rem;
        padding: 0.5rem 0.75rem;
        border: 1px solid var(--color-border);
        border-radius: 6px;
        transition: border-color 0.2s ease;
    }

    .skill-item:hover {
        border-color: #ccc;
    }

    .skill-icon {
        width: 24px;
        height: 24px;
        object-fit: contain;
    }

    .skill-name {
        font-size: 0.85rem;
        color: var(--color-text-muted);
        white-space: nowrap;
    }

    .intro {
        display: flex;
        align-items: center;
        gap: 1.5rem;
        margin-bottom: 1.5rem;
    }

    .headshot {
        width: 190px;
        height: 190px;
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

    @media (max-width: 768px) {
        .hero-columns {
            flex-direction: column;
        }

        .hero-right {
            width: 100%;
        }

        .skills-grid {
            grid-template-columns: repeat(3, 1fr);
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

        .skills-grid {
            grid-template-columns: repeat(2, 1fr);
        }
    }
</style>
