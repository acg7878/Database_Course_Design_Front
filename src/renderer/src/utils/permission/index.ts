import { getUserRole } from '@renderer/api'

type Role = '社员' | '社长' | '管理员'

interface RoutePermission {
  path: string
  roles: Role[] // 允许访问该路径的角色
}

// 定义路由权限
const routePermissions: RoutePermission[] = [
  { path: '/club-registration', roles: ['社员', '社长', '管理员'] },
  { path: '/create-club', roles: ['社长', '管理员'] },
  { path: '/activity-registration', roles: ['社员', '社长', '管理员'] },
  { path: '/activity-payment', roles: ['社员', '社长', '管理员'] },
  { path: '/create-activity', roles: ['社长'] },
  { path: '/club-approval', roles: ['管理员'] },
  { path: '/data-management', roles: ['管理员'] },
  { path: '/system-settings', roles: ['管理员'] }
]

// 检查当前用户是否有权限访问某路径
export const hasPermission = async (path: string): Promise<boolean> => {
  const response = await getUserRole()
  const userRole: Role = response.data.user_type as Role // 从 user_type 获取用户角色
  const route = routePermissions.find((r) => r.path === path)
  return route ? route.roles.includes(userRole) : false
}

// 获取当前用户可访问的路由
export const getAccessibleRoutes = async (): Promise<string[]> => {
  const response = await getUserRole()
  const userRole: Role = response.data.user_type as Role // 从 user_type 获取用户角色
  return routePermissions
    .filter((route) => route.roles.includes(userRole))
    .map((route) => route.path)
}
