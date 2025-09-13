<template>
  <div>
  <ContentRenderer :value="page" />
  </div>
</template>

<script lang="ts" setup>
const route = useRoute()
console.info('route',route.path)

const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('post').path(route.path).first()
})

</script>