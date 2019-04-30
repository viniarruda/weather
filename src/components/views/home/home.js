import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getWeather } from '../../../store/weather/thunks'
import Container from './container/container'
import List from './components/list'
import Card from './components/card'

const Home = (props) => {

	const [load, loadApi] = useState(false)

	useEffect(() => {
		if (!load) {
    	props.getWeather();
			loadApi(true);
		}
  });

	const { weather } = props
	return (
	  <Container>
  		{
  			weather.list && 
		  		<List>
		  		{
		  			weather.list.list.map((i, key) => 
		  				<Card key={key} {...i} />
	  				)
		  		}
		  		</List>
  		}
  		{
  			console.log(weather)
  		}
	  </Container>
	)
}

const mapStateToProps = (state) => ({
	weather: state.weather
})

export default connect(mapStateToProps, {
	getWeather
})(Home)