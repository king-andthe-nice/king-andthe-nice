import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// 获取仓库名称
const repo = process.env.GITHUB_REPOSITORY?.split('/')[1] || ''

export default defineConfig({
  plugins: [vue()],
  base: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',
  server: {
    port: 3000
  }
})
// king-andthe-nice/
// ├── node_modules/
// ├── src/
// │   ├── views/
// │   │   ├── Login.vue
// │   │   └── Dashboard.vue
// │   ├── router/
// │   │   └── index.js
// │   ├── App.vue
// │   └── main.js
// ├── index.html
// ├── package.json
// ├── package-lock.json
// ├── vite.config.js
// └── .gitignore