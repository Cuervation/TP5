<template>
  <div id="app">   
    <Header />
    <Navigator />
    <Container />
  </div>
</template>

<script>

import Header from './componentes/Header.vue'
import Navigator from './componentes/Navigator.vue'
import Container from './componentes/Container.vue'

export default {
  name: 'App',
  components: {
    Header,
    Navigator,
    Container
  }
}
</script>

<style>

</style>
