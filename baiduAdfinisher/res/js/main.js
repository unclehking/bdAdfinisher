//设置歌词背景图片
setLrcBg = (src,fe) =>{
	let t = fe.querySelector(".link-wrapper");
	if(!t.querySelector("img")){
		t.innerHTML = `<img src="${src}" />`;
	}else{
		t.querySelector("img").src = src;
	}
}

//双击显示歌词区域进入/退出全屏“ktv”歌词模式
document.addEventListener('DOMContentLoaded', ()=>{
	let lrcTarget = document.querySelector("#lrcCol");
	if(!lrcTarget){
		return;
	}
	let tImg = lrcTarget.querySelector("img");
	tImg.addEventListener('load', ()=>{
		setLrcBg(tImg.src,lrcTarget);
	});
	lrcTarget.addEventListener('dblclick', ()=>{
		if(document.webkitFullscreenElement != null){
			document.webkitCancelFullScreen();
		}else {
			lrcTarget.webkitRequestFullScreen();
		};
	});
	setLrcBg(tImg.src,lrcTarget);
});
