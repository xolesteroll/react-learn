import axios from "axios";

const requestInstance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "3cd12ddf-9e97-4197-9a6e-c6dc930a318b"
    }
})

export const usersAPI = {
    getUsers(currentPage, pageSize) {
       return requestInstance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    postFollow(userId) {
       return requestInstance.post(`follow/${userId}`).then(response => response.data.resultCode)
    },
    deleteFollow(userId) {
       return requestInstance.delete(`follow/${userId}`).then(response => response.data.resultCode)
    },
    getUserProfile(userId) {
       return requestInstance.get(`profile/${userId}`).then(response => response.data)
    }
}

export const authAPI = {
    me() {
        return requestInstance.get('auth/me').then(response => response.data)
    }
}

