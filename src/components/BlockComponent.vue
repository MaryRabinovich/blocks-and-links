<script lang="ts" setup>
    import { useStore } from 'vuex'
    const store = useStore()

    const props = defineProps<{
        blockID: number
    }>()

    function onBlockElementClicked(i: number) {
        store.commit('links/link', {blockID: props.blockID, blockElementID: i})
    }

    function onBlockDragged(event: Event) {
        store.commit('blocks/setPosition', {
            blockID: props.blockID,
            event: event
        })
    }
</script>


<template>
    <div class="block"
        @drag="onBlockDragged"
        :style="{
            top: store.getters['blocks/getBlocks'][props.blockID].y + 'px',
            left: store.getters['blocks/getBlocks'][props.blockID].x + 'px'
        }"
        ><div class="block__element" 
            v-for="i of [0,1,2,3]" :key="i"
            @click="() => onBlockElementClicked(i)"
            
        ></div>
    </div>
</template>


<style lang="scss" scoped>
    @import '../assets/style.scss';

    .block {
        width: 19 * $size-base;
        height: 19 * $size-base;
        transform: translate(-10 * $size-base, -10 * $size-base);
        background: $color-primary;
        position: absolute;

        &:hover {
            cursor: pointer;
            background: darken($color-primary, 5%);
        }

        &__element{
            width: 5 * $size-base;
            height: 5 * $size-base;
            background: $color-secondary;
            border-radius: 50%;
            border: 3px solid white;

            &:nth-child(1) {
                transform: translate(7 * $size-base, -3 * $size-base);
            }

            &:nth-child(2) {
                transform: translate(17 * $size-base, 2 * $size-base);
            }

            &:nth-child(3) {
                transform: translate(7 * $size-base, 7 * $size-base);
            }

            &:nth-child(4) {
                transform: translate(-3 * $size-base, -8 * $size-base);
            }
        }
    }
</style>