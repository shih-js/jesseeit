import React, { useState, useEffect } from 'react';
import JesseeitStyle from './style';

const Jesseeit = () => {
	const [selectedText, setSelectedText] = useState([]);

	// const getSelectedText = () => {
	// 	let text = '';
	// 	if (window.getSelection) {
	// 		text = window.getSelection().toString();
	// 	} else if (document.selection && document.selection.type != 'Control') {
	// 		text = document.selection.createRange().text;
	// 	}
	// 	return text;
	// };

	useEffect(() => {
		const bodyEl = document.getElementsByTagName('body')[0];
		let isActive = false;

		const initializeEffect = e => {
			const text = e.target.innerText;
			const words = text.replace(/\n/g, ' ').split(' ');
			setSelectedText(words);
			animateWords();
		};

		bodyEl.addEventListener('keydown', e => {
			const { key } = e;

			if (isActive) return;

			if (key === 'c') {
				isActive = true;
				bodyEl.addEventListener('click', initializeEffect);
			}
		});

		bodyEl.addEventListener('keyup', e => {
			const { key } = e;

			if (key === 'c' && isActive) {
				isActive = false;
				bodyEl.removeEventListener('click', initializeEffect);
			}
		});
	}, []);

	const initWords = selectedText => {
		return (
			<>
				{selectedText.map((word, index) => {
					let speed;

					if (index === 0) {
						speed = 800;
					} else if (index < 4) {
						speed = 500;
					} else if (index < 9) {
						speed = 300;
					} else {
						speed = 150;
					}

					return (
						<div className="jesseeit-word" key={index} data-speed={speed}>
							{word}
						</div>
					);
				})}
			</>
		);
	};

	const timeOut = ms => {
		return new Promise(resolve => setTimeout(resolve, ms));
	};

	const animateWords = async () => {
		// todo: adjust animation timing.
		// pause for 1000ms after each sentence.

		const words = document.querySelectorAll('.jesseeit-word');

		for (const word of words) {
			const speed = +word.dataset.speed;
			word.classList.add('reveal');
			await timeOut(speed);
			word.classList.remove('reveal');
		}
		setSelectedText('');
	};

	return (
		<JesseeitStyle
			className={selectedText.length !== 0 ? 'show' : ''}
			onClick={() => {
				setSelectedText('');
			}}
		>
			<div className="jesseeit-container">
				{selectedText ? initWords(selectedText) : null}
			</div>
			<div className="jesseeit-background"></div>
		</JesseeitStyle>
	);
};

export default Jesseeit;
