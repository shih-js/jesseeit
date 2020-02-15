console.log('>>> Triggered Jessit!');

let getSelectedText = () => {
	let text = '';
	if (window.getSelection) {
		text = window.getSelection().toString();
	} else if (document.selection && document.selection.type != 'Control') {
		text = document.selection.createRange().text;
	}
	return text;
};

// create new empty div element.
// prepend to body.

let selectedText = getSelectedText();
let words = selectedText.replace(/\n/g, '').split(' ');

words.map(word => {
	// console.log(word);
	// append to empty div element created above.
	document.querySelector('body').append(word);
});

// document.querySelector('body').prepend(`${selectedText}`);

document.onkeypress = e => {
	const { key } = e;
	if (key === 'c' || key === 'C') {
		console.log(words.length);
	}
};
