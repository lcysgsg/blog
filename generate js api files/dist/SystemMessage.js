
import config from '@/config/index'
import { http } from '@/utils/http'

export function query(data) {
    return http.request({
        method: 'GET',
        url: '/v1/SystemMessage/query',
        data,
    })
}

export function doRead(data) {
    return http.request({
        method: 'GET',
        url: '/v1/SystemMessage/doRead',
        data,
    })
}

export function read(data) {
    return http.request({
        method: 'GET',
        url: '/v1/SystemMessage/read',
        data,
    })
}
