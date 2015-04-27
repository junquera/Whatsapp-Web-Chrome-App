chrome.app.runtime.onLaunched.addListener(function() {
	chrome.app.window.create('main.html', {state: 'maximized', bounds: {width: screen.availWidth,
      height: screen.availHeight}});
});