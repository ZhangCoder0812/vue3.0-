
import service from '@/utils/request'

// 验证码
export function getSms(data) {
  service.request({
    method: 'post',
    url: '/getSms/',
    data
  })
}


export function Login() {
  service.request({
    method: 'post',
    url: '/Login',
  })
}
