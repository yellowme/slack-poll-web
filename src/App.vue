<template>
  <div id="app">
    <Poll />
  </div>
</template>

<script>
import Poll from './components/Poll.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: 'app',
  components: {
    Poll
  }
}
</script>

<style>
@font-face {
  font-family: LatoBold;
  src: url(/fonts/Lato-Bold.ttf) format('truetype');
}

@font-face {
  font-family: Lato;
  src: url(/fonts/Lato-Regular.ttf) format('truetype');
}

* {
  background-color: #1B1D21;
  color: white;
  font-family: Lato;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}

:root {
  --main-font-secondary-color: rgba(209, 210, 211, 0.5);
  --main-font-primary-color: rgba(209, 210, 211, 1);
  --main-border-color: rgba(216, 216, 216, 0.5);
}
</style>
