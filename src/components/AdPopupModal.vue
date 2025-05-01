<template>
	<transition name="fade-slide">
		<div v-if="show" class="bg-white rounded-lg max-w-md w-full shadow-xl p-6 fixed bottom-4 right-4 z-50">
			<button @click="show = false" class="absolute top-2 right-2 text-gray-500 hover:text-black">
				&times;
			</button>
			<div class="text-center">
				<h2 class="text-xl font-bold mb-4">Early Bird Tickets Now Available!</h2>
				<p class="mb-4">Get your tickets now and take advantage of our early bird special before prices go up.</p>
				<router-link to="/tickets" class="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
					Purchase Now
				</router-link>
			</div>
		</div>
	</transition>
</template>

<script setup>
import { ref } from 'vue';

const show = ref(false);

setTimeout(() => {
  show.value = true;
}, 500);
</script>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
	transition: opacity 0.4s ease, transform 0.4s ease;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
	opacity: 0;
	transform: translateY(20px);
}

.fade-slide-enter-to,
.fade-slide-leave-from {
	opacity: 1;
	transform: translateY(0);
}
</style>
