<template>
	<section class="bg-gray-100 py-12" id="gallery">
		<div class="max-w-7xl mx-auto px-4 md:px-8">
			<!-- Heading -->
			<h2 class="text-2xl md:text-3xl font-thin text-center mb-0">Gallery</h2>

			<!-- Gallery Grid -->
			<div class="gallery-container" data-aos="fade-up">
				<div class="slider">
					<div class="slides shadow-lg slide-1">
						<div class="content"></div>
					</div>
					<div class="slides shadow-lg slide-2">
						<div class="content"></div>
					</div>
					<div class="slides shadow-lg slide-3">
						<div class="content"></div>
					</div>
					<div class="slides shadow-lg slide-4">
						<div class="content"></div>
					</div>
					<div class="slides shadow-lg slide-5">
						<div class="content"></div>
					</div>
					<div class="slides shadow-lg slide-6">
						<div class="content"></div>
					</div>
					<div class="slides shadow-lg slide-7">
						<div class="content"></div>
					</div>
					<div class="slides shadow-lg slide-8">
						<div class="content"></div>
					</div>
					<div class="slides shadow-lg slide-9">
						<div class="content"></div>
					</div>
					<div class="slides shadow-lg slide-10">
						<div class="content"></div>
					</div>
					<div class="slides shadow-lg slide-11">
						<div class="content"></div>
					</div>
					<div class="slides shadow-lg slide-12">
						<div class="content"></div>
					</div>
					<div class="slides shadow-lg slide-13">
						<div class="content"></div>
					</div>
					<div class="slides shadow-lg slide-14">
						<div class="content"></div>
					</div>
					<div class="slides shadow-lg slide-15">
						<div class="content"></div>
					</div>
					<div class="slides shadow-lg slide-16">
						<div class="content"></div>
					</div>
					<div class="slides shadow-lg slide-17">
						<div class="content"></div>
					</div>
					<div class="slides shadow-lg slide-18">
						<div class="content"></div>
					</div>
					<div class="slides shadow-lg slide-19">
						<div class="content"></div>
					</div>
					<div class="slides shadow-lg slide-20">
						<div class="content"></div>
					</div>
					<div class="slides shadow-lg slide-21">
						<div class="content"></div>
					</div>
					<div class="slides shadow-lg slide-22">
						<div class="content"></div>
					</div>
					<div class="slides shadow-lg slide-23">
						<div class="content"></div>
					</div>
					

				</div>
			</div>
			<div class="button-container">
				<button class="prev brand-primary" @click="movePrev"><i class="fa-solid fa-arrow-left"></i></button>
				<button class="next brand-primary" @click="moveNext"><i class="fa-solid fa-arrow-right"></i></button>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: 'GallerySection',
	setup() {
		const movePrev = () => {
			const slider = document.querySelector('.slider');
			slider.appendChild(slider.firstElementChild);
		};

		const moveNext = () => {
			const slider = document.querySelector('.slider');
			slider.insertBefore(slider.lastElementChild, slider.firstElementChild);
		};

		return {
			movePrev,
			moveNext,
		};
	},
	data() {
		return {

		};
	},
};
</script>

<style scoped>
.gallery-container {
	position: relative;
	width: 100%;
	height: 650px;
	overflow: hidden;
	display: flex;
	justify-content: center;
	align-items: center;
}

.slider {
	position: absolute;
	inset: 40px 80px 20px 80px;
}

.slider .slides {
	position: absolute;
	width: 240px;
	height: 320px;
	top: 50%;
	transform: translateY(-50%);
	transition: 0.5s;
	border-radius: 20px;
	background-size: cover;
	background-position: center;
	z-index: 1;
}

.slider .slides:nth-child(1),
.slider .slides:nth-child(2) {
	position: absolute;
	top: 0;
	left: 0;
	width: 90%;
	height: 100%;
	transform: translateY(0);
	z-index: 0;
	background-size: cover;
}

.slider .slides:nth-child(3) {
	left: calc(50% + 240px);
	background-size: cover;
}

.slider .slides:nth-child(4) {
	left: calc(50% + 500px);
	background-size: cover;
}

.slider .slides:nth-child(5) {
	left: calc(50% + 760px);
	background-size: cover;
}

.slider .slides:nth-child(6) {
	left: calc(50% + 1020px);
	background-size: cover;
}

.slider .slides:nth-child(7) {
	left: calc(50% + 1280px);
	background-size: cover;
}

.slider .slides:nth-child(8) {
	left: calc(50% + 1540px);
	background-size: cover;
}

.slider .slides:nth-child(9) {
	left: calc(50% + 1800px);
	background-size: cover;
}

.slider .slides:nth-child(10) {
	left: calc(50% + 2060px);
	background-size: cover;
}

.slider .slides:nth-child(11) {
	left: calc(50% + 2320px);
	background-size: cover;
}

.slider .slides:nth-child(12) {
	left: calc(50% + 2580px);
	background-size: cover;
}

.slider .slides:nth-child(13) {
	left: calc(50% + 2840px);
	background-size: cover;
}

.slider .slides:nth-child(14) {
	left: calc(50% + 3100px);
	background-size: cover;
}

.slider .slides:nth-child(15) {
	left: calc(50% + 3360px);
	background-size: cover;
}

.slider .slides:nth-child(16) {
	left: calc(50% + 3620px);
	background-size: cover;
}

.slider .slides:nth-child(17) {
	left: calc(50% + 3880px);
	background-size: cover;
}

.slider .slides:nth-child(18) {
	left: calc(50% + 4140px);
	background-size: cover;
}

.slider .slides:nth-child(19) {
	left: calc(50% + 4400px);
	background-size: cover;
}

.slider .slides:nth-child(20) {
	left: calc(50% + 4660px);
	background-size: cover;
}

.slider .slides:nth-child(21) {
	left: calc(50% + 4920px);
	background-size: cover;
}

.slider .slides:nth-child(22) {
	left: calc(50% + 5180px);
	background-size: cover;
}

.slider .slides:nth-child(23) {
	left: calc(50% + 5440px);
	background-size: cover;
}

.button-container {
	display: flex;
	width: 120px;
	height: auto;
	justify-content: space-between;
	margin-left: auto;
	margin-right: auto;
	margin-top: 3em;
}

.prev,
.next {
	bottom: 15px;
	background: transparent;
	width: 50px;
	height: 50px;
	border-radius: 5px;
	cursor: pointer;
	transition: all 0.3s ease;
	border-radius: 50%;
}

.prev:hover,
.next:hover {
	background: #e2e2e2;

}

.prev {
	left: 20px;
}

.next {
	right: 20px;
}

@media (max-width: 900px) {
	.gallery-container {
		position: relative;
		width: 100%;
		height: 400px;
		overflow: hidden;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.slider {
		inset: 40px 0px 20px 0px;
		height: auto;
	}

	.slider .slides {
		width: 100px;
		height: 100px;
		top: initial;
		bottom: -0px;
	}

	.slider .slides:nth-child(1),
	.slider .slides:nth-child(2) {
		top: initial;
		bottom: 0;
	}

	.slider .slides:nth-child(3) {
		left: calc(35% + 150px);
	}

	.slider .slides:nth-child(4) {
		left: calc(35% + 350px);
	}

	.slider .slides:nth-child(5) {
		left: calc(35% + 550px);
	}

	.slider .slides:nth-child(6) {
		left: calc(35% + 750px);
	}

	.slider .slides:nth-child(7) {
		left: calc(35% + 950px);
	}

	.slider .slides:nth-child(8) {
		left: calc(35% + 1150px);
	}

	.slider .slides:nth-child(9) {
		left: calc(35% + 1350px);
	}

	.slider .slides:nth-child(10) {
		left: calc(35% + 1550px);
	}

	.slider .slides:nth-child(11) {
		left: calc(35% + 1750px);
	}

	.slider .slides:nth-child(12) {
		left: calc(35% + 1950px);
	}

	.slider .slides:nth-child(13) {
		left: calc(35% + 2150px);
	}

	.slider .slides:nth-child(14) {
		left: calc(35% + 2350px);
	}

	.slider .slides:nth-child(15) {
		left: calc(35% + 2550px);
	}

	.slider .slides:nth-child(16) {
		left: calc(35% + 2750px);
	}

	.slider .slides:nth-child(17) {
		left: calc(35% + 2950px);
	}

	.slider .slides:nth-child(18) {
		left: calc(35% + 3150px);
	}

	.slider .slides:nth-child(19) {
		left: calc(35% + 3350px);
	}

	.slider .slides:nth-child(20) {
		left: calc(35% + 3550px);
	}

	.slider .slides:nth-child(21) {
		left: calc(35% + 3750px);
	}

	.slider .slides:nth-child(22) {
		left: calc(35% + 3950px);
	}

	.slider .slides:nth-child(23) {
		left: calc(35% + 4150px);
	}

}

.slide-1 {
	background-image: url('https://svrel-mouttet-mile.s3.us-east-1.amazonaws.com/images/gallery/1.jpg');
}

.slide-2 {
	background-image: url('https://svrel-mouttet-mile.s3.us-east-1.amazonaws.com/images/gallery/2.jpg');
}

.slide-3 {
	background-image: url('https://svrel-mouttet-mile.s3.us-east-1.amazonaws.com/images/gallery/3.jpg');
	background-position: top !important;
}

.slide-4 {
	background-image: url('https://svrel-mouttet-mile.s3.us-east-1.amazonaws.com/images/gallery/4.jpg');
}

.slide-5 {
	background-image: url('https://svrel-mouttet-mile.s3.us-east-1.amazonaws.com/images/gallery/5.jpg');
}

.slide-6 {
	background-image: url('https://svrel-mouttet-mile.s3.us-east-1.amazonaws.com/images/gallery/6.jpg');
}

.slide-7 {
	background-image: url('https://svrel-mouttet-mile.s3.us-east-1.amazonaws.com/images/gallery/7.jpg');
	background-position: top !important;
}

.slide-8 {
	background-image: url('https://svrel-mouttet-mile.s3.us-east-1.amazonaws.com/images/gallery/8.jpg');
}

.slide-9 {
	background-image: url('https://svrel-mouttet-mile.s3.us-east-1.amazonaws.com/images/gallery/9.JPG');
}

.slide-10 {
	background-image: url('https://svrel-mouttet-mile.s3.us-east-1.amazonaws.com/images/gallery/10.JPG');
}

.slide-11 {
	background-image: url('https://svrel-mouttet-mile.s3.us-east-1.amazonaws.com/images/gallery/11.jpg');
	background-position: top !important;
}

.slide-12 {
	background-image: url('https://svrel-mouttet-mile.s3.us-east-1.amazonaws.com/images/gallery/12.jpg');
}

.slide-13 {
	background-image: url('https://svrel-mouttet-mile.s3.us-east-1.amazonaws.com/images/gallery/13.jpg');
}

.slide-14 {
	background-image: url('https://svrel-mouttet-mile.s3.us-east-1.amazonaws.com/images/gallery/14.jpg');
}

.slide-15 {
	background-image: url('https://svrel-mouttet-mile.s3.us-east-1.amazonaws.com/images/gallery/15.jpg');
	background-position: top !important;
}

.slide-16 {
	background-image: url('https://svrel-mouttet-mile.s3.us-east-1.amazonaws.com/images/gallery/16.jpg');
}

.slide-17 {
	background-image: url('https://svrel-mouttet-mile.s3.us-east-1.amazonaws.com/images/gallery/17.jpg');
}

.slide-18 {
	background-image: url('https://svrel-mouttet-mile.s3.us-east-1.amazonaws.com/images/gallery/18.jpg');
}

.slide-19 {
	background-image: url('https://svrel-mouttet-mile.s3.us-east-1.amazonaws.com/images/gallery/19.jpg');
}

.slide-20 {
	background-image: url('https://svrel-mouttet-mile.s3.us-east-1.amazonaws.com/images/gallery/20.jpg');
}

.slide-21 {
	background-image: url('https://svrel-mouttet-mile.s3.us-east-1.amazonaws.com/images/gallery/21.jpg');
}

.slide-22 {
	background-image: url('https://svrel-mouttet-mile.s3.us-east-1.amazonaws.com/images/gallery/22.jpg');
}

.slide-23 {
	background-image: url('https://svrel-mouttet-mile.s3.us-east-1.amazonaws.com/images/gallery/23.jpg');
}


</style>