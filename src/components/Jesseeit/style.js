import styled from 'styled-components';

const ExpiredStyle = styled.div`
	top: 0;
	bottom: 0;
	z-index: -1;
	opacity: 0;
	transform: translate3d(0, -50vh, 0);

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
		transform: translate3d(0, -60px, 0);
		opacity: 1;
		z-index: 5000;
		&:hover {
			cursor: none;
		}
	}
	.jesseeit-container {
		height: 80px;
		position: absolute;
		width: 100%;
		max-width: 600px;
		/* transform: translate3d(0px, -10vh); , 0*/
		overflow: overlay;
		/* margin-top: 20px; */
		z-index: 2;
		/* .block-offset {
			display: block;
			width: 100%;
			height: 100px;
		} */
		.jesseeit-word {
			display: block;
			position: absolute;
			/* color: #313031; */
			color: white;
			font-size: 60px;
			line-height: 60px;
			font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
				Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
			opacity: 0;
			padding: 0;
			text-align: center;
			width: 100%;
			z-index: 2;
			&.reveal {
				/* color: white; */
				opacity: 1;
			}
			/* &.revealed {
				color: white;
				opacity: 1;
			} */
		}
	}
	/* .flash-word {
		color: white;
		font-size: 60px;
		transform: translate3d(0px, -10vh, 0);
		z-index: 4;
	} */
	.horizon {
		position: absolute;
		display: block;
		border-bottom: 1px solid red;
		height: 80px;
		width: 100%;
		max-width: 600px;
		opacity: 0.2;
		z-index: 3;
	}
	.jesseeit-background {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		background: #222222;
		height: 150vh;
		width: 150vw;
		z-index: 1;
	}
`;

export default ExpiredStyle;
