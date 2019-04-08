<template> <!--Template is where all our HTML lives and vue directives and where vue content wrappers go-->
  <div id="app">
    <skills />
  </div>
</template>

<script> //Logic goes here
import skills from './components/skills.vue'

export default {
  name: 'app',
  components: {
    skills
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style> /* CSS goes here */
  body {
    background-color: #EEEEEE;
    font-family: 'Montserrat', sans-serif;
    display: grid;
    grid-template-rows: auto;
    justify-items: center;
    align-items: center;
  }
  body, html {
    margin: 0;
    height: 100%;
  }
  #app {
    width: 50%;
  }
</style>
