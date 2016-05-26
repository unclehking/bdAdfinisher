/*HKing 2016-03-10*/
chrome.browserAction.onClicked.addListener(function(tab) {
	chrome.tabs.getAllInWindow(null, function(tabs) {
		var bTab,url="www.baidu.com",ct=chrome.tabs;
		for(var i in tabs){
			if (tabs[i].url.match(url)) {
				bTab = true;
				ct.update(tabs[i].id, {selected:true});
				break;
			}
		}
		if(!bTab) ct.create({"url":"https://"+url, "selected":true});
	});
});
