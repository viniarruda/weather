import {
	loadWeatherRequested,
	loadWeatherFulfilled,
	loadWeatherRejected
} from './actions'
import { list } from './queries'

export const getWeather = () => async (dispatch, getState) => {
  
  dispatch(loadWeatherRequested())
  const response = await list()
  
  if(!response) {
    const error = 'No have weather'
    dispatch(loadWeatherRejected(error))

    throw 'Error' 
  }
  
  dispatch(loadWeatherFulfilled(response))
  return true
}