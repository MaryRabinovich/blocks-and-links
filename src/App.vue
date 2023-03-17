<script setup lang="ts">
import BlockComponent from './components/BlockComponent.vue'
import { useStore } from 'vuex'

const store = useStore()

</script>

<template>
  <div>
    <button @click="() => store.commit('addBlock')">Add Block</button>


    <BlockComponent 
      v-for="i of store.getters.getBlocks" :key="i" 
      :block="i" 
    />
  </div>
</template>

<style scoped lang="scss">
@import './assets/style.scss';

button {
  background: $color-secondary;
  color: white;
  font-weight: bold;
  margin: $size-base;
  padding: $size-base 3*$size-base;
  border: none;
  border-radius: $size-base;

  &:hover {
    background: darken($color-secondary, 2%);
    cursor: pointer;
  }
}
</style>
