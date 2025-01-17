<template>
  <div class="login-container">
    <el-card class="login-card">
      <h2>系统登录</h2>
      <el-form :model="loginForm" class="login-form">
        <el-form-item>
          <el-input
            v-model="loginForm.username"
            placeholder="用户名"
            prefix-icon="User"
          />
        </el-form-item>
        <el-form-item>
          <el-input
            v-model="loginForm.password"
            type="password"
            placeholder="密码"
            prefix-icon="Lock"
            show-password
          />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleLogin" :loading="loading" class="login-button">
            登录
          </el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'

const router = useRouter()
const loading = ref(false)

const loginForm = reactive({
  username: '',
  password: ''
})

const handleLogin = () => {
  loading.value = true
  
  // 从localStorage获取用户数据
  const users = JSON.parse(localStorage.getItem('users') || '[]')
  
  // 添加默认管理员账户
  if (!users.find(user => user.username === 'admin')) {
    users.push({
      username: 'admin',
      password: '123456'
    })
    localStorage.setItem('users', JSON.stringify(users))
  }

  const user = users.find(
    u => u.username === loginForm.username && u.password === loginForm.password
  )

  if (user) {
    localStorage.setItem('currentUser', JSON.stringify(user))
    ElMessage.success('登录成功')
    router.push('/dashboard')
  } else {
    ElMessage.error('用户名或密码错误')
  }
  
  loading.value = false
}
</script>

<style scoped>
.login-container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
}

.login-card {
  width: 400px;
}

.login-form {
  margin-top: 20px;
}

.login-button {
  width: 100%;
}

h2 {
  text-align: center;
  color: #409EFF;
}
</style>
