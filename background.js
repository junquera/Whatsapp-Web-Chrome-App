chrome.app.runtime.onLaunched.addListener(function() {
	chrome.windows.create({url: 'http://web.whatsapp.com', 
		    				frame: 'none',
							width: 620, height: 500, 
							type: 'popup'
							}
	);
});