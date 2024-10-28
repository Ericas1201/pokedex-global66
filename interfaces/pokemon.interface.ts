export interface Pokemon {
  name: string;
  url: string;
}

export interface FilterPokemon {
  limit: number;
  offset: number;
  search: string;
}
