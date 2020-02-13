let contextMenus = {};

contextMenus.generateTextToRead = chrome.contextMenus.create(
	{ title: 'Jesseeit', contexts: ['selection'] },
	() => {
		if (chrome.runtime.lastError) {
			console.error(chrome.runtime.lastError.message);
		}
	}
);

const contextMenuHandler = (info, tab) => {
	if (info.menuItemId === contextMenus.generateTextToRead) {
		chrome.tabs.executeScript({
			file: 'src/generateTextToRead.js'
			// file: './index.js'
		});
	}
};

chrome.contextMenus.onClicked.addListener(contextMenuHandler);
