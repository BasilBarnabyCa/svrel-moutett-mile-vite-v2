<template>
	<div>
	  <Header />
	  <HeroSection />
	  <!-- Add other sections here -->
	</div>
  </template>
  
  <script>
  import Header from './components/Header.vue';
  import HeroSection from './components/HeroSection.vue';
  
  export default {
	components: {
	  Header,
	  HeroSection,
	},
  };
  </script>
  