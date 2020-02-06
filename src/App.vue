<template>
  <div id="app">
    <Poll />
  </div>
</template>

<script>
import Poll from './components/Poll.vue'

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
  src: url(/fonts/Lato-Bold.ttf) format("truetype");
}

@font-face {
  font-family: Lato;
  src: url(/fonts/Lato-Regular.ttf) format("truetype");
}

* {
  background-color: #1b1d21;
  color: white;
  font-family: Lato;
}

:root {
  --main-font-secondary-color: rgba(209, 210, 211, 0.5);
  --main-font-primary-color: rgba(209, 210, 211, 1);
  --main-border-color: rgba(216, 216, 216, 0.5);
  --secondary-border-color: rgba(208, 208, 208, 0.5);
  --yellowme-color: #ffd100;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}

a {
  cursor: pointer;
}
</style>
