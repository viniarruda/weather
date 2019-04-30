import api from '../../utils/api'
import axios from 'axios'

export const list = () => {
  return axios.get(api.url + '3448439&appid=' + api.key)
  .then(res => res.data)
  .catch(err => err.response.data)
}
