<template>
  <div class="dashboard">
    <h1>欢迎来到仪表板</h1>
    <el-button type="primary" @click="logout">退出登录</el-button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const logout = () => {
  localStorage.removeItem('currentUser')
  router.push('/login')
}
</script>

<style scoped>
.dashboard {
  padding: 20px;
  text-align: center;
}
</style>
