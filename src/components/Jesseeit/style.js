import styled from 'styled-components';

const ExpiredStyle = styled.div`
	position: fixed;
	top: 0;
	bottom: 0;
	z-index: -1;
	opacity: 0;
	transform: translate(0, -50vh);
	transition: all 200ms ease;
	&.show {
		transform: translate(0, 0);
		opacity: 1;
		z-index: 5000;
		&:hover {
			cursor: none;
		}
	}
	.jesseeit-background {
		position: fixed;
		top: 0;
		background: black;
		height: 120vh;
		width: 100vw;
		z-index: 1;
	}
	.jesseeit-container {
		position: fixed;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
		width: 100vw;
		z-index: 2;
		.jesseeit-word {
			position: absolute;
			color: white;
			font-size: 120px;
			font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
				Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
			opacity: 0;
			&.reveal {
				opacity: 1;
			}
		}
	}
`;

export default ExpiredStyle;
