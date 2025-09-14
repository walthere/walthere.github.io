<template>
  
   
    <div >
          <!-- 内容与侧边栏 -->
      <div class="md:flex md:space-x-8">
        <!-- 主要文章列表 -->
        <div class="md:w-2/3">
          <!-- 文章列表 -->
          <div class="space-y-8">
            <!-- 文章卡片 1 -->
            <article
              class="bg-white rounded-xl shadow-sm overflow-hidden p-5 md:p-6 card-hover"
              v-for="post in posts"
              :key="post.id"
            >
              <div class="flex items-center mb-2">
                <span
                  class="bg-purple-100 text-purple-800 text-xs font-semibold px-2.5 py-0.5 rounded"
                  >{{ post.tag }}</span
                >
                <span class="text-gray-500 text-sm ml-3"
                  >{{ post.date }}</span
                >
              </div>
              <h3
                class="text-xl font-bold text-gray-900 mb-2 hover:text-secondary transition-colors"
              >
                <NuxtLink :to="post.path">{{ post.title }}</NuxtLink>
              </h3>
              <p class="text-gray-600 mb-4">
              {{ post.description }}
              </p>
            
            </article>

        
          </div>
        </div>


        <!-- 侧边栏 -->
        <div class="md:w-1/3 mt-10 md:mt-0">
          <!-- 热门文章 -->
          <div class="bg-white rounded-xl shadow-sm p-5 mb-8">
            <h3 class="text-lg font-bold text-gray-900 mb-4">热门文章</h3>
            <div class="space-y-4">
              <a href="#" class="flex group" v-for="value,index in hotPosts">
                <span class="text-accent font-bold text-xl mr-3 mt-1">{{ index+1 }}</span>
                <div>
                  <h4
                    class="font-medium text-gray-900 group-hover:text-secondary transition-colors line-clamp-2"
                  >
                    {{ value.title }}
                  </h4>
                  <p class="text-gray-500 text-sm mt-1">
                    {{ value.date }}
                  </p>
                </div>
              </a>
         
            </div>
          </div>

      
        </div>
      </div>
    </div>
 
</template>

<script lang="ts" setup>
const route = useRoute()
console.info('route',route)
const tag = route.params.tag? route.params.tag:'-'
console.info('tag',tag)
const { data: posts } = await useAsyncData('post-'+tag, () => queryCollection('post')
.where('tag','=',tag).order('date','DESC').all())
console.info(posts)
const { data: hotPosts } = await useAsyncData('hotPost', () => queryCollection('post').where('hot','=',true).all())



</script>
