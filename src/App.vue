<template>
  <div id="app">
    <CucDashboard/>
    <Footer/>
  </div>
</template>

<script>
import CucDashboard from "@/components/CucDashboard";
import Footer from "@/components/Footer";

export default {
  name: 'App',
  components: {
    CucDashboard,
    Footer
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');

@font-face {
  font-family: "CoconPro";
  src: local("CoconPro"),
  url(./fonts/CoconPro-Regular.ttf) format("truetype");
}

#app {
  font-family: 'Roboto Thin', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
