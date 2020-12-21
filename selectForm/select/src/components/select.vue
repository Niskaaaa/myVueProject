!<template>
  <div id="app">
<select :options="options" @change="handleChange">
  </div>
</template>

<script type="text/javascript">
import HelloWorld from './components/HelloWorld.vue'
export default {
  name: "select",

  data() {
    return {

    }
  },
  components: {
    HelloWorld
  }
}
</script>

<style lang="stylus" scoped>
</style>
