
/*HKing 2016-11-10*/
const  url="d3d3LmJhaWR1LmNvbQ==";
browser.browserAction.onClicked.addListener((tab) =>{
	function logTabs(tabs){
		for(tab of tabs){
			if(tab.url.match(atob(url))){
				logTabs.bTab = true;
				browser.tabs.update(tab.id, {active: true});
				break;
			}
		}
		!logTabs.bTab && browser.tabs.create({url:`https://${atob(url)}`});
	}
	function onError(error) {
		console.log(`Error: ${error}`);
	}
	var querying = browser.tabs.query({currentWindow: true});
	querying.then(logTabs, onError);

});
