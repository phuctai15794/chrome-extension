console.log('Content');

// Receive message from popup (normal), background (e.g: onUpdated)
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
	switch (request.type) {
		case 'SEND_DATA_TO_WEB_PAGE':
			window.postMessage(request.message, '*');
			break;

		default:
			break;
	}

	return true;
});

// Send to popup, background
// chrome.runtime.sendMessage({ action: 'Hello from popup to content' }, function (response) {
// 	if (chrome.runtime.lastError) {
// 		console.log(chrome.runtime.lastError.message);
// 	}
// });
