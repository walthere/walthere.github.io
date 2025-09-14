<template>
  <div class="markdown-body p-10">
   
  <ContentRenderer :value="page" />
  </div>
</template>

<script lang="ts" setup>
const route = useRoute()
console.info('route',route.path)

const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('post').path(route.path).first()
})

console.info(page.value)

useSeoMeta({
  title: page.value?.title,
  ogTitle: page.value?.title,
  // description: 'This is my amazing site, let me tell you all about it.',
  // ogDescription: 'This is my amazing site, let me tell you all about it.',
  // ogImage: 'https://example.com/image.png',
  // twitterCard: 'summary_large_image',
})

</script>