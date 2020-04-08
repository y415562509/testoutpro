import { post } from '@/plugins/request.js'

export function login (params) {
  return post('api/login', params)
}
