<script lang="ts" setup>
    import { useStore } from 'vuex'
    const store = useStore()

    const props = defineProps<{
        block: number
    }>()

    function onBlockElementClicked(i: number) {
        store.commit('link', {blockID: props.block, blockElementID: i})
    }
</script>


<template>
    <div class="block">
        <div class="block__element" 
            v-for="i of [0,1,2,3]" :key="i"
            @click="() => onBlockElementClicked(i)"
        ></div>
    </div>
</template>


<style lang="scss" scoped>
    @import '../assets/style.scss';

    .block {
        // отладочные поля
        margin: 30px;

        width: 19 * $size-base;
        height: 19 * $size-base;
        background: $color-primary;
        // position: absolute;

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