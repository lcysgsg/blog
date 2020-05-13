
import config from '@/config/index'
import { http } from '@/utils/http'

export function del(data) {
    return http.request({
        method: 'POST',
        url: '/v1/JobRepairs/delete',
        data,
    })
}

export function save(data) {
    return http.request({
        method: 'POST',
        url: '/v1/JobRepairs/save',
        data,
    })
}

export function update(data) {
    return http.request({
        method: 'POST',
        url: '/v1/JobRepairs/update',
        data,
    })
}

export function query(data) {
    return http.request({
        method: 'GET',
        url: '/v1/JobRepairs/query',
        data,
    })
}

export function index(data) {
    return http.request({
        method: 'GET',
        url: '/v1/JobRepairs/index',
        data,
    })
}

export function assign_query(data) {
    return http.request({
        method: 'GET',
        url: '/v1/JobRepairs/assign_query',
        data,
    })
}

export function assign_index(data) {
    return http.request({
        method: 'GET',
        url: '/v1/JobRepairs/assign_index',
        data,
    })
}

export function read(data) {
    return http.request({
        method: 'GET',
        url: '/v1/JobRepairs/read',
        data,
    })
}
