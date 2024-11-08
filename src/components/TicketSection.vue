<template>
	<section class="bg-gray-100" id="tickets">
		<!-- Heading -->
		<h2 class="text-2xl md:text-3xl font-thin text-center pt-10 bg-light">Tickets & Hospitality</h2>
		<p class="text-center brand-light text-sm md:text-base pt-5 pb-10 bg-light">
            <a href="#explore-options" class="hover:underline">Explore all ticketing options &gt;</a>
            <span class="mx-2">|</span>
            <a href="#buy-now" class="hover:underline">Buy Now &gt;</a>
        </p>

		<!-- Ticket Section Container -->
		<div class="flex flex-col md:flex-row md:justify-between items-start md:items-star0 mx-auto">
			<!-- Ticket List -->
			<div class="w-full h-full md:w-1/2 flex justify-end py-12 px-4">
				<div class="w-full md:w-3/4 space-y-4 md:space-y-6">
					<div v-for="(ticket, index) in tickets" :key="index" class="border-b-2 border-gray-300 pb-4">
						<div class="flex justify-between items-center cursor-pointer" @click="toggleExpand(index)">
							<h3 class="text-lg md:text-xl font-semibold">{{ ticket.title }}</h3>
							<span class="brand-primary font-bold">{{ ticket.isExpanded ? '-' : '+' }}</span>
						</div>
						<transition name="expand">
							<div v-if="ticket.isExpanded">
								<p class="mt-2 text-sm md:text-base text-gray-700">
									{{ ticket.description }}
								</p>
								<div class="mt-4 flex flex-wrap space-x-4">
									<button class="brand-button text-white px-6 py-2 rounded-md mb-2">Learn
										More</button>
									<button class="brand-outline-button border px-6 py-2 rounded-md mb-2">Buy
										Tickets</button>
								</div>

							</div>
						</transition>
					</div>
				</div>
			</div>

			<!-- Image or Related Content -->
			<div class="w-full min-h-[300px] md:min-h-[575px] md:w-1/2 mt-8 md:mt-0 md:ml-8 tickets-bg">
			</div>
		</div>
	</section>
</template>

<script>
export default {
	data() {
		return {
			tickets: [
				{
					title: 'Reserved Seating',
					description: 'Sit down to a view of the world’s most legendary racetrack and enjoy the sights and sounds of outdoor racing. All reserved seating will be all-inclusive (with food, non-alcohol and alcoholic beverages) for the event and include access to offsite parking at the event center.',
					isExpanded: false,
				},
				{
					title: 'Luxury Dining',
					description: 'Experience fine dining with a perfect view of the race and premium service.',
					isExpanded: false,
				},
				{
					title: 'Premium Dining',
					description: 'Enjoy a combination of luxury and exclusivity with our premium dining options.',
					isExpanded: false,
				},
				{
					title: 'Private Suites',
					description: 'Exclusive access to private suites with personalized service and the best views.',
					isExpanded: false,
				},
				{
					title: 'General Admission',
					description: 'Enjoy the event with general seating that offers great views and atmosphere.',
					isExpanded: false,
				},
			],
		};
	},
	methods: {
		toggleExpand(index) {
			this.tickets = this.tickets.map((ticket, i) => ({
				...ticket,
				isExpanded: i === index ? !ticket.isExpanded : false,
			}));
		},
	},
};
</script>

<style scoped>
/* Scoped style with background image */
.tickets-bg {
	background-image: url('../assets/images/gates.jpg');
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
}

/* Easing transition styles */
.expand-enter-active,
.expand-leave-active {
	transition: all 0.3s ease-in-out;
}

.expand-enter,
.expand-leave-to {
	opacity: 0;
	max-height: 0;
	overflow: hidden;
}
</style>
