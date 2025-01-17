# Vue Login System

一个基于 Vue 3 + Vite + Element Plus 的登录系统。

## 功能特性

- 用户登录
- 默认管理员账户
- 响应式设计
- 本地存储用户数据

## 技术栈

- Vue 3
- Vue Router
- Element Plus
- Vite
- LocalStorage

## 快速开始

### 安装依赖

```bash
npm install
```

### 运行开发服务器

```bash
npm run dev
```

### 构建生产版本

```bash
npm run build
```

## 默认账户

系统预设了一个管理员账户：

- 用户名：admin
- 密码：123456

## 项目结构

```
src/
  ├── views/          # 页面组件
  │   ├── Login.vue   # 登录页面
  │   └── Dashboard.vue # 仪表板页面
  ├── router/         # 路由配置
  │   └── index.js
  ├── App.vue         # 根组件
  └── main.js         # 入口文件
```

## 开发环境要求

- Node.js >= 14.0.0
- npm >= 6.0.0

## 浏览器支持

- Chrome
- Firefox
- Safari
- Edge
