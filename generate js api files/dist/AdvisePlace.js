
import config from '@/config/index'
import { http } from '@/utils/http'

export function read(data) {
    return http.request({
        method: 'POST',
        url: '/api/AdvisePlace/read',
        data,
    })
}
