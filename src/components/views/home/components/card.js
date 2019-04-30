import React from 'react'
import styled from 'styled-components'
import colors from '../../../layout/styled-components/colors'

const CardContent = styled.li`
	background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
	border-radius: 3px;
	width: 150px;
	height: 200px;
	box-shadow: 0 10px 12px rgba(0,0,0,0.2);
	display: flex;
	flex-flow: column;
	align-items: center;
	padding: 10px 0;
	margin: 0 15px;
`;

const City = styled.h1`
	color: #fff;
	padding-bottom: 3px;
	border-bottom: 2px solid #6f86d6;
`;

const Middle = styled.div`
	flex: 1;
`;
const Image = styled.img`
	width: 50px;
`;
const Temp = styled.div`
	font-size: 50px;
	font-weight: bold;
	color: ${colors.primary};
`;

const Top = styled.div`
	flex: 1;
`;

const Bottom = styled.div`
	display: flex;
	flex-flow: row wrap;
	flex: 1;
`;

const Max = styled.div`
	color: ${colors.secondary};
	font-size: 20px;
	font-weight: bold;
	margin: 5px;
`;

const Min = styled.div`
	color: ${colors.secondary};
	font-size: 20px;
	font-weight: bold;
	margin: 5px;
`;

const Black = styled.span`
	color: #000;
	font-weight: 300;
`;

const Card = (props) => (
	<CardContent>
		<Top>
			<City>{props.name}, {props.sys.country}</City>
		</Top>
		<Middle>
		{
			props.weather && props.weather.map((w, key) =>
				<Image key={key} src={'http://openweathermap.org/img/w/' + w.icon + '.png'} alt={w.main} />	
			)				
		}
		</Middle>
		<Temp>{props.main.temp.toFixed(0)}°</Temp>
		<Bottom>
			<Min>{props.main.temp_min.toFixed(0)}°</Min>
			<Max>{props.main.temp_max.toFixed(0)}°</Max>
		</Bottom>
	</CardContent>
)

export default Card;