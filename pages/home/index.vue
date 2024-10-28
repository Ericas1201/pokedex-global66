<script setup lang="ts">
import { storeToRefs } from "pinia";
useLoading(true);
/** stores */
const pokemonStore = usePokemonStore();

/** variables */
const { getAllPokemons: pokemons } = storeToRefs(pokemonStore);
/** methods */
const getPokemons = async () => {
  useLoading(true);
  await pokemonStore.getPokemons();
  useLoading(false);
};

onMounted(() => {
  nextTick(async () => {
    await getPokemons();
  });
});
</script>
<template>
  <section class="bg-principal px-[30px]">
    <div class="max-w-[570px] w-full mx-auto">
      <div class="flex flex-col gap-[10px]">
        <PokemonCard
          v-for="(pokemon, index) in pokemons"
          :key="index"
          :pokemon="pokemon" />
      </div>
    </div>
  </section>
</template>
