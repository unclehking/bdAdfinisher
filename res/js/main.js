
//移动版 输入搜索关键词时隐藏导航
document.addEventListener('DOMContentLoaded', ()=>{
	var bNav = document.querySelector("#navs");
	var kw = document.querySelector("#index-kw");
	kw.onfocus = function(){
		bNav.style.display = "none";
	};
	kw.onblur = function(){
		bNav.style.display = "block";
	};
});
