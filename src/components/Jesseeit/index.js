import React, { useState, useEffect } from 'react';
import JesseeitStyle from './style';

const Jesseeit = () => {
	const [selectedText, setSelectedText] = useState('');

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

	const initWords = selectedText => {
		return (
			<>
				{selectedText.map((word, index) => {
					let speed;

					if (index === 0) {
						speed = 400;
					} else if (index < 4) {
						speed = 300;
					} else if (index < 9) {
						speed = 200;
					} else {
						// 60,000 / 150 = 400wpm
						// 60,000 / 120 = 500wpm
						// 60,000 / 100 = 600wpm
						speed = 150;
						// speed = 5000;
					}

					const pattern = new RegExp(/\.$/);
					const lastWord = pattern.test(word);

					if (lastWord) speed = 300;

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
		const words = document.querySelectorAll('.jesseeit-word');
		const flashWord = document.querySelector('.flash-word');

		for (const [index, word] of words.entries()) {
			const speed = +word.dataset.speed;

			word.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
			word.classList.add('reveal');

			flashWord.innerText = word.innerText;

			await timeOut(speed);
			word.classList.add('revealed');
			word.classList.remove('reveal');
		}

		await timeOut(2000);
		setSelectedText('');
	};

	return (
		<JesseeitStyle
			className={selectedText.length !== 0 ? 'show' : ''}
			onClick={() => {
				setSelectedText('');
			}}
		>
			<div className="flash-word"></div>
			<div className="horizon"></div>
			<div className="jesseeit-container">
				{/* <div className="block-offset"></div> */}
				{selectedText ? initWords(selectedText) : null}
			</div>
			<div className="jesseeit-background"></div>
		</JesseeitStyle>
	);
};

export default Jesseeit;
