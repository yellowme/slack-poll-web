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
  font-family: Lato;
  src: url(/fonts/Lato-Bold.ttf) format('truetype');
}

* {
  background-color: #1B1D21;
  color: var(--main-font-color);
  font-family: Lato;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--main-font-color);
  margin-top: 60px;
}

:root {
  --main-font-color: #D1D2D3;
}
</style>
