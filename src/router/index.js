import Vue from 'vue';
import VueRouter from 'vue-router';
import EventCreate from '../views/EventCreate.vue';
import EventList from '../views/EventsList.vue';
import EventShow from '../views/EventShow.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'events-list',
    component: EventList,
  },
  {
    path: '/event/create',
    name: 'event-create',
    component: EventCreate,
  },
  {
    path: '/event/:id',
    name: 'event',
    component: EventShow,
    props: true,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
