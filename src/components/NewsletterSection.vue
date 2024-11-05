<template>
	<section class="bg-gradient-to-r from-[#42275a] via-[#5b3d6a] to-[#734b6d] py-24 text-white">
		<div class="max-w-4xl mx-auto px-4 text-center">
			<!-- Social Media Icons -->
			<div class="flex justify-center space-x-4 mb-6">
				<i class="fab fa-facebook-f text-2xl hover:text-gray-200 cursor-pointer"></i>
				<i class="fab fa-twitter text-2xl hover:text-gray-200 cursor-pointer"></i>
				<i class="fab fa-instagram text-2xl hover:text-gray-200 cursor-pointer"></i>
				<i class="fab fa-youtube text-2xl hover:text-gray-200 cursor-pointer"></i>
			</div>

			<!-- Subscription Heading -->
			<h2 class="text-xl md:text-2xl font-bold mb-4">FOLLOW FOR UPDATES AND EXCLUSIVES</h2>

			<!-- Email Input Form -->
			<div class="flex flex-col md:flex-row justify-center items-center">
				<input type="email" placeholder="email@example.com"
					class="w-full md:w-1/2 px-4 py-2 mb-4 md:mb-0 md:mr-4 text-gray-800 rounded-md focus:outline-none" />
				<button class="bg-white text-red-600 px-6 py-2 font-semibold rounded-md hover:bg-gray-200">
					SUBMIT
				</button>
			</div>

			<!-- Additional Info -->
			<p class="mt-4 text-sm">
				Missed something? <a href="#" class="underline hover:text-gray-200">Catch up on past news</a>
			</p>
		</div>
	</section>
</template>

<script>
export default {
	name: 'NewsletterSection',
};
</script>

<style scoped>
/* Add custom styles if needed */
</style>