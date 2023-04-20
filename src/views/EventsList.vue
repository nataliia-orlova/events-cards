<template>
  <div>
    <h1>List of Events</h1>
    <EventCard
      v-for="event in events"
      :key="event.id"
      :event="event"
    />
    <p></p>
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue';
import EventService from '@/services/EventService.js';
export default {
  name: 'EventList',
  components: {
    EventCard,
  },
  data() {
    return {
      events: [],
    };
  },
  created() {
    EventService.getEvents()
      .then((response) => {
        this.events = response.data;
      })
      .catch((error) => {
        console.log('There was an error:', error.response);
      });
  },
};
</script>

<style></style>
