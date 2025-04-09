import axios, { AxiosResponse } from 'axios'
axios.defaults.withCredentials = true
const API_BASE_URL = '/api'

// 用户相关接口
export const registerUser = async (
  username: string,
  password: string,
  userType: string
): Promise<AxiosResponse> => {
  return axios.post(`${API_BASE_URL}/user/register`, {
    username,
    password,
    user_type: userType
  })
}

export const loginUser = async (username: string, password: string): Promise<AxiosResponse> => {
  //console.log("登录！！")
  return axios.post(`${API_BASE_URL}/user/login`, {
    username,
    password
  })
}

export const getUserInfo = async (): Promise<AxiosResponse> => {
  return axios.get(`${API_BASE_URL}/user/info`)
}

/**
 * 获取当前用户权限
 * @returns 用户权限信息
 */
export const getUserRole = async (): Promise<AxiosResponse> => {
  return axios.get(`${API_BASE_URL}/user/role`)
}

export const updateUserInfo = async (
  userId: number,
  email: string,
  phone: string
): Promise<AxiosResponse> => {
  return axios.put(`${API_BASE_URL}/user/update`, {
    user_id: userId,
    email,
    phone
  })
}

export const deleteUser = async (userId: number): Promise<AxiosResponse> => {
  return axios.delete(`${API_BASE_URL}/user/delete`, {
    data: { user_id: userId }
  })
}

export const logoutUser = async (): Promise<AxiosResponse> => {
  return axios.post(`${API_BASE_URL}/user/logout`)
}

// 社团相关接口
export const createClub = async (
  clubName: string,
  clubIntroduction: string,
  contactInfo: string,
  activityVenue: string,
  founderId: number
): Promise<AxiosResponse> => {
  return axios.post(`${API_BASE_URL}/club/create`, {
    club_name: clubName,
    club_introduction: clubIntroduction,
    contact_info: contactInfo,
    activity_venue: activityVenue,
    founder_id: founderId
  })
}

export const getClubList = async (): Promise<AxiosResponse> => {
  return axios.get(`${API_BASE_URL}/club/list`)
}

// 社团成员相关接口
export const applyToJoinClub = async (userId: number, clubId: number): Promise<AxiosResponse> => {
  return axios.post(`${API_BASE_URL}/club/member/apply`, {
    user_id: userId,
    club_id: clubId
  })
}

export const approveClubApplication = async (
  memberId: number,
  status: string,
  userId: number
): Promise<AxiosResponse> => {
  return axios.post(`${API_BASE_URL}/club/member/approve`, {
    member_id: memberId,
    status,
    user_id: userId
  })
}

// 活动相关接口
export const createActivity = async (
  activityTitle: string,
  activityTime: string,
  activityLocation: string,
  registrationMethod: string,
  activityDescription: string,
  clubId: number | null
): Promise<AxiosResponse> => {
  return axios.post(`${API_BASE_URL}/activity/create`, {
    activity_title: activityTitle,
    activity_time: activityTime,
    activity_location: activityLocation,
    registration_method: registrationMethod,
    activity_description: activityDescription,
    club_id: clubId
  })
}

export const getActivityList = async (clubId: string): Promise<AxiosResponse> => {
  return axios.get(`${API_BASE_URL}/activity/list/${clubId}`)
}

export const getActivityDetail = async (activityId: string): Promise<AxiosResponse> => {
  return axios.get(`${API_BASE_URL}/activity/detail/${activityId}`)
}

export const updateActivity = async (
  activityId: string,
  activityTitle: string,
  activityTime: string,
  activityLocation: string,
  registrationMethod: string,
  activityDescription: string
): Promise<AxiosResponse> => {
  return axios.put(`${API_BASE_URL}/activity/update/${activityId}`, {
    activity_title: activityTitle,
    activity_time: activityTime,
    activity_location: activityLocation,
    registration_method: registrationMethod,
    activity_description: activityDescription
  })
}

// 活动签到相关接口
export const checkInActivity = async (activityId: number): Promise<AxiosResponse> => {
  return axios.post(`${API_BASE_URL}/activity/checkin`, {
    activity_id: activityId
  })
}

export const getCheckInList = async (activityId: string): Promise<AxiosResponse> => {
  return axios.get(`${API_BASE_URL}/activity/checkin/list/${activityId}`)
}

// 活动报名相关接口
export const registerForActivity = async (activityId: number): Promise<AxiosResponse> => {
  return axios.post(`${API_BASE_URL}/activity/register`, {
    activity_id: activityId
  })
}

export const cancelActivityRegistration = async (activityId: number): Promise<AxiosResponse> => {
  return axios.post(`${API_BASE_URL}/activity/register/cancel`, {
    activity_id: activityId
  })
}

export const getActivityRegistrationList = async (): Promise<AxiosResponse> => {
  return axios.get(`${API_BASE_URL}/activity/register/list`)
}

// 社团申请相关接口
export const submitClubApplication = async (
  clubName: string,
  clubIntroduction: string,
  contactInfo: string,
  activityVenue: string,
  approvalId: number
): Promise<AxiosResponse> => {
  return axios.post(`${API_BASE_URL}/club/approval/submit`, {
    club_name: clubName,
    club_introduction: clubIntroduction,
    contact_info: contactInfo,
    activity_venue: activityVenue,
    founder_id: approvalId
  })
}

export const approveClubApplicationRequest = async (
  approvalId: number,
  approvalStatus: string,
  approvalOpinion: string
): Promise<AxiosResponse> => {
  return axios.put(`${API_BASE_URL}/club/approval/${approvalId}`, {
    approval_status: approvalStatus,
    approval_opinion: approvalOpinion
  })
}

export const getClubApplicationList = async (): Promise<AxiosResponse> => {
  return axios.get(`${API_BASE_URL}/club/approval/list`)
}

export const getOwnedClubs = async (): Promise<AxiosResponse> => {
  return axios.get(`${API_BASE_URL}/club/owned`)
}