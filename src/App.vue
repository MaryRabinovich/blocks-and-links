<script setup lang="ts">
import BlockComponent from './components/BlockComponent.vue'
import { useStore } from 'vuex'

const store = useStore()

</script>

<template>
  <div>
    <BlockComponent 
      v-for="i of store.state.blocks" :key="i" 
      :block="i" 
    />
  </div>
</template>

<style scoped lang="scss">
</style>
