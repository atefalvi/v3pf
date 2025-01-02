<script setup lang="ts">
import { NuxtLayout } from "#build/components";
const appConfig = useAppConfig();
</script>

<template>
  <UApp :toaster="appConfig.toaster">
    <NuxtPage />
  </UApp>
</template>
