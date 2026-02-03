<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import About from '$lib/components/About.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<svelte:head>
	<title>Alex Kim</title>
</svelte:head>

<div class="page">
	<Navbar />
	<main>
		<section id="home">
			<Hero />
		</section>
		<section id="about">
			<About />
		</section>
		<section id="projects">
			<Projects />
		</section>
	</main>
	<Footer />
</div>

<style>
	.page {
		min-height: 100vh;
	}

	main {
		padding-top: 4rem;
	}

	section {
		padding: 3rem 0;
	}
</style>
