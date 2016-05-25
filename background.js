/*HKing 2016-03-10*/
chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.tabs.getAllInWindow(null, function(tabs) {
		var bTab = {} ;
		for(var i in tabs){
			if (tabs[i].url.match('www.baidu.com')) {
				bTab.id = tabs[i].id;
				break;
			}
		}
		if(bTab.id) chrome.tabs.update(bTab.id, {selected:true});
		else chrome.tabs.create({"url":"https://www.baidu.com/", "selected":true});
	});

});
