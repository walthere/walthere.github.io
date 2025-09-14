<template>
  <div class="font-inter bg-gray-50 text-gray-800 flex flex-col min-h-screen">
    <!-- 导航栏 -->
    <header
      class="bg-white shadow-sm sticky top-0 z-50 transition-all duration-300"
      id="navbar"
    >
      <div class="container mx-auto px-4">
        <div class="flex items-center justify-between h-16 md:h-20">
          <!-- 博客Logo -->
          <div class="flex items-center">
            <a href="/" class="flex items-center">
              <span class="text-primary text-2xl font-bold">图灵和铁生</span>
            </a>
          </div>

          <!-- 桌面导航 -->
          <nav class="hidden md:flex space-x-1">
            <a href="/" class="nav-link font-medium">文章</a>
          
          </nav>

          <!-- 搜索和用户按钮 -->
          <div class="flex items-center space-x-4">
            <button
              class="p-2 text-gray-600 hover:text-secondary transition-colors"
            >
              <i class="fa fa-search text-lg"></i>
            </button>
            <button
              class="p-2 text-gray-600 hover:text-secondary transition-colors"
            >
              <i class="fa fa-user-circle text-lg"></i>
            </button>
            <!-- 移动端菜单按钮 -->
            <button
              class="md:hidden p-2 text-gray-600 hover:text-secondary transition-colors"
              id="mobile-menu-button"
            >
              <i class="fa fa-bars text-xl"></i>
            </button>
          </div>
        </div>
      </div>

      <!-- 移动端导航菜单 -->
      <div class="md:hidden hidden bg-white border-t" id="mobile-menu">
        <div class="container mx-auto px-4 py-3 space-y-2">
          <a href="#" class="block py-2 px-3 hover:bg-gray-100 rounded-md"
            >首页</a
          >
          <a href="#" class="block py-2 px-3 hover:bg-gray-100 rounded-md"
            >前端开发</a
          >
          <a href="#" class="block py-2 px-3 hover:bg-gray-100 rounded-md"
            >后端技术</a
          >
          <a href="#" class="block py-2 px-3 hover:bg-gray-100 rounded-md"
            >人工智能</a
          >
          <a href="#" class="block py-2 px-3 hover:bg-gray-100 rounded-md"
            >云计算</a
          >
          <a href="#" class="block py-2 px-3 hover:bg-gray-100 rounded-md"
            >数据库</a
          >
          <a href="#" class="block py-2 px-3 hover:bg-gray-100 rounded-md"
            >编程工具</a
          >
        </div>
      </div>
    </header>
   
    <!-- 主要内容区 -->
    <main class="container flex-1 mx-auto px-4 py-6 md:py-10">
  

       <slot />
    </main>
    <!-- 页脚 -->
    <footer class="bg-gray-900 text-gray-300 pt-12 pb-6">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 class="text-white text-lg font-bold mb-4">图灵和铁生</h4>
            <p class="mb-4">
              分享前沿技术资讯、深度技术解析和实战经验，助力开发者成长。
            </p>
            <div class="flex space-x-4">
              <a
                href="#"
                class="text-gray-400 hover:text-white transition-colors"
                ><i class="fa fa-github text-xl"></i
              ></a>
              <a
                href="#"
                class="text-gray-400 hover:text-white transition-colors"
                ><i class="fa fa-twitter text-xl"></i
              ></a>
              <a
                href="#"
                class="text-gray-400 hover:text-white transition-colors"
                ><i class="fa fa-linkedin text-xl"></i
              ></a>
              <a
                href="#"
                class="text-gray-400 hover:text-white transition-colors"
                ><i class="fa fa-weixin text-xl"></i
              ></a>
            </div>
          </div>

        
        </div>

      
      </div>
    </footer>
  </div>
 
</template>



  