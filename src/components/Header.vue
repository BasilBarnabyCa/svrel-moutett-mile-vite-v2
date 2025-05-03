<template>
	<header id="home" :class="[headerClasses]" class="fixed w-full top-0 z-50 transition-all duration-300">
		<nav class="max-w-7xl mx-auto p-3 flex justify-between items-center">
			<!-- Dynamic Logo -->
			<div>
				<img :src="(isScrolled || route.path !== '/') ? '/logo-colored.png' : 'logo-white.png'" alt="Dynamic Logo" class="h-16" />
			</div>

			<!-- Desktop Navigation -->
			<ul class="hidden md:flex space-x-6">
				<li><a @click.prevent="scrollToSection('home')" class="hover:text-red-500 cursor-pointer">Home</a></li>
				<li><a @click.prevent="scrollToSection('tickets')" class="hover:text-red-500 cursor-pointer">Tickets</a>
				</li>
				<li><a @click.prevent="scrollToSection('gallery')" class="hover:text-red-500 cursor-pointer">Gallery</a>
				</li>
				<li><a @click.prevent="scrollToSection('history')" class="hover:text-red-500 cursor-pointer">History</a>
				</li>
				<li><router-link to="/look-book" class="hover:text-red-500 cursor-pointer">Look Book</router-link>
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
				<li><a @click.prevent="scrollToSection('look-book'); toggleMenu()"
						class="block hover:text-red-500 cursor-pointer">Look Book</a></li>

			</ul>
		</div>
	</header>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const isScrolled = ref(false);
const menuOpen = ref(false);
const route = useRoute();
const router = useRouter();

const headerClasses = computed(() => {
  return (isScrolled.value || route.path !== '/')
    ? 'bg-white text-black shadow-md'
    : 'bg-transparent text-white';
});

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

const scrollToSection = (id) => {
  const offset = 64;
  const doScroll = () => {
    const section = document.getElementById(id);
    if (section) {
      const sectionTop = section.offsetTop - offset;
      window.scrollTo({
        top: sectionTop,
        behavior: 'smooth',
      });
    }
  };

  if (route.path !== '/') {
    router.push('/').then(() => {
      setTimeout(doScroll, 200);
    });
  } else {
    doScroll();
  }
};

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
/* Add custom styles if needed */
</style>