<template>
	<div>
		<!-- Back to Top Button with Font Awesome Icon -->
		<button v-show="showBackToTop" @click="scrollToTop" class="back-to-top" aria-label="Back to top">
			<i class="fas fa-chevron-up"></i> <!-- Font Awesome chevron icon -->
		</button>
	</div>
</template>

<script>
export default {
	data() {
		return {
			showBackToTop: false,
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
			// Show button after scrolling down 300px
			this.showBackToTop = window.scrollY > 300;
		},
		scrollToTop() {
			window.scrollTo({
				top: 0,
				behavior: 'smooth',
			});
		},
	},
};
</script>

<style scoped>
.back-to-top {
	position: fixed;
	bottom: 40px;
	right: 20px;
	width: 40px;
	height: 40px;
	font-size: 12px;
	background-color: #5b3d6a;
	/* Adjust color to match your theme */
	color: white;
	border: none;
	border-radius: 50%;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
	cursor: pointer;
	opacity: 0.8;
	transition: opacity 0.3s, transform 0.3s;
	z-index: 1000;
}

.back-to-top:hover {
	opacity: 1;
	transform: scale(1.1);
}
</style>