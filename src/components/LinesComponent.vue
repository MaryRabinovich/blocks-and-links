<script lang="ts" setup>
    import { Link } from '../store/types'
    import { useStore } from 'vuex'
    const store = useStore()

    function formatKey(link: Link) {
        return `${link.first.blockID}-${link.first.blockElementID}-${link.second.blockID}-${link.second.blockElementID}`
    }
</script>


<template>
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <line v-for="link of store.getters['links/getLinks']" 
            :key="formatKey(link)"
            :x1="store.getters['blocks/getBlocks'][link.first.blockID].x"
            :y1="store.getters['blocks/getBlocks'][link.first.blockID].y"
            :x2="store.getters['blocks/getBlocks'][link.second.blockID].x"
            :y2="store.getters['blocks/getBlocks'][link.second.blockID].y"
        />
    </svg>
</template>


<style lang="scss" scoped>
    @import '../assets/style';

    svg {
        width: 100%;
        height: 100%;
        
        line {
            stroke: $color-tertiary;
            stroke-width: .3;
        }
    }
</style>