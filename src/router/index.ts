import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

// 动态加载pages中的所有路由文件
const files = import.meta.glob('../pages/**/*.ts', { eager: true })
const routes: RouteRecordRaw[] = []
for (const x in files) {
  routes.push((files[x] as any).default)
}
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
