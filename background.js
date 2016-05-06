/*HKing 2016-03-10*/
chrome.browserAction.onClicked.addListener(function(tab) {

	chrome.tabs.getAllInWindow(null, function(tabs) {
		var baidu ;
		for (var i = 0; i < tabs.length; i++) {
			var t = tabs[i].url;
			if (t.match('www.baidu.com')) {
				var tab = tabs[i];
				baidu = tabs[i];
			}
		}
		if(baidu){
			chrome.tabs.update(baidu.id, {selected:true});
		}else{
			chrome.tabs.create({"url":"http://www.baidu.com/", "selected":true});
		};
	});

});
alert(1);
