<template>
  <div>
   <ul>
      <li v-for="post in posts" :key="post.id">
        <NuxtLink :to="post.path">{{ post.title }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
//const route = useRoute()
const { data: posts } = await useAsyncData('post', () => queryCollection('post').all())


</script>
