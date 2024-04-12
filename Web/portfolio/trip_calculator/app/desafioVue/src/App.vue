<template>
  <BookTrip />
</template>

<script>
import BookTrip from '../src/components/BookTrip.vue'


export default {
  name: 'App',
  components: {
    // HelloWorld,
    BookTrip,
  }
}
</script>

<style>
#app {
  margin: 0;
  font-family: system-ui, -apple-system, 
  BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 
  'Open Sans', 'Helvetica Neue', sans-serif;
  color: #2c3e50;
  height: 100%;
  width: 100%
}
</style>
