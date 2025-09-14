<template>
  
   
    <div >
          <!-- 内容与侧边栏 -->
      <div class="md:flex md:space-x-8">
    


        <!-- 侧边栏 -->
       
          <!-- 热门文章 -->
     

          <!-- 技术标签云 -->
          <div class="bg-white rounded-xl shadow-sm p-5 mb-8">
            <h3 class="text-lg font-bold text-gray-900 mb-4">技术标签</h3>
            <div class="flex flex-wrap gap-2">

              <a
              v-for="value in uniqueTags"
                href="#"
                class="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm hover:bg-blue-100 transition-colors"
                >{{ value }}</a
              >
             
            </div>
          </div>
       
      </div>
    </div>
 
</template>

<script lang="ts" setup>
const { data: posts } = await useAsyncData('post', () => queryCollection('post').order('date','DESC').all())
console.info(posts)

function getUniqueTags(arr) {
  // 边界处理：如果传入的不是数组，返回空数组
  if (!Array.isArray(arr)) return [];
  
  // 提取所有有效tag（过滤null/undefined）并去重
  return [...new Set(
    arr.map(item => item?.tag).filter(tag => tag != null)
  )];
}



// 步骤2：利用Set去重，再转回数组
const uniqueTags = getUniqueTags(posts.value)

</script>
