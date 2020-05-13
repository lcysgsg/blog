
import config from '@/config/index'
import { http } from '@/utils/http'

export function update(data) {
    return http.request({
        method: 'GET',
        url: '/v1/Version/update',
        data,
    })
}
