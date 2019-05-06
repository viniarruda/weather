import styled from 'styled-components'

const Plane = styled.svg`
 	height: 100px;
 	width: 100%;
  transform-origin: 115px 115px;
  overflow: hidden;
  animation: 3.5s linear infinite loader-spin;
	.cal-loader__plane {
		fill: #fff;
	}
	.cal-loader__path {
		animation: 1.4s ease-in-out infinite loader-path;
		display: none;
	}
	@keyframes loader-spin {
	  to{
	    transform:translateX(100%);
	  }
	  from{
	    transform:translateX(0%);
	  }
	}
	@keyframes loader-path {
	  0%{
	    stroke-dasharray:  0, 580, 0, 0, 0, 0, 0, 0, 0;
	  }
	  50%{
	    stroke-dasharray: 0, 450, 10, 30, 10, 30, 10, 30, 10;
	  }
	  100%{
	    stroke-dasharray: 0, 580, 0, 0, 0, 0, 0, 0, 0;
	  }
	}
`;
export default Plane