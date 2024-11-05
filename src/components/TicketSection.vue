<template>
	<section class="bg-gray-100">
		<!-- Heading -->
		<h2 class="text-2xl md:text-3xl font-bold text-center py-10 bg-white">Tickets & Hospitality</h2>

		<!-- Ticket Section Container -->
		<div class="flex flex-col md:flex-row md:justify-between items-start md:items-start mt-10 max-w-7xl mx-auto">
			<!-- Ticket List -->
			<div class="w-full md:w-1/2 space-y-6">
				<div v-for="(ticket, index) in tickets" :key="index" class="border-b-2 border-gray-300 pb-4">
					<div class="flex justify-between items-center cursor-pointer" @click="toggleExpand(index)">
						<h3 class="text-lg md:text-xl font-semibold">{{ ticket.title }}</h3>
						<span class="text-red-500 font-bold">{{ ticket.isExpanded ? '-' : '+' }}</span>
					</div>
					<transition name="expand">
						<div v-if="ticket.isExpanded">
							<p class="mt-2 text-sm md:text-base text-gray-700">
								{{ ticket.description }}
							</p>
							<div class="mt-4 flex space-x-4">
								<button class="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">Learn
									More</button>
								<button
									class="border border-red-500 text-red-500 px-4 py-2 rounded-md hover:bg-red-500 hover:text-white">
									Buy Tickets
								</button>
							</div>
						</div>
					</transition>
				</div>
			</div>

			<!-- Image or Related Content -->
			<div class="w-full md:w-1/2 mt-8 md:mt-0 md:ml-8 flex justify-center">
				<img src="https://placehold.co/600x400" alt="Event Image"
					class="w-full md:w-3/4 rounded-md shadow-md" />
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
					description:
						'Sit down to a view of the world’s most legendary racetrack and enjoy the sights and sounds of outdoor racing. All reserved seating will be all-inclusive (with food, non-alcohol and alcoholic beverages) for the event and include access to offsite parking at the event center.',
					isExpanded: false,
				},
				{
					title: 'Luxury Dining',
					description:
						'Experience fine dining with a perfect view of the race and premium service.',
					isExpanded: false,
				},
				{
					title: 'Premium Dining',
					description:
						'Enjoy a combination of luxury and exclusivity with our premium dining options.',
					isExpanded: false,
				},
				{
					title: 'Private Suites',
					description:
						'Exclusive access to private suites with personalized service and the best views.',
					isExpanded: false,
				},
				{
					title: 'General Admission',
					description:
						'Enjoy the event with general seating that offers great views and atmosphere.',
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