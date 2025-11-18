<template>
  <HeaderNav />

  <router-view></router-view>
</template>

<script setup>
import HeaderNav from "@/components/sections/Header.vue";

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
