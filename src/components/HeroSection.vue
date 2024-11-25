<template>
	<section class="relative h-screen flex items-center justify-center text-white">
		<!-- Background Video -->
		<video autoplay muted loop playsinline class="absolute inset-0 w-full h-full object-cover">
			<source src="https://svrel-mouttet-mile.s3.us-east-1.amazonaws.com/public-videos/bg1.mp4" type="video/mp4">
			Your browser does not support the video tag.
		</video>

		<!-- Dark Overlay for Contrast -->
		<div class="absolute inset-0 bg-black bg-opacity-50"></div>

		<!-- Content -->
		<div class="relative text-center z-10">
			<!-- Countdown Timer -->
			<div class="flex justify-center space-x-2 mb-4">
				<div class="text-center">
					<p class="text-xl md:text-2xl font-light">{{ formatTime(days) }}</p>
					<p class="text-xs md:text-sm">days</p>
				</div>
				<span class="text-lg md:text-2xl font-light">:</span>
				<div class="text-center">
					<p class="text-xl md:text-2xl font-light">{{ formatTime(hours) }}</p>
					<p class="text-xs md:text-sm">hours</p>
				</div>
				<span class="text-lg md:text-2xl font-light">:</span>
				<div class="text-center">
					<p class="text-lg md:text-2xl font-light">{{ formatTime(minutes) }}</p>
					<p class="text-xs md:text-sm">mins</p>
				</div>
				<span class="text-lg md:text-2xl font-light">:</span>
				<div class="text-center">
					<p class="text-lg md:text-2xl font-light">{{ formatTime(seconds) }}</p>
					<p class="text-xs md:text-sm">secs</p>
				</div>
			</div>

			<h1 class="text-4xl md:text-6xl font-thin">The Mouttet Mile</h1>
			<h4 class="mt-4 text-lg uppercase font-thin">The Richest Purse in the english speaking caribbean</h4>
			<h4 class="brand-light font-thin">USD$250,000</h4>
		</div>

		<!-- Social media icons -->
		<!-- Right-aligned icons (only visible on medium screens and above) -->
		<div class="absolute right-4 top-2/5 space-y-4 z-10 hidden md:block">
			<a href="https://www.facebook.com/caymanasracing/" class="block text-white hover:text-red-500"
				target="_blank">
				<i class="fab fa-facebook-f"></i>
			</a>
			<a href="https://www.instagram.com/themouttetmile.ja/" class="block text-white hover:text-red-500"
				target="_blank">
				<i class="fab fa-instagram"></i>
			</a>
			<a href="https://www.youtube.com/channel/UCca6cCyG76xsU-2tQfPPwUw"
				class="block text-white hover:text-red-500" target="_blank">
				<i class="fab fa-youtube"></i>
			</a>
			<a href="https://www.instagram.com/caymanasracing/" class="block text-white hover:text-red-500"
				target="_blank">
				<i class="fab fa-instagram"></i>
			</a>
		</div>

		<!-- Centered icons (only visible on small screens) -->
		<div class="absolute w-full bottom-4 flex justify-center space-x-6 md:hidden">
			<a href="https://www.facebook.com/caymanasracing/" class="block text-white hover:text-red-500"
				target="_blank">
				<i class="fab fa-facebook-f"></i>
			</a>
			<a href="https://www.instagram.com/themouttetmile.ja/" class="block text-white hover:text-red-500"
				target="_blank">
				<i class="fab fa-instagram"></i>
			</a>
			<a href="https://www.youtube.com/channel/UCca6cCyG76xsU-2tQfPPwUw"
				class="block text-white hover:text-red-500" target="_blank">
				<i class="fab fa-youtube"></i>
			</a>
			<a href="https://www.instagram.com/caymanasracing/" class="block text-white hover:text-red-500"
				target="_blank">
				<i class="fab fa-instagram"></i>
			</a>
		</div>


	</section>
</template>

<script>
// import backgroundVideo from '@/assets/videos/bg1.mp4';

export default {
	name: 'HeroSection',
	data() {
		return {
			targetDate: new Date('2024-12-07T16:00:00').getTime(),
			days: 0,
			hours: 0,
			minutes: 0,
			seconds: 0,
		};
	},
	mounted() {
		this.startCountdown();
	},
	methods: {
		startCountdown() {
			setInterval(() => {
				const now = new Date().getTime();
				const distance = this.targetDate - now;

				if (distance > 0) {
					this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
					this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
					this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
					this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
				} else {
					this.days = this.hours = this.minutes = this.seconds = 0;
				}
			}, 1000);
		},
		formatTime(unit) {
			return unit.toString().padStart(2, '0');
		},
	},
};
</script>

<style scoped>
/* Additional styles for the overlay and video */
</style>
