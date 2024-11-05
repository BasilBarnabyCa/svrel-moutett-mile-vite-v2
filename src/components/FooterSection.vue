<template>
	<footer class="bg-black text-white py-12">
		<div class="max-w-7xl mx-auto px-4 md:px-8">
			<!-- Sponsor Logos -->
			<!-- <div class="flex justify-center md:justify-start space-x-6 mb-8">
				<img v-for="(logo, index) in logos" :key="index" :src="logo.src" :alt="logo.alt" class="h-8 md:h-10" />
			</div> -->

			<!-- Contact Information and Links -->
			<div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
				<!-- Main Contact -->
				<div>
					<h3 class="font-bold mb-2">caymanasracing.COM</h3>
					<p>Caymanas Park, Gregory Park, Portmore, St. Catherine</p>
					<p>(876) 619-1171</p>
				</div>

				<!-- Links -->
				<div class="space-y-2">
					<h3 class="font-bold mb-2">CONTACT US</h3>
					<p><a href="#" class="hover:underline">Send us your feedback</a></p>
					<p><a href="#" class="hover:underline">Advertising & Sponsorship Opportunities</a></p>
					<p><a href="#" class="hover:underline">Become a Licensee</a></p>
				</div>

				<!-- Legal Links -->
				<div class="space-y-2">
					<h3 class="font-bold mb-2">LEGAL</h3>
					<p><a href="#" class="hover:underline">Privacy Policy</a></p>
					<p><a href="#" class="hover:underline">Ticketing Policy</a></p>
					<p><a href="#" class="hover:underline">Data Privacy</a></p>
					<p><a href="#" class="hover:underline">Responsible Gaming</a></p>
					<p><a href="#" class="hover:underline">Accessibility</a></p>
				</div>
			</div>

			<!-- Copyright Notice -->
			<div class="border-t border-gray-700 pt-4 text-center text-sm">
				© 2024 Supreme Ventures Racing and Entertainment Limited. All Rights Reserved.
			</div>
		</div>
	</footer>
</template>

<script>
export default {
	name: 'FooterSection',
	data() {
		return {
			logos: [
				{ src: 'https://placehold.co/100x40', alt: 'Logo 1' },
				{ src: 'https://placehold.co/100x40', alt: 'Logo 2' },
				{ src: 'https://placehold.co/100x40', alt: 'Logo 3' },
				{ src: 'https://placehold.co/100x40', alt: 'Logo 4' },
				{ src: 'https://placehold.co/100x40', alt: 'Logo 5' },
				{ src: 'https://placehold.co/100x40', alt: 'Logo 6' },
			],
		};
	},
};
</script>

<style scoped>
/* Add custom styles as needed */
</style>