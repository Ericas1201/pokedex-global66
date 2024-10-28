<script setup lang="ts">
import { storeToRefs } from "pinia";
const { t } = useI18n();
/** stores */
const mainStore = useMainStore();
/** variables */
const { loading } = storeToRefs(mainStore);
</script>
<template>
  <div v-show="loading" class="loading-page">
    <GeneralImgLoading
      class="img-loading"
      src="/img/pokebola.svg"
      :alt="t('loading.altImg')" />
  </div>
</template>
<style lang="scss">
.loading-page {
  @apply w-screen h-screen fixed top-1/2 left-1/2;
  @apply flex justify-center items-center;
  transform: translate(-50%, -50%);
  background-color: $color-lighter-gray;

  .img-loading {
    animation: rotate 2s linear infinite;
    img {
      max-width: 106px;
      max-height: 106px;
    }
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
}
</style>
