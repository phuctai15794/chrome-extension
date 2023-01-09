console.log('Content');

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
	console.log('Content: ', request);
	return true;
});
