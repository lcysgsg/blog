
import config from '@/config/index'
import { http } from '@/utils/http'

export function refresh_token(data) {
    return http.request({
        method: 'POST',
        url: '/v1/api/refresh_token',
        data,
    })
}

export function login(data) {
    return http.request({
        method: 'POST',
        url: '/v1/api/login',
        data,
    })
}

export function logout(data) {
    return http.request({
        method: 'POST',
        url: '/v1/api/logout',
        data,
    })
}
