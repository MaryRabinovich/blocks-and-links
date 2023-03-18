<script lang="ts" setup>
    import { Link } from '../store/types'
    import { useStore } from 'vuex'
    const store = useStore()

    function formatKey(link: Link) {
        console.log(store.getters['blocks/getBlocks'][link.first.blockID])
        return `${link.first.blockID}-${link.first.blockElementID}-${link.second.blockID}-${link.second.blockElementID}`
    }

    
</script>


<template>
    <div>

    <div v-for="link of store.getters['links/getLinks']" :key="formatKey(link)">

        {{ link.first.blockID }} - {{ link.first.blockElementID }}
        <br>
        {{ link.second.blockID }} - {{ link.second.blockElementID }}
        <br>
        {{ store.getters['blocks/getBlocks'][link.first.blockID].x}}
        <br>
    </div>

    <!-- <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <line v-for="link of store.getters['links/getLinks']" 
            :key="formatKey(link)"
            :x1="store.getters['blocks/getBlocks'][link.first.blockID].x + 'px'"
            :y1="store.getters['blocks/getBlocks'][link.first.blockID].y + 'px'"
            :x2="store.getters['blocks/getBlocks'][link.second.blockID].x + 'px'"
            :y2="store.getters['blocks/getBlocks'][link.second.blockID].y + 'px'"
        />
    </svg> -->

    </div>
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