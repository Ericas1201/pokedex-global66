<script setup lang="ts">
/** props */
const props = defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    default: "",
  },
  defaultImg: {
    type: String,
    required: false,
    default: "/img/img-not-found.png",
  },
});
/** variables */
const srcImg = ref(props.src);
const image = ref();
const isLoading = ref(true);

/** methods */
const onLoad = () => {
  isLoading.value = false;
};

const onError = () => {
  isLoading.value = false;
  srcImg.value = props.defaultImg || "/img/user-not-image.webp";
};

onMounted(() => {
  if (image.value.complete) {
    onLoad();
  }
});
</script>
<template>
  <div class="img-general-loading">
    <div v-if="isLoading" class="loading-spinner" />

    <img
      v-show="!isLoading"
      class="img-loading"
      ref="image"
      :src="srcImg"
      :alt="alt"
      @load="onLoad"
      @error="onError" />
  </div>
</template>

<style lang="scss" scoped>
.img-general-loading {
  .img-loading {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .loading-spinner {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    &::after {
      content: "";
      width: 40px;
      height: 40px;
      border: 4px solid #ccc;
      border-top-color: #000;
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
}
</style>
