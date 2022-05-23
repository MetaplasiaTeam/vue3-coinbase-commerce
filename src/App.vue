<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
import { CoinbaseCommerceButton } from 'vue3-coinbase-commerce'
// import 'vue3-coinbase-commerce/dist/style.css'
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  <CoinbaseCommerceButton :checkout-id="'75f4d64a-0073-49dc-a46b-566a50ab8325'"
    >123</CoinbaseCommerceButton
  >
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
