<template>
    <div>
          <!-- 主内容区 -->
    <main class="flex-grow flex flex-col items-center justify-center px-4 py-16">
        <div class="w-full max-w-2xl mx-auto">
            <!-- 搜索标题 -->
            <div class="text-center mb-8">
                <h1 class="text-2xl md:text-3xl font-bold text-gray-800 mb-2">搜索</h1>
           
            </div>
            
            <!-- 搜索框 -->
            <div class="relative mb-8">
                <div class="relative">
                    <input 
                        type="text" 
                        id="search-input" 
                        placeholder="搜索..." 
                        class="w-full py-3 px-5 pr-10 rounded-lg border border-gray-200 shadow-sm search-focus"
                    >
                    <button id="search-btn" class="absolute right-3 top-1/2 transform -translate-y-1/2 text-primary hover:text-primary/80">
                        <i class="fa fa-search"></i>
                    </button>
                </div>
                
              
            </div>
            
         
            
            <!-- 热门标签 -->
            <div>
                <h3 class="text-sm font-medium text-gray-500 mb-3">标签</h3>
                <div class="flex flex-wrap gap-2">
                    <a href="#" class="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm text-gray-600 hover-effect"># 前端开发</a>
                    <a href="#" class="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm text-gray-600 hover-effect"># 人工智能</a>
                    <a href="#" class="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm text-gray-600 hover-effect"># 读书心得</a>
                    <a href="#" class="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm text-gray-600 hover-effect"># 生活记录</a>
                    <a href="#" class="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm text-gray-600 hover-effect"># 职场经验</a>
                    <a href="#" class="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm text-gray-600 hover-effect"># 学习方法</a>
                    <a href="#" class="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm text-gray-600 hover-effect"># 设计思维</a>
                    <a href="#" class="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm text-gray-600 hover-effect"># 技术趋势</a>
                </div>
            </div>
        </div>
    </main>

    </div>
    </template>