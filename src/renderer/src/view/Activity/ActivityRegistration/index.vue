<template>
  <div class="activity-registration">
    <h2>活动报名</h2>
    <el-table :data="activities" border style="width: 100%">
      <!-- 活动名称 -->
      <el-table-column prop="activity_title" label="活动名称" width="200" />
      <!-- 活动时间 -->
      <el-table-column prop="activity_time" label="活动时间" width="200">
        <template #default="scope">
          {{ formatDate(scope.row.activity_time) }}
        </template>
      </el-table-column>
      <!-- 活动地点 -->
      <el-table-column prop="activity_location" label="活动地点" width="200" />
      <!-- 活动简介 -->
      <el-table-column prop="activity_description" label="活动简介" />
      <!-- 操作 -->
      <el-table-column label="操作" width="200">
        <template #default="scope">
          <!-- 报名按钮 -->
          <el-button type="primary" size="small" @click="registerActivity(scope.row.activity_id)">
            报名
          </el-button>
          <!-- 取消报名按钮 -->
          <el-button type="danger" size="small" @click="cancelRegistration(scope.row.activity_id)">
            取消报名
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <p v-if="!activities.length">暂无活动</p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { ElMessage } from 'element-plus'
import {
  getAllActivitiesByUser,
  registerForActivity,
  cancelActivityRegistration
} from '@renderer/api'
import { formatDate } from '@renderer/utils/time'
import { isAxiosError } from 'axios'

// 活动列表
const activities = ref([])

// 获取活动列表
const fetchActivities = async (): Promise<void> => {
  try {
    const { data } = await getAllActivitiesByUser()
    activities.value = data.activities || []
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      const data = error.response?.data as { error?: string }
      ElMessage.error(data?.error || '获取活动列表失败，请稍后重试！')
    } else {
      ElMessage.error('未知错误，请稍后重试！')
    }
  }
}

// 报名活动
const registerActivity = async (activityId: number): Promise<void> => {
  try {
    const { data } = await registerForActivity(activityId) // 调用接口
    ElMessage.success(data.message || '报名成功！') // 使用后端返回的提示信息
    fetchActivities() // 刷新活动列表
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      const data = error.response?.data as { error?: string }
      ElMessage.error(data?.error || '报名失败，请稍后重试！')
    } else {
      ElMessage.error('未知错误，请稍后重试！')
    }
  }
}

// 取消报名活动
const cancelRegistration = async (activityId: number): Promise<void> => {
  try {
    const { data } = await cancelActivityRegistration(activityId) // 调用接口
    ElMessage.success(data.message || '取消报名成功！') // 使用后端返回的提示信息
    fetchActivities() // 刷新活动列表
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      const data = error.response?.data as { error?: string }
      ElMessage.error(data?.error || '取消报名失败，请稍后重试！')
    } else {
      ElMessage.error('未知错误，请稍后重试！')
    }
  }
}

// 页面加载时获取活动列表
onMounted(() => {
  fetchActivities()
})
</script>

<style scoped>
.activity-registration {
  padding: 20px;
  background-color: #ffffff;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.05);
}

h2 {
  margin-bottom: 20px;
}
</style>
