<template>
  <div id="app">
    <img src="./assets/logo.png" />
    <select v-model="selectOption" @change="changeOption">
      <option
        :value="coupon.text"
        v-bind:key="coupon.id"
        v-for="coupon in options"
      >
        {{ coupon.text }}
      </option>
    </select>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      options: [
        { id: 0, text: "苹果" },
        { id: 1, text: "香蕉" },
        { id: 2, text: "香梨" },
        { id: 3, text: "榴莲" },
        { id: 4, text: "西瓜" },
      ],
      selectOption:""
    };


  },
  methods: {
    changeOption(){
      console.log(this.selectOption)
    }
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
