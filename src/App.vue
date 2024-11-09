<template>
	<div>
		<Header />
		<HeroSection />
		<TicketSection />
		<GallerySection />
		<HistorySection />
		<NewsletterSection />
		<FooterSection />
		<BackToTopButton />

	</div>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header.vue';
import HeroSection from './components/HeroSection.vue';
import TicketSection from './components/TicketSection.vue';
import HistorySection from './components/HistorySection.vue';
import GallerySection from './components/GallerySection.vue';
import NewsletterSection from './components/NewsletterSection.vue';
import FooterSection from './components/FooterSection.vue';
import BackToTopButton from './components/BackToTopButton.vue';

export default {
	mounted() {
		AOS.init({
			duration: 1000,
			once: true,
		});
	},
	components: {
		Header,
		HeroSection,
		TicketSection,
		HistorySection,
		GallerySection,
		NewsletterSection,
		FooterSection,
		BackToTopButton,
	},
};
</script>