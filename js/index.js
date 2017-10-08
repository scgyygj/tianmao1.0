
/////////////////////
//   new_element=document.createElement("script");
// 　　new_element.setAttribute("type","text/javascript");
// 　　new_element.setAttribute("src","base.js");// 在这里引入了a.js
// 　　document.body.appendChild(new_element);
	let bannerLeft=document.getElementsByClassName('banner-left')[0];
	let lis1=document.getElementsByClassName('bannerLeftli');
	console.log(lis1);
	let items=document.getElementsByClassName('items');
	console.log(items)
	// 侧面点击按扭颜色
	let color=['','skyblue','#03ff88','#05ebff','#3df50b','#f5e00b','#e65ea5','#975ee6','#868686']  
	//banner背景色
	let bannerbgr=['#ff9800','#6f3f33','#e8e8e8','#7f22c3','#fe7b1e','#e8e8e8']
    let colorli=['#FF9800','#DBFF6D','#3BFF6C','#94E6FF','#FFDFBA','#5275FF','#5DE7FF','#A2FCFF','#8E88FF','#33FFE6','#FFCF47','#FFB6AE','#FFBFDA','#FFFB03','#FFACCD']
	// let bannerbgr=[#ff9800,#6f3f33,#e8e8e8,#7f22c3,#fe7b1e,#e8e8e8]
	for(let i=0;i<lis1.length;i++){
		lis1[i].onmouseover=function(){
			items[i].style.display='block';

		}
		lis1[i].onmouseout=function(){
			items[i].style.display='none';
		}
	}
	let yuan=document.getElementsByClassName('yuan')[0];
	let divs=yuan.getElementsByTagName('div');
	let bannerImg=document.getElementsByClassName('bannerImg');
	let bannerbg=document.getElementsByClassName('banner')[0];
	//点圆点换图片方法一
	for(let i=0;i<divs.length;i++){

		divs[i].onclick=function(){

			for(let j=0;j<bannerImg.length;j++){
				animate((bannerImg[j]),{opacity:0});
				// animate(bannerba,{background:bannerbgr[i]})
				divs[j].style.background='#a2a2a2';
			}
			divs[i].style.background='#fff';
			animate(bannerImg[i],{opacity:1});
			// animate(bannerba,{background:bannerbgr[i]})
	        bannerbg.style.background=bannerbgr[i];
			num=i;
		}
			}
    //自动轮播
    let num=0;
    let time=window.setInterval(fn,3000);
    function fn(){

       num++;
       if(num==bannerImg.length){
       	num=0;
       }
       for (let i=0;i<bannerImg.length;i++){
       	animate(bannerImg[i],{opacity:0});
       	divs[i].style.background='#a2a2a2';
       }
       	animate(bannerImg[num],{opacity:1});
       	// animate(bannerbg,{background:bannerbgr[num]})
       divs[num].style.background='#fff';
       bannerbg.style.background=bannerbgr[num];
    }
	// 鼠标移入停止自动轮播
	
	  bannerbg.onmouseover=function(){
	  	clearInterval(time);
	  }  
	  bannerbg.onmouseout=function(){
	  	// num=i;
	  	time=window.setInterval(fn,3000);

	  }



//楼层跳转
let floor=document.querySelectorAll('.meili-body');
let xihuan=document.querySelector('.xihuan-box');
let anniu=document.querySelectorAll('.floor>li');
let ch=window.innerHeight;
let flag1=true;

// 所有楼层到文档顶部的距离
let floorArr=[] ;                  
floor.forEach(
	elements=>{
		floorArr.push(elements.offsetTop);
	})

//点击按钮显示当前页面
   anniu.forEach((elements,index)=>{
   	if(index==0){
   		return;
   	}
      	elements.onclick=()=>{
      		flag1=false;
      		for(let i=1;i<anniu.length;i++){
				anniu[i].style.background='none';
      		}
      		elements.style.background=color[index];
           	animate(document.documentElement||document.body,{scrollTop:floorArr[index-1]},function(){
           		flag1=true;
           	})
            
      	}
      	
      }	)

//按钮颜色随页面滚动变化
    window.onscroll = function () {
        if (!flag1) {
            return;
        }
        floorArr.forEach((value, index) => {
            let scrolltop = document.documentElement.scrollTop || document.body.scrollTop;      //超出浏览器的距离
			console.log(scrolltop);
            // if(flag1){
            if (ch + scrolltop >= value - 100) {
                for (let i = 0; i < anniu.length; i++) {
                    anniu[i].style.background = 'none';
                }
                anniu[0].style.background = '#ff0036';
                anniu[anniu.length - 1].style.background = '#cac8c8';
                anniu[index].style.background = color[index];
            }
            // }
        })
// 中间出现的搜索框

        let scrolltop=document.documentElement.scrollTop||document.body.scrollTop;
        let scropac = document.querySelector('.scropac');

// console.log(scropac);
        if (scrolltop > 500) {

            if (flag1) {
                console.log(1)
                flag1 = !flag1;
                animate(scropac, {top: 0});
            }
        }
        else if (scropac <= 500) {
            if (!flag1) {
                flag1 = !flag1;
                console.log(flag1);
                animate(scropac, {top: -50});
            }
        }

    }


//左侧边栏出现
setInterval(function(){
 let bodys=document.querySelector('body');
let webchao=document.documentElement.scrollTop||document.body.scrollTop;
 let LeftBox=document.querySelector('.floor')
 if(webchao>=1500){
 	LeftBox.style.opacity=1;
 }
 else{
 	LeftBox.style.opacity=0;
 }
},10);
//我的淘宝
let tb=document.querySelector('.r1');
let taobaoop=document.querySelector('.r1>.taobaoopact');
tb.onmouseover=function () {
	taobaoop.style.opacity='1';
}
tb.onmouseout=function () {
    taobaoop.style.opacity='0';
}
//收藏夹
let r4=document.querySelector('.r4')
let shoucang=document.querySelector('.shoucangpact')
r4.onmouseover=function () {
    shoucang.style.opacity='1';
}
r4.onmouseout=function () {
    shoucang.style.opacity='0';
}

//手机版
let r51=document.querySelector('.r51')
let shoujiban=document.querySelector('.shoujiban')

r51.onmouseover=function () {
    shoujiban.style.opacity='1';
}
r51.onmouseout=function () {
    shoujiban.style.opacity='0';
}
//商家
let r53=document.querySelector('.r53')
let shangjiajs=document.querySelector('.shangjiajs')

r53.onmouseover=function () {
    shangjiajs.style.opacity='1';
}
r53.onmouseout=function () {
    shangjiajs.style.opacity='0';
}
//网站导航
let r54=document.querySelector('#iconyanse')
let daohangjs=document.querySelector('.daohangjs')

r54.onmouseover=function () {
    daohangjs.style.opacity='1';
}
r54.onmouseout=function () {
    daohangjs.style.opacity='0';
}
//侧边
 let ce=document.querySelectorAll('.ce1');
 let cey=document.querySelectorAll('.ce1js');
 ce.forEach((element,index)=>{
     element.onmouseover=function () {
         cey[index].style.opacity='1';
     }
     element.onmouseout=function () {
         cey[index].style.opacity='0';
     }
 })
let ceewmy=document.querySelector('.ceewm');
 let ceewm=document.querySelector('.bjy');
ceewm.onmouseover=function () {
    ceewmy.style.opacity='1';
}
ceewm.onmouseout=function () {
    ceewmy.style.opacity='0';
}
	  


  
