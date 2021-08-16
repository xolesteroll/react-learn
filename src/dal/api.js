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
    },
    getProfileStatus(userId) {
        return requestInstance.get(`profile/status/${userId}`)
    },
    postProfileStatus(status) {
        return requestInstance.put('profile/status', {status})
    }
}

export const authAPI = {
    me() {
        return requestInstance.get('auth/me').then(response => response.data)
    },

    login(data) {
        return requestInstance.post('/auth/login', data).then(response => {
            console.log(response)
            return response.data
        })
    },

    logout() {
        return requestInstance.delete('/auth/login').then(response => response.data)
    }
}


