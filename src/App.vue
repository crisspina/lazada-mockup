<template>
  <div class="app" id="app">
    <!-- <div class="container"> -->
    p
    <div>
      <MenuBar></MenuBar>
      <router-view />
      <div class="container-footer">
        <Footer class="footer"></Footer>
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>

<script>
import MenuBar from './components/MenuBar.vue';
import Footer from './components/footer.vue'

export default {
  name: 'App',
  components: {
    MenuBar,
    Footer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  /* color: #2c3e50; */
  background-color: #F4F4F6;
  width: 100%;
}
</style>
