chrome.app.runtime.onLaunched.addListener(function() {
	chrome.browser.openTab({url: 'http://web.whatsapp.com'});
});

// https://developer.chrome.com/extensions/declare_permissions