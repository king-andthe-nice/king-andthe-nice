import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
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