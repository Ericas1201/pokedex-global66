<script setup lang="ts">
/** variables */
const { t } = useI18n();
const localePath = useLocalePath();
</script>
<template>
  <section class="welcome-page">
    <GeneralImgLoading
      class="img-welcome"
      src="/img/welcome.svg"
      :alt="t('welcome.altImg')" />

    <h1>{{ t("welcome.title") }}</h1>
    <p>{{ t("welcome.subtitle") }}</p>
    <nuxt-link class="app-btn primary" :to="localePath({ name: 'home' })">
      <span>{{ t("welcome.button") }}</span>
    </nuxt-link>
  </section>
</template>
