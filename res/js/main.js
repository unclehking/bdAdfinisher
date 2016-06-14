//设置歌词背景图片
function setLrcBg(src,fe){
	let t = fe.querySelector(".link-wrapper");
	if(!t.querySelector("img")){
		t.innerHTML = `<img src="${src}" />`;
	}else{
		t.querySelector("img").src = src;
	}
}

//双击显示歌词区域进入/退出全屏“ktv”歌词模式
document.addEventListener('DOMContentLoaded', ()=>{
	let HKingTarget = document.querySelector("#lrcCol");
	if(!HKingTarget){
		return;
	}
	let tImg = HKingTarget.querySelector(".album a img");
	tImg.addEventListener('load', ()=>{
		setLrcBg(tImg.src,HKingTarget);
	});
	HKingTarget.addEventListener('dblclick', ()=>{
		if(document.webkitFullscreenElement != null){
			document.webkitCancelFullScreen();
		}else {
			HKingTarget.webkitRequestFullScreen();
		};
	});
});
