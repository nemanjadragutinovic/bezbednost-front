<template>
  <div id="app">

    <div>

      <home-page></home-page>

      <router-view />

    </div>

  </div>

</template>

<script>

// import axios from "axios"

import HomePage from "@/components/HomePage.vue"

export default {
  components: {
    "home-page" : HomePage
  } ,

data() {

    return {

     admini: []

    };
  },


}

</script>

<style>

</style>