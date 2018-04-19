<template>
  <div id="app">
    <Home/>
  </div>
</template>

<script>
import Home from './views/Home'

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.card-icon {
  height: 1em!important;
}
</style>
<style lang="scss">
  $family-sans-serif: 'Product Sans';
  $icon-dimensions-large: 5em;
  $table-background-color: transparent;
  @import "~bulma/sass/utilities/_all";
  @import "~bulma";
  @import "~buefy/src/scss/buefy";
</style>