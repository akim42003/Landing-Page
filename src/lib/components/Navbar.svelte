<script>
    import { base } from "$app/paths";

    let menuOpen = false;

    function toggleMenu() {
        menuOpen = !menuOpen;
    }

    function closeMenu() {
        menuOpen = false;
    }
</script>

<nav class="navbar">
    <div class="container nav-container">
        <a href="{base}/" class="logo">Alex Kim</a>

        <button
            class="menu-toggle"
            on:click={toggleMenu}
            aria-label="Toggle menu"
        >
            {#if menuOpen}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            {:else}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
            {/if}
        </button>

        <ul class="nav-links" class:open={menuOpen}>
            <li><a href="#home" on:click={closeMenu}>Home</a></li>
            <li><a href="#about" on:click={closeMenu}>About</a></li>
            <li>
                <a href="#publications" on:click={closeMenu}>Publications</a>
            </li>
            <li><a href="#projects" on:click={closeMenu}>Projects</a></li>
            <li>
                <a
                    href="https://blog.alexmkim.io"
                    target="_blank"
                    rel="noopener noreferrer">Blog</a
                >
            </li>
        </ul>
    </div>
</nav>

<style>
    .navbar {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        background: var(--color-bg);
        border-bottom: 1px solid var(--color-border);
        z-index: 100;
    }

    .nav-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 4rem;
    }

    .logo {
        font-weight: 600;
        font-size: 1.125rem;
        color: var(--color-text);
    }

    .logo:hover {
        color: var(--color-accent);
    }

    .menu-toggle {
        display: none;
        background: none;
        border: none;
        cursor: pointer;
        color: var(--color-text);
        padding: 0.5rem;
    }

    .nav-links {
        display: flex;
        list-style: none;
        gap: 2rem;
    }

    .nav-links a {
        color: var(--color-text-muted);
        font-size: 0.9rem;
    }

    .nav-links a:hover {
        color: var(--color-text);
    }

    @media (max-width: 640px) {
        .menu-toggle {
            display: block;
        }

        .nav-links {
            position: absolute;
            top: 4rem;
            left: 0;
            right: 0;
            flex-direction: column;
            background: var(--color-bg);
            border-bottom: 1px solid var(--color-border);
            padding: 1rem 1.5rem;
            gap: 1rem;
            display: none;
        }

        .nav-links.open {
            display: flex;
        }
    }
</style>
