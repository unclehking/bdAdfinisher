
//双击显示歌词区域进入/退出全屏“ktv”歌词模式
document.addEventListener('DOMContentLoaded', ()=>{
	let HKingTarget = document.querySelector("#lrcCol");
	if(!HKingTarget){
		return;
	}

	HKingTarget && HKingTarget.addEventListener('dblclick', ()=>{
		let imgSrc = HKingTarget.querySelector("a.log img").src;
		//console.log(imgSrc);
		//console.log(HKingTarget.querySelector(".link-wrapper"));
		HKingTarget.querySelector(".link-wrapper").innerHTML = '<img src="'+imgSrc+'" />'; //`<img src="${imgSrc}" />`;
		if(document.webkitFullscreenElement != null){
			document.webkitCancelFullScreen();
		}else {
			HKingTarget.webkitRequestFullScreen();
		};
	});
});
