<template>
	<section class="bg-gradient-to-r from-[#42275a] via-[#5b3d6a] to-[#734b6d] py-24 text-white">
		<div class="max-w-4xl mx-auto px-4 text-center">
			<!-- Social Media Icons -->
			<div class="flex justify-center space-x-4 mb-6">
				<a href="https://www.facebook.com/caymanasracing/" target="_blank">
					<i class="fab fa-facebook-f text-2xl hover:text-gray-200 cursor-pointer"></i>
				</a>
				<a href="https://www.instagram.com/themouttetmile.ja/" target="_blank">
					<i class="fab fa-instagram text-2xl hover:text-gray-200 cursor-pointer"></i>
				</a>
				<a href="https://www.youtube.com/channel/UCca6cCyG76xsU-2tQfPPwUw" target="_blank">
					<i class="fab fa-youtube text-2xl hover:text-gray-200 cursor-pointer"></i>
				</a>
				<a href="https://www.instagram.com/caymanasracing/" target="_blank">
					<i class="fab fa-instagram text-2xl hover:text-gray-200 cursor-pointer"></i>
				</a>
			</div>

			<!-- Subscription Heading -->
			<h2 class="text-xl md:text-2xl font-thin mb-4">FOLLOW FOR UPDATES AND EXCLUSIVES</h2>

			<!-- Email Input Form -->
			<form
				ref="contactForm"
				id="contact-form"
				@submit.prevent="sendEmail"
				class="flex flex-wrap justify-center items-center space-y-4 md:space-y-6"
			>
				<!-- Row 1: Name and Phone Number -->
				<div class="flex w-full md:w-2/3 justify-between items-center space-x-4">
					<input
						type="text"
						name="from_name"
						placeholder="Full name"
						class="w-full md:w-1/2 px-4 py-2 text-gray-800 rounded-md focus:outline-none"
						required
					/>
					<input
						type="text"
						name="user_phone"
						placeholder="Phone number"
						class="w-full md:w-1/2 px-4 py-2 text-gray-800 rounded-md focus:outline-none"
						required
					/>
				</div>

				<!-- Row 2: Email -->
				<div class="flex w-full md:w-2/3">
					<input
						type="email"
						name="reply_to"
						placeholder="Email"
						class="w-full px-4 py-2 text-gray-800 rounded-md focus:outline-none"
						required
					/>
				</div>

				<!-- Row 3: Textarea -->
				<div class="flex w-full md:w-2/3">
					<textarea
						name="message"
						class="w-full px-4 py-2 text-gray-800 rounded-md focus:outline-none"
						id="comment"
						rows="5"
						placeholder="Your message"
						required
					></textarea>
				</div>

				<!-- Row 4: Submit Button -->
				<div class="flex w-full md:w-2/3 justify-end">
					<button
						type="submit"
						class="w-full md:w-1/3 bg-transparent text-white px-6 py-2 font-semibold rounded-md border-2 border-white transition-all hover:bg-slate-100 hover:text-purple-800"
					>
						Submit
					</button>
				</div>
			</form>

			<!-- Additional Info -->
			<!-- <p class="mt-4 text-sm text-center">
				Missed something?
				<a href="#" class="underline hover:text-gray-200">Catch up on past news</a>
			</p> -->
		</div>
	</section>
</template>

<script>
import { ref } from 'vue';
import emailjs from 'emailjs-com';

export default {
	name: 'NewsletterSection',
	setup() {
		const contactForm = ref(null);

		const sendEmail = () => {
			emailjs
				.sendForm(
					'service_v6t8ywx',
					'template_hqvn2mu',
					contactForm.value,
					'Gf0CnniKLIqZTtLf0'
				)
				.then(
					(response) => {
						alert('Form submitted successfully!');
					},
					(error) => {
						alert('Failed to send email. Please try again.');
					}
				);
		};

		return {
			contactForm,
			sendEmail,
		};
	},
};
</script>

<style scoped>
</style>