
import config from '@/config/index'
import { http } from '@/utils/http'

export function update(data) {
    return http.request({
        method: 'POST',
        url: '/api/Advise/update',
        data,
    })
}

export function del(data) {
    return http.request({
        method: 'POST',
        url: '/api/Advise/delete',
        data,
    })
}

export function read(data) {
    return http.request({
        method: 'POST',
        url: '/api/Advise/read',
        data,
    })
}

export function query(data) {
    return http.request({
        method: 'POST',
        url: '/api/Advise/query',
        data,
    })
}

export function save(data) {
    return http.request({
        method: 'POST',
        url: '/api/Advise/save',
        data,
    })
}

export function advise3rdAdd(data) {
    return http.request({
        method: 'POST',
        url: '/api/Advise/advise3rdAdd',
        data,
    })
}
