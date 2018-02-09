DMY_IMG = "javascript/dmy.jpg";
let iplImage = new IplImage();
let done=0;
//指定数(w*h個)のImgタグを追加する
function setImg(w,h){
	//改行を追加する
	function setBr(){
		let l=document.getElementById('n');
		let e=document.createElement("br");
		l.appendChild(e);	
	}
	function clone(i){
		let l=document.getElementById('n');
		let e=document.createElement("img");
		let t=document.createTextNode(" ");
		e.setAttribute('id','out'+i);
		l.appendChild(e);
		l.appendChild(t);
	}
	let k =0;
	for(let i=0;i<h;i++){
		for(let j=0;j<w;j++){
			clone(k++);
		}
		setBr();
	}
}

//未使用
function reset(){
	let l=document.getElementById('n');
	let childs=l.childNodes;
	for(let i=0;i<childs.length;i++){
		l.removeChild(childs[i]);
	}
}
//画像を分割する
function Divide(iplImage,divW=1,divH=1){
	//reset();
	if(done){
		alert("ページこうしんして？");
		return ;
	}
	if(!iplImage.width){
		alert("がぞうえらんで？");
		return ;
	}
	if(iplImage.width<divW||iplImage.height<divH){
		alert("わけすぎ？");
		return ;
	}
	let srcImage = cvCloneImage(iplImage);
	let outImage=[];
	let w=Math.floor(srcImage.width/divW);
	let h=Math.floor(srcImage.height/divH);
	setImg(divW,divH);
	for(let i=0;i<divH*divW;i++){
		outImage[i]= cvCreateImage(w,h);
	}
	for(let k=0;k<divH*divW;k++){
		let jSrc=w*(k%divW);
		let iSrc=h*(Math.floor(k/divW));
		for(let i = 0 ; i < h ; i++){
			for(let j = 0 ; j < w ; j++){
				outImage[k].RGBA[(j + i * w) * CHANNELS]
				= srcImage.RGBA[((j+jSrc) + (i+iSrc) * srcImage.width) * CHANNELS]; //R
				outImage[k].RGBA[1 + (j + i * w) * CHANNELS]
				= srcImage.RGBA[1 + ((j+jSrc) + (i+iSrc) * srcImage.width) * CHANNELS]; //G
				outImage[k].RGBA[2 + (j + i * w) * CHANNELS]
				= srcImage.RGBA[2 + ((j+jSrc) + (i+iSrc) * srcImage.width) * CHANNELS]; //B
				outImage[k].RGBA[3 + (j + i * w) * CHANNELS]
				= srcImage.RGBA[3 + ((j+jSrc) + (i+iSrc) * srcImage.width) * CHANNELS]; //alpha
			}
		}
	}
	for(let i=0;i<divH*divW;i++){
		cvShowImage('out'+i, outImage[i]);
	}
	done=1;
}
