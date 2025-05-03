<template>
	<section class="bg-gray-100" id="tickets">
		<!-- Heading -->
		<h2 class="text-2xl md:text-3xl font-thin text-center pt-10 bg-light">Early Bird Tickets Now On Sale</h2>
		<p class="text-center brand-light text-sm md:text-base pt-5 pb-10 bg-light">
            <a href="https://caribtix.com/event-details?pg=selectevent&eid=141332&edid=0" target="_blank" class="brand-button text-white px-6 py-2 rounded-md mb-2">Purchase Now</a>
        </p>

		<!-- Ticket Section Container -->
		<div class="flex flex-col md:flex-row md:justify-between items-start md:items-star0 mx-auto brand-gray-bg">
			<!-- Ticket List -->
			<div class="w-full h-full md:w-1/2 flex justify-end py-12 px-4" data-aos="fade-right">
				<div class="w-full md:w-3/4 space-y-4 md:space-y-6">
					<div v-for="(ticket, index) in tickets" :key="index" class="border-b-2 border-gray-300 pb-4">
						<div class="flex justify-between items-center cursor-pointer" @click="toggleExpand(index)">
							<h3 class="text-lg md:text-xl font-thin">{{ ticket.title }}</h3>
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
			<div class="w-full min-h-[300px] md:min-h-[575px] md:w-1/2 mt-8 md:mt-0 md:ml-8 tickets-bg" data-aos="fade-up">
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
					title: 'Infield Club House',
					description: 'Step into the most coveted location at the event—our sophisticated infield experience offering luxury and prime finish-line views. The Infield Experience delivers VIP treatment in an intimate setting where every detail adds to the ambiance curated for you and your guests. Your exclusive package includes full-service gourmet dining, premium bar access, and attentive staff dedicated to your complete satisfaction.',
					isExpanded: false,
				},
				{
					title: 'Reserved Tickets',
					description: 'Get closer to the action! The Reserve Stands offer a direct overview of the final crucial furlongs of races with bar access.',
					isExpanded: false,
				},
				{
					title: 'North Lounge',
					description: 'Enjoy a bird’s eye view of all the action in the North Lounge, aka the ‘Glass House’. Patrons here will enjoy ample seating, air-conditioned comfort and access to a well-stocked bar and hearty Jamaican gastronomic fare.',
					isExpanded: false,
				},
				{
					title: 'Ticket Locations',
					description: ' The Bleachers & Club Stands offer prime rail-side viewing for our avid racing enthusiasts. Our resident DJs keep the vibes going non-stop during the race day and our well stocked bar is available behind the stands.',
					isExpanded: false,
				}
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
	background-image: url('https://svrel-mouttet-mile.s3.us-east-1.amazonaws.com/images/gates.jpg');
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
