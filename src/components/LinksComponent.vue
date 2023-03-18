<script lang="ts" setup>
    import { BLOCK_HALF_SIZE } from '../config.ts'
    import { Block, Link } from '../store/types'
    import { useStore } from 'vuex'

    const store = useStore()

    function formatKey(link: Link) {
        return `${link.first.blockID}-${link.first.blockElementID}-${link.second.blockID}-${link.second.blockElementID}`
    }

    function buildPath(link: Link) {
        const firstBlock: Block = store.getters['blocks/getBlocks'][link.first.blockID] 
        const secondBlock = store.getters['blocks/getBlocks'][link.second.blockID]
        const line = {
            x1: firstBlock.x,
            y1: firstBlock.y,
            x2: secondBlock.x,
            y2: secondBlock.y
        }
        switch (link.first.blockElementID) {
            case 0: line.y1 -= BLOCK_HALF_SIZE
                break
            case 1: line.x1 += BLOCK_HALF_SIZE
                break
            case 2: line.y1 += BLOCK_HALF_SIZE
                break
            case 3: line.x1 -= BLOCK_HALF_SIZE
        }
        switch (link.second.blockElementID) {
            case 0: line.y2 -= BLOCK_HALF_SIZE
                break
            case 1: line.x2 += BLOCK_HALF_SIZE
                break
            case 2: line.y2 += BLOCK_HALF_SIZE
                break
            case 3: line.x2 -= BLOCK_HALF_SIZE
        }
        return `M ${line.x1} ${line.y1} ${line.x2} ${line.y2}`
    }

</script>


<template>
    <svg xmlns="http://www.w3.org/2000/svg">
        <path :d="buildPath(link)" 
            v-for="link of store.getters['links/getLinks']" 
            :key="formatKey(link)"
        />
    </svg>
</template>


<style lang="scss" scoped>
    @import '../assets/style';

    svg {
        min-height: 100vh;
        min-width: 100vw;

        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;

        pointer-events: none;

        path {
            stroke: $color-tertiary;
            stroke-width: 1;
        }
    }
</style>