import { computed, ref } from "vue";
import { initZIndex } from "@molix/constants";
const zIndex = ref(0);

export const useZIndex = () => {
    const initialZIndex = initZIndex;
    const currentZIndex = computed(() => initialZIndex + zIndex.value);

    const nextZIndex = () => {
        zIndex.value++;
        return currentZIndex.value;
    };

    return {
        initialZIndex,
        currentZIndex,
        nextZIndex,
    };
};
