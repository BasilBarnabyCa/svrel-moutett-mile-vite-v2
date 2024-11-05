<template>
	<section class="relative h-screen flex items-center justify-center bg-gray-800 text-white">
		<div class="text-center">
			<!-- Countdown Timer -->
			<div class="flex justify-center space-x-2 mb-4">
				<div class="text-center">
					<p class="text-lg md:text-2xl font-light">{{ formatTime(days) }}</p>
					<p class="text-xs md:text-sm">days</p>
				</div>
				<span class="text-lg md:text-2xl font-light">:</span>
				<div class="text-center">
					<p class="text-lg md:text-2xl font-light">{{ formatTime(hours) }}</p>
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

			<h1 class="text-4xl md:text-6xl font-bold">The Mouttet Mile</h1>
			<p class="mt-4 text-lg">Racing Excellence at <span class="text-red-500">its Finest</span></p>
		</div>

		<!-- Social media icons -->
		<div class="absolute right-4 top-1/3 space-y-4">
			<a href="#" class="block text-white hover:text-red-500">
				<i class="fab fa-facebook-f"></i>
			</a>
			<a href="#" class="block text-white hover:text-red-500">
				<i class="fab fa-twitter"></i>
			</a>
			<a href="#" class="block text-white hover:text-red-500">
				<i class="fab fa-linkedin-in"></i>
			</a>
			<a href="#" class="block text-white hover:text-red-500">
				<i class="fab fa-youtube"></i>
			</a>
		</div>
	</section>
</template>

<script>
export default {
	name: 'HeroSection',
	data() {
		return {
			targetDate: new Date('2024-12-31T00:00:00').getTime(), // Replace with your event date
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
			return unit.toString().padStart(2, '0'); // Adds leading zero if necessary
		},
	},
};
</script>

<style scoped>
/* Add custom styles if needed */
</style>