<template>
  <el-button type="primary" @click="openDialog"> 打开对话框 </el-button>

  <el-dialog
    v-model="dialogVisible"
    title="测试对话框"
    width="400px"
  >
    <p>这是一个测试对话框内容。</p>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="closeDialog">取消</el-button>
        <el-button type="primary" @click="confirmDialog">确认</el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ElMessage } from 'element-plus'

const dialogVisible = ref(false)

const openDialog = (): void => {
  dialogVisible.value = true
}

const closeDialog = (): void => {
  dialogVisible.value = false
}

const confirmDialog = (): void => {
  ElMessage.success('已确认！')
  dialogVisible.value = false
}
</script>

<style scoped>
.dialog-footer {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}
</style>