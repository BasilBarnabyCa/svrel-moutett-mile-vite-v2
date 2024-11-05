<template>
	<header
	  :class="{
		'bg-white text-black shadow-md': isScrolled,
		'bg-transparent text-white': !isScrolled,
	  }"
	  class="fixed w-full top-0 z-50 transition-all duration-300"
	>
	  <nav class="max-w-7xl mx-auto p-4 flex justify-between items-center">
		<div class="font-bold text-2xl">M<sup><span class="text-xs">M</span></sup></div>
		<ul class="hidden md:flex space-x-6">
		  <li><a href="#home" class="hover:text-red-500">Home</a></li>
		  <li><a href="#about" class="hover:text-red-500">Tickets</a></li>
		  <li><a href="#works" class="hover:text-red-500">History</a></li>
		  <li><a href="#service" class="hover:text-red-500">Gallery</a></li>
		  <li><a href="#contact" class="hover:text-red-500">Contact</a></li>
		</ul>
		<!-- <button class="border border-red-500 px-4 py-2 rounded-full hover:bg-red-500 hover:text-white">
		  DOWNLOAD CV
		</button> -->
	  </nav>
	</header>
  </template>
  
  <script>
  export default {
	data() {
	  return {
		isScrolled: false,
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
	},
  };
  </script>
  
  <style scoped>
  /* Add custom styles if needed */
  </style>
  