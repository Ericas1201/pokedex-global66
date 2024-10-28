<script setup lang="ts">
import type { Pokemon } from "~/interfaces/pokemon.interface";

/** props */
const props = defineProps({
  pokemon: {
    type: Object as PropType<Pokemon>,
  },
});

const pokemon = toRef(props, "pokemon");
</script>
<template>
  <div class="card-pokemon">
    <span>{{ pokemon?.name }}</span>
  </div>
</template>
<style lang="scss">
.card-pokemon {
  @apply w-full py-[17px] px-5;
  background: $color-white;
  border-radius: 5px;
  span {
    font-weight: 500;
    @apply capitalize;
  }
}
</style>
