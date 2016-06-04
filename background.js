/*HKing 2016-03-10*/
'use strict';
const  url="d3d3LmJhaWR1LmNvbQ==";
chrome.browserAction.onClicked.addListener((tab) =>{
	chrome.tabs.getAllInWindow(null, (tabs) =>{
		let bTab, ct=chrome.tabs;
		for(var i in tabs){
			if (tabs[i].url.match(atob(url))) {
				bTab = true;
				ct.update(tabs[i].id, {selected:true});
				break;
			}
		}
		if(!bTab) ct.create({"url":`https://${atob(url)}`, "selected":true});
	});
});
