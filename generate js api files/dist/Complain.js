
import config from '@/config/index'
import { http } from '@/utils/http'

export function query(data) {
    return http.request({
        method: 'POST',
        url: '/api/Complain/query',
        data,
    })
}

export function read(data) {
    return http.request({
        method: 'POST',
        url: '/api/Complain/read',
        data,
    })
}

export function save(data) {
    return http.request({
        method: 'POST',
        url: '/api/Complain/save',
        data,
    })
}

export function update(data) {
    return http.request({
        method: 'POST',
        url: '/api/Complain/update',
        data,
    })
}

export function del(data) {
    return http.request({
        method: 'POST',
        url: '/api/Complain/delete',
        data,
    })
}
