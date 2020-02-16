import styled from 'styled-components';

const ExpiredStyle = styled.div`
	top: 0;
	bottom: 0;
	z-index: -1;
	opacity: 0;
	transform: translate(0, -50vh);

	position: fixed;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100vh;
	width: 100vw;
	transition: all 200ms ease;
	/* & * {
		transition: all 100ms ease;
	} */
	&.show {
		transform: translate(0, 0);
		opacity: 1;
		z-index: 5000;
		&:hover {
			cursor: none;
		}
	}
	.jesseeit-container {
		height: 100px;
		position: absolute;
		width: 100%;
		max-width: 600px;
		/* transform: translate(0px, -10vh); */
		overflow: overlay;
		margin-top: 20px;
		z-index: 2;
		/* .block-offset {
			display: block;
			width: 100%;
			height: 100px;
		} */
		.jesseeit-word {
			display: inline-block;
			color: #313031;
			color: black;
			font-size: 40px;
			line-height: 50px;
			font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
				Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
			opacity: 0.1;
			padding-right: 0.8ch;
			z-index: 2;
			&.reveal {
				color: white;
				opacity: 1;
			}
			&.revealed {
				color: white;
				opacity: 0.5;
			}
		}
	}
	.flash-word {
		color: white;
		font-size: 60px;
		transform: translate(0px, -10vh);
		z-index: 4;
	}
	.horizon {
		position: absolute;
		display: block;
		border-bottom: 1px solid red;
		height: 100px;
		width: 100%;
		max-width: 600px;
		opacity: 0.5;
		transform: translate(0px, -10vh);
		z-index: 3;
	}
	.jesseeit-background {
		position: fixed;
		top: 0;
		background: #222222;
		height: 120vh;
		width: 100vw;
		z-index: 1;
	}
`;

export default ExpiredStyle;
