
import config from '@/config/index'
import { http } from '@/utils/http'

export function save(data) {
    return http.request({
        method: 'POST',
        url: '/api/JobSeekHelp/save',
        data,
    })
}

export function del(data) {
    return http.request({
        method: 'POST',
        url: '/api/JobSeekHelp/delete',
        data,
    })
}

export function change(data) {
    return http.request({
        method: 'POST',
        url: '/api/JobSeekHelp/change',
        data,
    })
}

export function update(data) {
    return http.request({
        method: 'POST',
        url: '/api/JobSeekHelp/update',
        data,
    })
}

export function query(data) {
    return http.request({
        method: 'POST',
        url: '/api/JobSeekHelp/query',
        data,
    })
}

export function read(data) {
    return http.request({
        method: 'POST',
        url: '/api/JobSeekHelp/read',
        data,
    })
}

export function sendToOther(data) {
    return http.request({
        method: 'POST',
        url: '/api/JobSeekHelp/sendToOther',
        data,
    })
}
