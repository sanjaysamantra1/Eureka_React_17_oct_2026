export function authInterceptor(request) {
    console.log('Auth interceptor called...')
    // const token = localStorage.getItem('accessToken');
    const token = 'ABCDEF-123456'; // token received from backend during login
    if (token) {
        request.headers.Authorization = `bearer ${token}`;
    }
    return request;
}