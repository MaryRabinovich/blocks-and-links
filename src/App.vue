<script setup lang="ts">
import BlockComponent from './components/BlockComponent.vue'
import LinesComponent from './components/LinesComponent.vue'
import { useStore } from 'vuex'

const store = useStore()

</script>

<template>
  <div>
    <button @click="() => store.commit('blocks/addBlock')">Add Block</button>

    <BlockComponent 
      v-for="block of store.getters['blocks/getBlocks']" :key="block.id" 
      :blockID="block.id" 
    />

    <LinesComponent />
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
