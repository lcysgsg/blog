
import config from '@/config/index'
import { http } from '@/utils/http'

export function save(data) {
    return http.request({
        method: 'POST',
        url: '/v1/SeekHelp/save',
        data,
    })
}

export function change(data) {
    return http.request({
        method: 'POST',
        url: '/v1/SeekHelp/change',
        data,
    })
}

export function update(data) {
    return http.request({
        method: 'POST',
        url: '/v1/SeekHelp/update',
        data,
    })
}

export function read(data) {
    return http.request({
        method: 'GET',
        url: '/v1/SeekHelp/read',
        data,
    })
}
