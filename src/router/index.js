import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import LookBook from '../views/LookBook.vue';
const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/look-book',
		name: 'LookBook',
		component: LookBook,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
