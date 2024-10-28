export const useLoading = (_value: boolean = false) => {
  const mainStore = useMainStore();

  mainStore.setLoading(_value);
};
