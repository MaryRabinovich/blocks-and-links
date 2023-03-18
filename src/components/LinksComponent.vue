<script lang="ts" setup>
    import { BLOCK_HALF_SIZE } from '../config.ts'
    import { Block, Link } from '../store/types'
    import { useStore } from 'vuex'

    const store = useStore()

    function buildKey(link: Link) {
        return `${link.first.blockID}-${link.first.blockElementID}-${link.second.blockID}-${link.second.blockElementID}`
    }

    function buildPath(link: Link) {
        const firstPoint = buildPoint(link.first.blockID, link.first.blockElementID)
        const secondPoint = buildPoint(link.second.blockID, link.second.blockElementID)
        return `M ${firstPoint.x} ${firstPoint.y} ${secondPoint.x} ${secondPoint.y}`
    }

    function buildPoint(blockID: number, blockElementID: number) {
        const block = store.getters['blocks/getBlocks'][blockID]
        const end = {
            x: block.x,
            y: block.y
        }
        switch (blockElementID) {
            case 0: end.y -= BLOCK_HALF_SIZE
                break
            case 1: end.x += BLOCK_HALF_SIZE
                break
            case 2: end.y += BLOCK_HALF_SIZE
                break
            case 3: end.x -= BLOCK_HALF_SIZE
        }
        return end
    }
</script>


<template>
    <svg xmlns="http://www.w3.org/2000/svg">
        <path v-for="link of store.getters['links/getLinks']" 
            :key="buildKey(link)"
            :d="buildPath(link)" 
        />
    </svg>
</template>


<style lang="scss" scoped>
    @import '../assets/style';

    svg {
        pointer-events: none;
        min-height: 100vh;
        min-width: 100vw;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;

        path {
            stroke: $color-tertiary;
            stroke-width: 1;
        }
    }
</style>