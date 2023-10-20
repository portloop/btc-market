

<template>
  <headerComponent/>
  <router-view>
    
  </router-view>
</template>

<script>
import headerComponent from './components/headerComponent.vue';

export default {
  name: 'App', 
  components: {
    headerComponent,
  }
}
</script>

<style >
  @import url(./assets/css/main.css);
  @font-face {
    font-family: 'Lexend';
    src: url('./assets/fonts/Lexend-Regular.ttf');
  }

  body {
    margin: 0;
    padding: 0;
  }

  * {
    font-family: 'Lexend', sans-serif;
  }

</style>
