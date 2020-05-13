
export function 用户刷新token(data) {
    return http.request({
        method: 'POST',
        url: '/v1/api/refresh_token',
        data,
    })
}

export function 用户登录(data) {
    return http.request({
        method: 'POST',
        url: '/v1/api/login',
        data,
    })
}

export function 用户退出(data) {
    return http.request({
        method: 'POST',
        url: '/v1/api/logout',
        data,
    })
}