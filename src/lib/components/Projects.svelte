<script>
    const projects = [
                {
            title: "SOFIA",
            description:
                "A local computer use agent that automates desktop interactions and tasks through intelligent tool calling and OCR. This AI-powered assistant can perform complex computer operations, file management, and application control to enhance productivity and streamline workflows.",
            link: "https://github.com/akim42003/SOFIA",
            tech: ["Python", "MCP", "Computer Vision", "LLM"],
        },
        {
            title: "tensorkit-learn",
            description:
                "A tensor-based machine learning library built for educational and personal purposes. This Python library provides fundamental ML algorithms and neural network implementations with a focus on learning and experimentation.",
            link: "https://github.com/akim42003/tensorkit-learn",
            tech: ["C++", "Python", "Machine Learning", "Neural Networks"],
        },
        {
            title: "AVRA - Automatic Vocal Register Analysis",
            description:
        "A full-stack application that allows musicians to further their understanding of vocal technique. Built during summer 2024 through an Emerson Foundation grant, this project combines computer vision and machine learning to create a vocal register classifier using spectrograms with SVM and CNN models.",
            link: "https://github.com/akim42003/AVRA",
            tech: ["Pytorch", "React", "scikit-learn"],
        },
	    { 
		    title: "casteroids",
		    description:
		    " Little asteroids game in C. Uses raylib for graphics",
		    link: "https://github.com/akim42003/casteroids",
		    tech: ["C", "raylib"],
		    },
	{
		    title: "braindump",
		    description: "My self hosted digital journal using postgres and nginx for backend and vanilla js + html + css for the frontent. Hosted on my middle school pc",
		    link: "https://github.com/akim42003/braindump",
		    tech: ["old school web dev stack"],
		    },
	    {
		    title: "idea_buckets",
		    description: "My public blog. Made with svelte for a nice reading experience with sveltex markdown + latex compiler",
		    link: "https://blog.alexmkim.io",
		    tech: ["Svelte"],
		    },
	    {
		    title: "alexkode",
		    description: "A tui for my ML/DL coding problems repository since repls online are slow sometimes and I get bored on plane rides. Built with bubbletea",
		    link:"https://github.com/akim42003/alexkode",
		    tech: ["Go"],
		    },

        {
            title: "HandyFit",
            description:
                "Now on the App Store. Users use their bodily dimensions to calculate calories from USDA API based on proportions of serving size to fist, pinky, etc. Workout tracking is stored in json and designed for granularity with manual input of weird exercise names, notes, etc.", 
            link: "https://github.com/akim42003/HandyFit",
            tech: ["TypeScript", "React-Native", "iOS"],
        },
        {
            title: "PlayCaller.ai",
            description:
                "NBA analytics tool using CNN to predict scoring likelihood from game broadcast images. Features play design interface and defensive/offensive success prediction based on court positioning.",
            link: "https://github.com/akim42003/PlayCaller.ai",
            tech: ["PyTorch", "React.js", "CNN"],
        },
        {
            title: "Multi-tool Synthesizer Keyboard",
            description:
                "A hardware-software project creating a music synthesizer with full 88-key piano range, multiple instrument sounds, drum pad, and real-time controls using Arduino and CircuitPython.",
            link: "https://github.com/akim42003/Multi-tool-Synthesizer-Keyboard",
            tech: ["Python", "Arduino", "Hardware"],
        },
        {
            title: "Virtual PAO and VRO",
            description:
                "The orthopedic surgical simulation library I developed at BCH/HMS in 2023 (part of the Virtual Hip project).",
            link: "https://github.com/akim42003/virtual-pao-vro",
            tech: ["Python", "MeshLab", "scipy"],
        },
        {
            title: "ZQ",
            description:
                "A Python-based hands-free text editor that enables voice-controlled document editing and code writing. Features natural language processing for command interpretation, making text editing accessible and efficient through voice commands and automation.",
            link: "https://github.com/akim42003/ZQ",
            tech: ["Python", "Speech Recognition", "NLP"],
        },
        {
            title: "NBA Prospect Potential",
            description:
                "NBA analytics project built for CS 307. Implements advanced statistical analysis, player performance metrics, and predictive modeling for basketball data insights and team strategy optimization.",
            link: "https://github.com/akim42003/nba-prospect-potential",
            tech: ["Python", "Scikit-Learn", "Neural Networks"],
        },
        {
            title: "Flappy Bot",
            description:
                "A Deep Q-Learning agent that plays Flappy Bird using reinforcement learning. This project demonstrates the application of DQN algorithms to game environments with impressive performance results.",
            link: "https://github.com/akim42003/Flappy-Bird-Free-For-All",
            tech: ["Python", "Deep Learning", "RL"],
        },
	    {
	    title: "hearts-cpp",
		    description: "A text based hearts card game that uses a stack for shuffling and dealing.",
		    link: "https://github.com/akim42003/hearts-cpp",
		    tech: ["C++"],
	    },
    ];

    let showMore = false;
</script>

<div class="container projects fade-in">
    <h2>Projects</h2>
    <p class="projects-intro">
        A collection of projects showcasing machine learning, web development,
        and creative technology.
    </p>

    <div class="project-grid">
        {#each showMore ? projects : projects.slice(0, 3) as project}
            <article class="project-card">
                <h3>
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
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

    <button class="toggle-more" on:click={() => (showMore = !showMore)}>
        {showMore ? "Show less" : `Show more (${projects.length - 3} more)`}
    </button>
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

    .project-grid {
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

    .toggle-more {
        background: none;
        border: none;
        color: var(--color-accent);
        cursor: pointer;
        font-size: 0.95rem;
        padding: 0;
    }

    .toggle-more:hover {
        text-decoration: underline;
    }
</style>
