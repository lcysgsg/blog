
import config from '@/config/index'
import { http } from '@/utils/http'

export function assign_person(data) {
    return http.request({
        method: 'POST',
        url: '/v1/Job/assign_person',
        data,
    })
}

export function feedback(data) {
    return http.request({
        method: 'POST',
        url: '/v1/Job/feedback',
        data,
    })
}

export function change(data) {
    return http.request({
        method: 'POST',
        url: '/v1/Job/change',
        data,
    })
}
