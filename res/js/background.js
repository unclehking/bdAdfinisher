/*HKing 2016-03-10*/
const  url="d3d3LmJhaWR1LmNvbQ==";
chrome.browserAction.onClicked.addListener((tab) =>{
	chrome.tabs.getAllInWindow(null, fuckBat = tabs =>{
		for(var t of tabs){
			if (t.url.match(atob(url))) {
				fuckBat.bTab = true;
				chrome.tabs.update(t.id, {selected:true});
				break;
			}
		}
		!fuckBat.bTab && chrome.tabs.create({"url":`https://${atob(url)}`, "selected":true});
	});
});
