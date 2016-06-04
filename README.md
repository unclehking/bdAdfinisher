# baiduAdfinisher
屏蔽百度线上产品页面广告chrome扩展程序，兼容各大“国产”浏览器急速版(360、搜狗、猎豹、百度、UC、QQ等)以及其他webkit内核浏览器。

<font color="#ff0000">
### 离线chrome扩展程序（.crx文件）安装方式：<br />
1、打开chrome扩展程序页面(chrome://extensions/ 或者 菜单 > 更多工具> 扩展程序)；<br />
2、把.crx文件拖进该页面（国产浏览器直接拖入任意页面）。<br />
</font>

效果截图： <br />
![github](https://raw.githubusercontent.com/unclehking/baiduAdfinisher/master/sp01.png "github")  <br />



 ###2016-05-25<br />
 现已支持百度全线线上产品页面广告屏蔽(搜索、新闻、贴吧、知道、音乐、图片、视频、文库、百科等)。<br />

 ```java
 /*贴吧*/
 .widget-ads , .widget-ads ~ div,
 #thread_list > li:not([class^=" j_thread_list"]),
 .aside > div > div > div[id$="ad"],
 .p_postlist > div:not([class^="l_post"]),
 /*音乐*/
 .ad-banner,
 /*视频*/
 #search-union-ad,.text-advertise,
 /*百科*/
 .bottom-promotion,
 /*文库*/
 #fengchaoad,.baichuan-slot,
 /*新闻*/
 #ecomAdDiv_3,#ecomAdDiv_1,
 /*知道*/
 #union-search_bottom{
 	display: none !important;
 	height: 0px;
 	overflow: hidden;
 }
 /*贴吧*/
 #pb_adbanner{
 	position: absolute;
 	top: -999999px;
 }
 ```

 ###2016-05-26<br />
 新增：点击扩展图标打开(如果已打开则切换到)百度页面，当书签用，省去每次输入地址链接的麻烦 ^_^<br />
###2016-06-04<br />
 ES6编写 / "use strict"
 ```java
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
 ```

 持续更新中...
