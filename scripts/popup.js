console.log('Popup');

// Receive message from content (normal), background (e.g: onUpdated)
// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
// 	console.log('Popup: ', request);
// 	return true;
// });

// Send to background
// chrome.runtime.sendMessage({ action: 'Hello from popup to background' }, function (response) {
// 	if (chrome.runtime.lastError) {
// 		console.log(chrome.runtime.lastError.message);
// 	}
// });

// Send to content
// chrome.tabs.query({ active: true, currentWindow: true }, ([tab]) => {
// 	chrome.tabs.sendMessage(tab.id, { action: 'Hello from popup' }, function (response) {
// 		if (chrome.runtime.lastError) {
// 			console.log(chrome.runtime.lastError.message);
// 		}
// 	});
// });
