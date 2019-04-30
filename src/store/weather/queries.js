import api from '../../utils/api'
import axios from 'axios'

export const list = () => {
  return axios.get(api.url + '3469968,3448439&appid=' + api.key + '&units=metric')
  .then(res => res.data)
  .catch(err => err.response.data)
}

// http://api.openweathermap.org/data/2.5/group?id=3469968,3448439&units=metric&appid=d37352e39c14f524b81f6c4686bd7b6a
