console.log('Background');

// Notify to content to send data to web page when tab is updated
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
	const manifest = chrome.runtime.getManifest();
	const contentScripts = manifest.content_scripts;

	if (contentScripts.length > 0) {
		const matchesContentScripts = contentScripts.reduce((acc, cur) => {
			return [...acc, ...cur.matches];
		}, []);

		if (matchesContentScripts.length > 0) {
			chrome.tabs.query({ active: true, currentWindow: true, url: matchesContentScripts }, ([tab]) => {
				if (tab) {
					const data = {
						type: 'SEND_DATA_TO_WEB_PAGE',
						message: 'EXTENSION_IS_INSTALLED'
					};

					chrome.tabs.sendMessage(tab.id, data, function (response) {
						if (chrome.runtime.lastError) {
							console.log(chrome.runtime.lastError.message);
						}
					});
				}
			});
		}
	}
});

// Receive message from popup (normal), content (normal)
// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
// 	console.log('Background: ', request);
// 	return true;
// });

// Add logic codes to receive message on web page
// useEffect(() => {
//     window.addEventListener('message', function (event) {
//         // We only accept messages from ourselves
//         if (event.source === window) {
//             console.log(event);
//         }
//     });

//     return () => {
//         window.removeEventListener('message');
//     };
// }, []);
