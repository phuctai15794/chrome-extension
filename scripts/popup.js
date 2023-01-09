console.log('Popup');

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
	console.log('Popup: ', request);
	return true;
});
