
import config from '@/config/index'
import { http } from '@/utils/http'

export function query(data) {
    return http.request({
        method: 'GET',
        url: '/v1/JobUpkeep/query',
        data,
    })
}

export function assign_query(data) {
    return http.request({
        method: 'GET',
        url: '/v1/JobUpkeep/assign_query',
        data,
    })
}

export function read(data) {
    return http.request({
        method: 'GET',
        url: '/v1/JobUpkeep/read',
        data,
    })
}

export function del(data) {
    return http.request({
        method: 'POST',
        url: '/v1/JobUpkeep/delete',
        data,
    })
}

export function save(data) {
    return http.request({
        method: 'POST',
        url: '/v1/JobUpkeep/save',
        data,
    })
}

export function update(data) {
    return http.request({
        method: 'POST',
        url: '/v1/JobUpkeep/update',
        data,
    })
}
