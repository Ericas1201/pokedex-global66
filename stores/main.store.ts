import { defineStore } from "pinia";

interface State {
  loading: boolean;
}

export const useMainStore = defineStore("main", {
  state: (): State => ({
    loading: false,
  }),
  actions: {
    setLoading(_value: boolean) {
      this.loading = _value;
    },
  },
});
