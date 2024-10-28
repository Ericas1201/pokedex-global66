import { defineStore } from "pinia";
import type { FilterPokemon, Pokemon } from "~/interfaces/pokemon.interface";

interface State {
  pokemons: Pokemon[];
  form: FilterPokemon;
}

export const usePokemonStore = defineStore("pokemons", {
  state: (): State => ({
    pokemons: [],
    form: {
      limit: 10,
      offset: 0,
      search: "",
    },
  }),
  actions: {
    async getPokemons() {
      const config = useRuntimeConfig().public;

      const parameters: any = {
        limit: this.form.limit,
        offset: this.form.offset,
      };

      const { data, error } = await useFetch(
        `pokemon?${new URLSearchParams(parameters)}`,
        {
          baseURL: config.apiBaseUrl,
        }
      );

      if (error.value) {
        return null;
      }

      if (data.value && data.value?.results) {
        this.pokemons = data.value?.results;
      }

      return data;
    },
  },
  getters: {
    getAllPokemons: (state): Pokemon[] => {
      return state.pokemons;
    },
  },
});
