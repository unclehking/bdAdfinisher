

const url="www.baidu.com";
document.querySelector("#goBD").addEventListener('click',function(){
	chrome.tabs.getAllInWindow(null, fuckBat = tabs =>{
		for(var t of tabs){
			if (t.url.match(url)) {
				fuckBat.bTab = true;
				chrome.tabs.update(t.id, {selected:true});
				break;
			}
		}
		!fuckBat.bTab && chrome.tabs.create({"url":`https://${url}`, "selected":true});
	});
})




