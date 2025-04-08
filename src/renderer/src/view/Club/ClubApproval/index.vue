<template>
  <div>
    <h1>测试 el-dialog</h1>
    <el-button type="primary" @click="dialogVisible = true">打开对话框</el-button>
    <el-dialog v-model:visible="dialogVisible" title="测试对话框" width="30%">
      <p>这是一个简单的对话框内容。</p>
      <template #footer>
        <el-button @click="dialogVisible = false">关闭</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const dialogVisible = ref(false)
</script>

<style scoped>
h1 {
  color: #409eff;
}
</style>
