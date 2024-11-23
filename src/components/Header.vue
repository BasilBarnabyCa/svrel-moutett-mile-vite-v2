<template>
	<header id="home" :class="{
		'bg-white text-black shadow-md': isScrolled,
		'bg-transparent text-white': !isScrolled,
	}" class="fixed w-full top-0 z-50 transition-all duration-300">
		<nav class="max-w-7xl mx-auto p-4 flex justify-between items-center">
			<div class="font-bold text-2xl">M<sup><span class="text-xs">M</span></sup></div>
			<!-- Desktop Navigation -->
			<ul class="hidden md:flex space-x-6">
				<li><a @click.prevent="scrollToSection('home')" class="hover:text-red-500 cursor-pointer">Home</a></li>
				<li><a @click.prevent="scrollToSection('tickets')" class="hover:text-red-500 cursor-pointer">Tickets</a>
				</li>
				<li><a @click.prevent="scrollToSection('gallery')" class="hover:text-red-500 cursor-pointer">Gallery</a>
				</li>
				<li><a @click.prevent="scrollToSection('history')" class="hover:text-red-500 cursor-pointer">History</a>
				</li>
			</ul>

			<!-- Mobile Menu Button -->
			<div class="md:hidden">
				<button @click="toggleMenu" class="text-2xl focus:outline-none">
					<i class="fas fa-bars"></i>
				</button>
			</div>
		</nav>

		<!-- Mobile Navigation Menu -->
		<div :class="{
			'translate-x-0': menuOpen,
			'translate-x-full': !menuOpen,
		}" class="fixed top-0 right-0 w-full h-full bg-gray-900 bg-opacity-70 backdrop-blur-md text-white shadow-lg z-40 transform transition-transform duration-300 text-xl">
			<div class="p-4 flex justify-end">
				<button @click="toggleMenu" class="text-2xl">
					<i class="fas fa-times"></i>
				</button>
			</div>
			<ul class="p-4 space-y-4 text-center">
				<li><a @click.prevent="scrollToSection('home'); toggleMenu()"
						class="block hover:text-red-500 cursor-pointer">Home</a></li>
				<li><a @click.prevent="scrollToSection('tickets'); toggleMenu()"
						class="block hover:text-red-500 cursor-pointer">Tickets</a></li>
				<li><a @click.prevent="scrollToSection('history'); toggleMenu()"
						class="block hover:text-red-500 cursor-pointer">History</a></li>
				<li><a @click.prevent="scrollToSection('gallery'); toggleMenu()"
						class="block hover:text-red-500 cursor-pointer">Gallery</a></li>
			</ul>
		</div>
	</header>
</template>

<script>
export default {
	data() {
		return {
			isScrolled: false,
			menuOpen: false,
		};
	},
	mounted() {
		window.addEventListener('scroll', this.handleScroll);
	},
	beforeUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	},
	methods: {
		handleScroll() {
			this.isScrolled = window.scrollY > 50;
		},
		scrollToSection(id) {
			const section = document.getElementById(id);
			const offset = 64; // Adjust this value to match the height of your header

			if (section) {
				const sectionTop = section.offsetTop - offset;
				window.scrollTo({
					top: sectionTop,
					behavior: 'smooth',
				});
			}
		},
		toggleMenu() {
			this.menuOpen = !this.menuOpen;
		},
	},
};
</script>

<style scoped>
/* Add custom styles if needed */
</style>
