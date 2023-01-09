chrome.tabs.query({ active: true, currentWindow: true }, ([tab]) => {
	chrome.tabs.sendMessage(tab.id, { action: 'Hello from background' }, function (response) {
		if (chrome.runtime.lastError) {
			console.log(chrome.runtime.lastError.message);
		}
	});
});
