# baiduAdfinisher
去除百度搜索内容页广告chrome扩展程序(兼容各大“国产”浏览器急速版).

截图： <br />
<div>使用前：</div>
![github](https://raw.githubusercontent.com/unclehking/baiduAdfinisher/master/01.png "github")  
<div>安装扩展程序后：</div>
![github](https://raw.githubusercontent.com/unclehking/baiduAdfinisher/master/02.png "github")  

 <div>###离线chrome扩展程序（.crx文件）安装方式： </div>
 <div>1、打开chrome扩展程序页面 chrome://extensions/ 或者 菜单 > 更多工具> 扩展程序；</div>
 <div>2、把.crx文件拖进该页面（国产浏览器直接拖入任意页面）。</div>

 ###2015-05-24
 <div>1、新增百度知道等一系列搜索页广告屏蔽。</div>
 ```java
 /*百度贴吧搜索列表页*/
 .widget-ads , .widget-ads ~ div,
 /*百度音乐搜索列表页*/
 .ad-banner,
 /*百度视频搜索列表页*/
 #search-union-ad,.text-advertise,
 /*百度百科搜索列表页*/
 .bottom-promotion,
 /*百度文库搜索列表页*/
 #fengchaoad,.baichuan-slot,
 /*百度新闻搜索列表页*/
 #ecomAdDiv_3{
 	display: none !important;
 	height: 0px;
 	overflow: hidden;
 }
 ```

 持续更新中...
