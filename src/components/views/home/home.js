import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getWeather } from '../../../store/weather/thunks'

const Home = (props) => {

	const [load, loadApi] = useState(false)

	useEffect(() => {
		if (!load) {
			console.log('oi');
    	props.getWeather();
			loadApi(true);
		}
  });
	

	return (
	  <div>
	  	<div>
	  		<h1>São Paulo</h1>
	  		{
	  			console.log(props.weather)
	  		}
	  	</div>
	  </div>
	)
}

const mapStateToProps = (state) => ({
	weather: state.weather
})

export default connect(mapStateToProps, {
	getWeather
})(Home)