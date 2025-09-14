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
                  >前端开发</span
                >
                <span class="text-gray-500 text-sm ml-3"
                  >2023-06-12 · 8分钟阅读</span
                >
              </div>
              <h3
                class="text-xl font-bold text-gray-900 mb-2 hover:text-secondary transition-colors"
              >
                <NuxtLink :to="post.path">{{ post.title }}</NuxtLink>
              </h3>
              <p class="text-gray-600 mb-4">
                React
                18带来了多项重要更新，特别是并发渲染机制的引入彻底改变了组件更新方式。本文详细讲解新特性的工作原理及实际应用场景。并发渲染允许React中断、暂停、恢复甚至放弃渲染工作，这为构建更流畅的用户界面提供了可能。自动批处理则减少了不必要的渲染次数，显著提升了应用性能。
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
              <a href="#" class="flex group">
                <span class="text-accent font-bold text-xl mr-3 mt-1">01</span>
                <div>
                  <h4
                    class="font-medium text-gray-900 group-hover:text-secondary transition-colors line-clamp-2"
                  >
                    2023年最值得学习的5种编程语言及其应用场景分析
                  </h4>
                  <p class="text-gray-500 text-sm mt-1">
                    阅读量: 12.5k · 3天前
                  </p>
                </div>
              </a>
              <a href="#" class="flex group">
                <span class="text-accent font-bold text-xl mr-3 mt-1">02</span>
                <div>
                  <h4
                    class="font-medium text-gray-900 group-hover:text-secondary transition-colors line-clamp-2"
                  >
                    从零构建现代CI/CD流水线：GitLab CI与ArgoCD实践指南
                  </h4>
                  <p class="text-gray-500 text-sm mt-1">阅读量: 9.8k · 5天前</p>
                </div>
              </a>
              <a href="#" class="flex group">
                <span class="text-accent font-bold text-xl mr-3 mt-1">03</span>
                <div>
                  <h4
                    class="font-medium text-gray-900 group-hover:text-secondary transition-colors line-clamp-2"
                  >
                    大模型时代的RAG技术：如何构建高效的知识检索增强系统
                  </h4>
                  <p class="text-gray-500 text-sm mt-1">阅读量: 8.3k · 1周前</p>
                </div>
              </a>
              <a href="#" class="flex group">
                <span class="text-accent font-bold text-xl mr-3 mt-1">04</span>
                <div>
                  <h4
                    class="font-medium text-gray-900 group-hover:text-secondary transition-colors line-clamp-2"
                  >
                    微前端架构实战：从理论到实践的完整指南
                  </h4>
                  <p class="text-gray-500 text-sm mt-1">阅读量: 7.6k · 1周前</p>
                </div>
              </a>
              <a href="#" class="flex group">
                <span class="text-accent font-bold text-xl mr-3 mt-1">05</span>
                <div>
                  <h4
                    class="font-medium text-gray-900 group-hover:text-secondary transition-colors line-clamp-2"
                  >
                    Rust在系统编程中的优势与实践案例分析
                  </h4>
                  <p class="text-gray-500 text-sm mt-1">阅读量: 6.9k · 2周前</p>
                </div>
              </a>
            </div>
          </div>

          <!-- 技术标签云 -->
          <div class="bg-white rounded-xl shadow-sm p-5 mb-8">
            <h3 class="text-lg font-bold text-gray-900 mb-4">技术标签</h3>
            <div class="flex flex-wrap gap-2">
              <a
                href="#"
                class="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm hover:bg-blue-100 transition-colors"
                >JavaScript</a
              >
              <a
                href="#"
                class="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm hover:bg-purple-100 transition-colors"
                >React</a
              >
              <a
                href="#"
                class="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm hover:bg-green-100 transition-colors"
                >Python</a
              >
              <a
                href="#"
                class="px-3 py-1 bg-red-50 text-red-700 rounded-full text-sm hover:bg-red-100 transition-colors"
                >Go</a
              >
              <a
                href="#"
                class="px-3 py-1 bg-yellow-50 text-yellow-700 rounded-full text-sm hover:bg-yellow-100 transition-colors"
                >Docker</a
              >
              <a
                href="#"
                class="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm hover:bg-indigo-100 transition-colors"
                >Kubernetes</a
              >
              <a
                href="#"
                class="px-3 py-1 bg-pink-50 text-pink-700 rounded-full text-sm hover:bg-pink-100 transition-colors"
                >AI</a
              >
              <a
                href="#"
                class="px-3 py-1 bg-gray-50 text-gray-700 rounded-full text-sm hover:bg-gray-100 transition-colors"
                >PostgreSQL</a
              >
              <a
                href="#"
                class="px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-sm hover:bg-teal-100 transition-colors"
                >Vue</a
              >
              <a
                href="#"
                class="px-3 py-1 bg-orange-50 text-orange-700 rounded-full text-sm hover:bg-orange-100 transition-colors"
                >Rust</a
              >
              <a
                href="#"
                class="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm hover:bg-blue-100 transition-colors"
                >TypeScript</a
              >
              <a
                href="#"
                class="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm hover:bg-purple-100 transition-colors"
                >GraphQL</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
 
</template>

<script lang="ts" setup>
//const route = useRoute()
const { data: posts } = await useAsyncData('post', () => queryCollection('post').all())


</script>
