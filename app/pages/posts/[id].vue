<template>
  <div class="markdown-body p-10">
    <ContentRenderer :value="page" />
  </div>
</template>

<script lang="ts" setup>
const route = useRoute();

console.info("route", route.path);

const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection("post").path(route.path).first();
});

console.info(page.value);

useSeoMeta({
  title: page.value?.title,
  ogTitle: page.value?.title,
  description: page.value?.description,
  ogDescription: page.value?.description,
});
</script>
