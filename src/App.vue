<template>
	<div>
	  <Header />
	  <HeroSection />
	  <TicketSection />
	  <HistorySection />
	  <!-- Add other sections here -->
	</div>
  </template>
  
  <script>
  import Header from './components/Header.vue';
  import HeroSection from './components/HeroSection.vue';
  import TicketSection from './components/TicketSection.vue';
  import HistorySection from './components/HistorySection.vue';
  
  export default {
	components: {
	  Header,
	  HeroSection,
	  TicketSection,
	  HistorySection,
	},
  };
  </script>
  