<template>
	<section class="bg-gray-100 py-12" id="gallery">
		<div class="max-w-7xl mx-auto px-4 md:px-8">
			<!-- Heading -->
			<h2 class="text-2xl md:text-3xl font-bold text-center mb-8">Gallery</h2>

			<!-- Gallery Grid -->
			<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
				<div v-for="(image, index) in images" :key="index"
					class="relative overflow-hidden rounded-lg shadow-md group">
					<img :src="image.url" alt="Gallery Image"
						class="w-full h-48 object-cover transform transition-transform duration-300 group-hover:scale-110" />
					<div
						class="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
						<p class="text-white text-lg">View Details</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: 'GallerySection',
	data() {
		return {
			images: [
				{ url: 'https://placehold.co/400x300' },
				{ url: 'https://placehold.co/400x300' },
				{ url: 'https://placehold.co/400x300' },
				{ url: 'https://placehold.co/400x300' },
				{ url: 'https://placehold.co/400x300' },
				{ url: 'https://placehold.co/400x300' },
				{ url: 'https://placehold.co/400x300' },
				{ url: 'https://placehold.co/400x300' },
				{ url: 'https://placehold.co/400x300' },
			],
		};
	},
};
</script>

<style scoped>
/* Add custom styles if needed */
</style>