var firstPlay = true;
var vidPause = false;
var vidFrame = true;
var vidControls = true;

var vs1 = true;
var vs2 = false;
var vs3 = false;


///////////////////////////////////////////////////////////////
// ANIMATION FUNCTIONS
///////////////////////////////////////////////////////////////

function presets(){
	
	container.style.opacity = "1";	
						
	startAd();
	
}

function startAd(){
	
	startVideo();
	addClickTag();
	animate();
	
	if(firstPlay == true){
						
		
	}
		
	
}

function animate(){
	
	//Yellow and T1
	TweenLite.set(yellow_bar, {x:450, alpha:1});
	TweenLite.set([t1a,t1b], {x:100, alpha:0});
	
	TweenLite.set([t2,t3a,t3b,t3c,t3d,t3e,t3f,t3g,t3h], {x:100, alpha:0});
	TweenLite.set(l_txt_container, {width:0});
	TweenLite.set(logo, {scale:.8, alpha:0});
	
	TweenLite.to(yellow_bar, .5, {delay:.2, x:0, ease:Cubic.EaseOut});
	TweenLite.to(t1a, .7, {delay:.4, x:0, alpha:1, ease:Cubic.EaseOut});
	TweenLite.to(t1b, .7, {delay:.5, x:0, alpha:1, ease:Cubic.EaseOut});
	
	TweenLite.to(t2, .5, {delay:.7, x:0, alpha:1, ease:Cubic.EaseOut});
	
	TweenLite.to(t3a, .7, {delay:1, x:0, alpha:1,  ease:Cubic.EaseInOut});
	TweenLite.to(t3b, .7, {delay:1.1, x:0, alpha:1,  ease:Cubic.EaseInOut});
	TweenLite.to(t3c, .7, {delay:1.2, x:0, alpha:1,  ease:Cubic.EaseInOut});
	TweenLite.to(t3d, .7, {delay:1.3, x:0, alpha:1,  ease:Cubic.EaseInOut});
	TweenLite.to(t3e, .7, {delay:1.4, x:0, alpha:1,  ease:Cubic.EaseInOut});
	TweenLite.to(t3f, .7, {delay:1.5, x:0, alpha:1,  ease:Cubic.EaseInOut});
	TweenLite.to(t3g, .7, {delay:1.6, x:0, alpha:1,  ease:Cubic.EaseInOut});
	TweenLite.to(t3h, .7, {delay:1.7, x:0, alpha:1,  ease:Cubic.EaseInOut});
	
	TweenLite.to(l_txt_container, .5, {delay:2.5, width:105, ease:Power3.easeOut});
	TweenLite.to(logo, .5, {delay:3, scale:1, alpha:1, ease:Cubic.EaseOut});
	
	TweenLite.delayedCall(2, animateNav);
	
	moveShine();
	moveShine2();
	moveShine3();
	moveShine4();
	moveShine5();
	moveShine6();
	moveShine7();
	moveShine8();
		
}

function animateNav(){
	vid_nav.style.display ="block";
	TweenLite.set([n1,n1_over], {scale:1.05});
	TweenLite.set([n1,n1_over,n2,n3,n_line1,n_line2], {x:-20});
	TweenLite.set(n_txt, {scale:.9, alpha:0, z:.01});
	
	TweenLite.to(n3, .7, {delay:.1, x:0, alpha:1,  ease:Cubic.EaseOut});
	TweenLite.to(n_line2, .7, {delay:.2, x:0, alpha:1,  ease:Cubic.EaseOut});
	TweenLite.to(n2, .7, {delay:.3, x:0, alpha:1,  ease:Cubic.EaseOut});
	TweenLite.to(n_line1, .7, {delay:.4, x:0, alpha:1,  ease:Cubic.EaseOut});
	TweenLite.to([n1,n1_over], .7, {delay:.5, x:0, alpha:1,  ease:Cubic.EaseOut});
	
	TweenLite.to(n_txt, .5, {delay:1, scale:1, alpha:1, ease:Power2.easeOut});
	
	addNav2();
	addNav3();
}

function animateT1(){
	
	t1_container.style.display = "block";
	
	if(vs2 == true){
		
		TweenLite.to(t22, .5, {x:-50, alpha:0, ease:Power3.easeOut});
		TweenLite.to(t33a, .5, {delay:.1, x:-50, alpha:0,  ease:Power3.easeOut});
		TweenLite.to(t33b, .5, {delay:.2, x:-50, alpha:0,  ease:Power3.easeOut});
		TweenLite.to(t33c, .5, {delay:.3, x:-50, alpha:0,  ease:Power3.easeOut});
		TweenLite.to(t33d, .5, {delay:.4, x:-50, alpha:0,  ease:Power3.easeOut});
		TweenLite.to(t33e, .5, {delay:.5, x:-50, alpha:0,  ease:Power3.easeOut});
		TweenLite.to(t33f, .5, {delay:.6, x:-50, alpha:0,  ease:Power3.easeOut});
		TweenLite.to(t33g, .5, {delay:.7, x:-50, alpha:0,  ease:Power3.easeOut, onComplete:hideT2});
		
	}
	
	else if(vs3 == true){
		TweenLite.to(t222, .5, {sx:-50, alpha:0, ease:Power3.easeOut});
		TweenLite.to(t333a, .5, {delay:.1, x:-50, alpha:0,  ease:Power3.easeOut});
		TweenLite.to(t333b, .5, {delay:.2, x:-50, alpha:0,  ease:Power3.easeOut});
		TweenLite.to(t333c, .5, {delay:.3, x:-50, alpha:0,  ease:Power3.easeOut});
		TweenLite.to(t333d, .5, {delay:.4, x:-50, alpha:0,  ease:Power3.easeOut});
		TweenLite.to(t333e, .5, {delay:.5, x:-50, alpha:0,  ease:Power3.easeOut});
		TweenLite.to(t333f, .5, {delay:.6, x:-50, alpha:0,  ease:Power3.easeOut, onComplete:hideT3});
		
	}
	
	TweenLite.set([t2,t3a,t3b,t3c,t3d,t3e,t3f,t3g,t3h], {x:100, alpha:0});
	
	TweenLite.to(t2, .7, {delay:.7, x:0, alpha:1, ease:Cubic.EaseOut});
	TweenLite.to(t3a, .7, {delay:1, x:0, alpha:1,  ease:Cubic.EaseInOut});
	TweenLite.to(t3b, .7, {delay:1.1, x:0, alpha:1,  ease:Cubic.EaseInOut});
	TweenLite.to(t3c, .7, {delay:1.2, x:0, alpha:1,  ease:Cubic.EaseInOut});
	TweenLite.to(t3d, .7, {delay:1.3, x:0, alpha:1,  ease:Cubic.EaseInOut});
	TweenLite.to(t3e, .7, {delay:1.4, x:0, alpha:1,  ease:Cubic.EaseInOut});
	TweenLite.to(t3f, .7, {delay:1.5, x:0, alpha:1,  ease:Cubic.EaseInOut});
	TweenLite.to(t3g, .7, {delay:1.6, x:0, alpha:1,  ease:Cubic.EaseInOut});
	TweenLite.to(t3h, .7, {delay:1.7, x:0, alpha:1,  ease:Cubic.EaseInOut});
	
	
}

function animateT2(){
	t2_container.style.display = "block";
	
	if(vs1 == true){
		TweenLite.to(t2, .5, {x:-50, alpha:0, ease:Power3.easeOut});
		TweenLite.to(t3a, .5, {delay:.1, x:-50, alpha:0,  ease:Power3.easeOut});
		TweenLite.to(t3b, .5, {delay:.2, x:-50, alpha:0,  ease:Power3.easeOut});
		TweenLite.to(t3c, .5, {delay:.3, x:-50, alpha:0,  ease:Power3.easeOut});
		TweenLite.to(t3d, .5, {delay:.4, x:-50, alpha:0,  ease:Power3.easeOut});
		TweenLite.to(t3e, .5, {delay:.5, x:-50, alpha:0,  ease:Power3.easeOut});
		TweenLite.to(t3f, .5, {delay:.6, x:-50, alpha:0,  ease:Power3.easeOut});
		TweenLite.to(t3g, .5, {delay:.7, x:-50, alpha:0,  ease:Power3.easeOut});
		TweenLite.to(t3h, .5, {delay:.8, x:-50, alpha:0,  ease:Power3.easeOut, onComplete:hideT1});
	}
	
	else if(vs3 == true){
		TweenLite.to(t222, .5, {sx:-50, alpha:0, ease:Power3.easeOut});
		TweenLite.to(t333a, .5, {delay:.1, x:-50, alpha:0,  ease:Power3.easeOut});
		TweenLite.to(t333b, .5, {delay:.2, x:-50, alpha:0,  ease:Power3.easeOut});
		TweenLite.to(t333c, .5, {delay:.3, x:-50, alpha:0,  ease:Power3.easeOut});
		TweenLite.to(t333d, .5, {delay:.4, x:-50, alpha:0,  ease:Power3.easeOut});
		TweenLite.to(t333e, .5, {delay:.5, x:-50, alpha:0,  ease:Power3.easeOut});
		TweenLite.to(t333f, .5, {delay:.6, x:-50, alpha:0,  ease:Power3.easeOut, onComplete:hideT3});
		
		
		
	}
	
	TweenLite.set([t22,t33a,t33b,t33c,t33d,t33e,t33f,t33g], {x:100, alpha:0});
	
	TweenLite.to(t22, .7, {delay:.7, x:0, alpha:1, ease:Cubic.EaseOut});
	TweenLite.to(t33a, .7, {delay:1, x:0, alpha:1,  ease:Cubic.EaseInOut});
	TweenLite.to(t33b, .7, {delay:1.1, x:0, alpha:1,  ease:Cubic.EaseInOut});
	TweenLite.to(t33c, .7, {delay:1.2, x:0, alpha:1,  ease:Cubic.EaseInOut});
	TweenLite.to(t33d, .7, {delay:1.3, x:0, alpha:1,  ease:Cubic.EaseInOut});
	TweenLite.to(t33e, .7, {delay:1.4, x:0, alpha:1,  ease:Cubic.EaseInOut});
	TweenLite.to(t33f, .7, {delay:1.5, x:0, alpha:1,  ease:Cubic.EaseInOut});
	TweenLite.to(t33g, .7, {delay:1.6, x:0, alpha:1,  ease:Cubic.EaseInOut});
	
	
}

function animateT3(){
	t3_container.style.display = "block";
	
	if(vs1 == true){
		TweenLite.to(t2, .5, {x:-50, alpha:0, ease:Power3.easeOut});
		TweenLite.to(t3a, .5, {delay:.1, x:-50, alpha:0,  ease:Power3.easeOut});
		TweenLite.to(t3b, .5, {delay:.2, x:-50, alpha:0,  ease:Power3.easeOut});
		TweenLite.to(t3c, .5, {delay:.3, x:-50, alpha:0,  ease:Power3.easeOut});
		TweenLite.to(t3d, .5, {delay:.4, x:-50, alpha:0,  ease:Power3.easeOut});
		TweenLite.to(t3e, .5, {delay:.5, x:-50, alpha:0,  ease:Power3.easeOut});
		TweenLite.to(t3f, .5, {delay:.6, x:-50, alpha:0,  ease:Power3.easeOut});
		TweenLite.to(t3g, .5, {delay:.7, x:-50, alpha:0,  ease:Power3.easeOut});
		TweenLite.to(t3h, .5, {delay:.8, x:-50, alpha:0,  ease:Power3.easeOut, onComplete:hideT1});
	}
	
	else if(vs2 == true){
		TweenLite.to(t22, .5, {x:-50, alpha:0, ease:Power3.easeOut});
		TweenLite.to(t33a, .5, {delay:.1, x:-50, alpha:0,  ease:Power3.easeOut});
		TweenLite.to(t33b, .5, {delay:.2, x:-50, alpha:0,  ease:Power3.easeOut});
		TweenLite.to(t33c, .5, {delay:.3, x:-50, alpha:0,  ease:Power3.easeOut});
		TweenLite.to(t33d, .5, {delay:.4, x:-50, alpha:0,  ease:Power3.easeOut});
		TweenLite.to(t33e, .5, {delay:.5, x:-50, alpha:0,  ease:Power3.easeOut});
		TweenLite.to(t33f, .5, {delay:.6, x:-50, alpha:0,  ease:Power3.easeOut});
		TweenLite.to(t33g, .5, {delay:.7, x:-50, alpha:0,  ease:Power3.easeOut, onComplete:hideT2});
		
		
		
	}
	
	TweenLite.set([t222,t333a,t333b,t333c,t333d,t333e,t333f], {x:100, alpha:0});
	
	TweenLite.to(t222, .7, {delay:.7, x:0, alpha:1, ease:Cubic.EaseOut});
	TweenLite.to(t333a, .7, {delay:1, x:0, alpha:1,  ease:Cubic.EaseInOut});
	TweenLite.to(t333b, .7, {delay:1.1, x:0, alpha:1,  ease:Cubic.EaseInOut});
	TweenLite.to(t333c, .7, {delay:1.2, x:0, alpha:1,  ease:Cubic.EaseInOut});
	TweenLite.to(t333d, .7, {delay:1.3, x:0, alpha:1,  ease:Cubic.EaseInOut});
	TweenLite.to(t333e, .7, {delay:1.4, x:0, alpha:1,  ease:Cubic.EaseInOut});
	TweenLite.to(t333f, .7, {delay:1.5, x:0, alpha:1,  ease:Cubic.EaseInOut});
	
	
}

function hideT1(){
	t1_container.style.display ="none";
}

function hideT2(){
	t2_container.style.display ="none";
}

function hideT3(){
	t3_container.style.display ="none";
}

///////////////////////////////////////////////////////////////
// MOVE SHINE ANIMATIONS
///////////////////////////////////////////////////////////////



	s1.style.right = '-385px'; 
	s2.style.left = '409px'; 
	s3.style.left = '215px'; 
	s4.style.left = '-549px'; 
	s5.style.right = '-385px'; 
	s6.style.left = '409px'; 
	s7.style.left = '215px'; 
	s8.style.left = '-549px'; 
	
	
	
	function moveShine() {
	  	s1.style.right = parseInt(s1.style.right)+1+'px';
	  	var startMove = setTimeout(moveShine, 30); // call doMove

		if(s1.style.right == '1440px'){
			//clearTimeout(startMove);
			s1.style.right = '-490px'; 
		}
	}
	
	function moveShine2() {
	  	s2.style.left = parseInt(s2.style.left)+1+'px';
	  	var startMove2 = setTimeout(moveShine2, 25); // call doMove
		
		if(s2.style.left == '1380px'){
			//clearTimeout(startMove);
			s2.style.left = '-550px'; 
		}
		
	}
	
	function moveShine3() {
	  	s3.style.left = parseInt(s3.style.left)+1+'px';
	  	var startMove3 = setTimeout(moveShine3, 12); // call doMove
		
		if(s3.style.left == '1380px'){
			//clearTimeout(startMove);
			s3.style.left = '-660px'; 
		}
		
	}
	
	function moveShine4() {
	  	s4.style.left = parseInt(s4.style.left)+1+'px';
	  	var startMove4 = setTimeout(moveShine4, 30); // call doMove
		
		if(s4.style.left == '1380px'){
			//clearTimeout(startMove);
			s4.style.left = '-660px'; 
		}
		
	}
	
	function moveShine5() {
	  	s5.style.right = parseInt(s5.style.right)-1+'px';
	  	var startMove5 = setTimeout(moveShine5, 25); // call doMove
		
		if(s5.style.right == '-490px'){
			//clearTimeout(startMove);
			s5.style.right = '-1440px'; 
		}
		
	}
	
	function moveShine6() {
	  	s6.style.left = parseInt(s6.style.left)-1+'px';
	  	var startMove6 = setTimeout(moveShine6, 30); // call doMove
		
		if(s6.style.left == '-550px'){
			//clearTimeout(startMove);
			s6.style.left = '1380px'; 
		}
		
	}
	
	function moveShine7() {
	  	s7.style.left = parseInt(s7.style.left)-1+'px';
	  	var startMove7 = setTimeout(moveShine7, 15); // call doMove
		if(s7.style.left == '-660px'){
			//clearTimeout(startMove);
			s7.style.left = '1380px'; 
		}
		
	}
	
	function moveShine8() {
	  	s8.style.left = parseInt(s8.style.left)-1+'px';
	  	var startMove8 = setTimeout(moveShine8, 25); // call doMove
		if(s8.style.left == '-660px'){
			//clearTimeout(startMove);
			s8.style.left = '1380px'; 
		}
		
	}
	
				
///////////////////////////////////////////////////////////////
// VIDEO END
///////////////////////////////////////////////////////////////
function animateEnd(){
	stopVideo();
	TweenLite.set(btn_replay, {alpha:0});
	TweenLite.to(btn_replay, .7, {delay:.3, alpha:1, ease:Cubic.EaseOut});				
	
}

function videoEndHandler() {			
	animateEnd();
}

function addVideoListeners(){
vid.addEventListener('ended', videoEndHandler, false);
}
		
function removeVideoListeners(){
vid.removeEventListener('ended', videoEndHandler, false);
}

///////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////
// CTA/CLICK TAG
///////////////////////////////////////////////////////////////

function ctaHandler(e) {
	switch (e.type)
	{
	case "mouseover" :
		break;
	case "mouseout" :
		break;
	case "click" :	
		if(vidFrame == true){
			animateEnd();
		}				
		Enabler.exit("ad_clicked");
		break;
	}

}

function addClickTag(){
ct.addEventListener('click', ctaHandler, false);
}


///////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////
// CLICK FOR SOUND BUTTON
///////////////////////////////////////////////////////////////

var startPulse = setInterval(function () {clickPulse()}, 2000);

function clickPulse(){
	TweenLite.to(click_sound, .8, {delay:.2, alpha:.8, ease:Power2.easeInOut});
	TweenLite.to(click_sound, .8, {delay:1.2, alpha:0, ease:Power2.easeInOut});
	
}

function clickForSoundHandler(e) {
	switch (e.type)
	{
		case "mouseover" :
			TweenLite.to(click_sound, .2, {alpha:1});
			break;
		case "mouseout" :
			TweenLite.to(click_sound, .2, {alpha:.7});
			break;
		case "click" :
			firstPlay = false;
			startVideo();
			vid.muted = false;
						
			break;
	}

}

function addClickForSoundListeners(){
click_sound.addEventListener('click', clickForSoundHandler, false);
click_sound.addEventListener('mouseover', clickForSoundHandler, false);
click_sound.addEventListener('mouseout', clickForSoundHandler, false);

video_button.addEventListener('click', clickForSoundHandler, false);

};	

function removeClickForSoundListeners(){
click_sound.removeEventListener('click', clickForSoundHandler, false);
click_sound.removeEventListener('mouseover', clickForSoundHandler, false);
click_sound.removeEventListener('mouseout', clickForSoundHandler, false);

video_button.removeEventListener('click', clickForSoundHandler, false);

TweenLite.to(click_sound, .5, {alpha:0});
click_sound.style.visibility = "hidden";
window.clearInterval(startPulse);
video_button.style.visibility = "hidden";
};


////////////////////////////////////////////////////////////////

function startVideo(){
	
	if(vs1 == true){
		v1Source();
	}else if(vs2 == true){
		v2Source();
	}else if(vs3 == true){
		v3Source();
	}
			
	vid.load();
	vid.style.display = "block";
	playVideo();
	//vid.currentTime = 0;
	Enabler.loadModule(studio.module.ModuleId.VIDEO, function() {
	  studio.video.Reporter.attach('vid', vid);
	});
	addVideoListeners();
	
	if(firstPlay == true){
		vid.muted = true;
		btns_vid.style.display = "none";
		addClickForSoundListeners();
		TweenLite.to(click_sound, .8, {alpha:.8, ease:Power2.easeInOut});
		TweenLite.to(click_sound, .8, {delay:1, alpha:0, ease:Power2.easeInOut});
		
	}
	else{
		removeClickForSoundListeners();
		addVideoButtonListeners();
		addProgress();
		vid_still.style.display = "none";
		
		vid.muted = false;
		btn_sound.style.backgroundPosition = "-42px -18px";
		buttonReset();
	}
	
	vidFrame = true;
			
}

function stopVideo(){
	btn_replay.style.display = "block";
	vid_still.style.display = "block";
	vid.style.display = "none";
	pauseVideo();
	addReplayListeners();
	
	TweenLite.set(btns_vid, {alpha:1, y:0});
	TweenLite.to(btns_vid, .7, {alpha:0, y:10, ease:Power3.easeOut, onComplete:removeVidBTNS});
	
	TweenLite.set(progress_bg, {y:0});
	TweenLite.to(progress_bg, .7, {y:10, ease:Power3.easeOut, onComplete:removeP});	
	
	TweenLite.set(vid_still, {alpha:0});
	TweenLite.to(vid_still, .7, {alpha:1, ease:Cubic.EaseOut});
	 	
	if(firstPlay == true){
		removeClickForSoundListeners();
		firstPlay = false;
	}else{
		removeVideoButtonListeners();
		removeVidBtnOver();
		vidControls = true;
	}
	
	vidFrame = false;
}

function removeVidBTNS(){
	btns_vid.style.display = "none";
}

function removeP(){
	progress_bg.style.display = "none";
}



function v1Source(){
	v1.src = Enabler.getUrl("dd_vid1.mp4");
	vs.src = Enabler.getUrl("vid_still1.jpg");
	
}

function v2Source(){
	v1.src = Enabler.getUrl("dd_vid2.mp4");
	vs.src = Enabler.getUrl("vid_still2.jpg");
	
}

function v3Source(){
	v1.src = Enabler.getUrl("dd_vid3.mp4");
	vs.src = Enabler.getUrl("vid_still3.jpg");
	
}
		
function playVideo(){
		vid.play();
}
		
function pauseVideo(){
		vid.pause();
}	

///////////////////////////////////////////////////////////////
// PROGRESS BAR
///////////////////////////////////////////////////////////////


function addProgress(){
if(vidControls == true){
	progress_bg.style.display = "block";
	TweenLite.set(progress_bg, {y:10});
	TweenLite.to(progress_bg, .7, {y:0, ease:Power3.easeOut});	
}
			
vid.addEventListener('timeupdate', function() {
var percent = Math.floor((100 / vid.duration) * vid.currentTime);
progress_bar.value = percent;
progress_bar.getElementsByTagName('span')[0].innerHTML = percent;
}, false);
		
}
///////////////////////////////////////////////////////////////



///////////////////////////////////////////////////////////////
// PLAY/PAUSE BUTTON
///////////////////////////////////////////////////////////////
function playBtnHandler(e) {
	switch (e.type)
	{
		case "mouseover" :
			if (vidPause == true) {
			btn_play.style.backgroundPosition = "-20px -44px";
			}else{
			btn_pause.style.backgroundPosition = "0 -44px";
			}
			break;
		case "mouseout" :
			if (vidPause == true) {
			btn_play.style.backgroundPosition = "-20px -20px";
			}else{
			btn_pause.style.backgroundPosition = "0 -20px";
			}
			break;
		case "click" :
			if (vidPause == true) {
			//Play
			playVideo();
			btn_play.style.display = "none";
			btn_pause.style.display = "block";
			vidPause = false;
			} else {
			//Pause
			pauseVideo();
			btn_play.style.display = "block";
			btn_pause.style.display = "none";
			vidPause = true;
			}
			break;
	}

}



///////////////////////////////////////////////////////////////
// SOUND BUTTON - MUTE/UNMUTE
///////////////////////////////////////////////////////////////
function soundBtnHandler(e) {
	switch (e.type)
	{
		case "mouseover" :
			if (vid.muted == false) {
				btn_sound.style.backgroundPosition = "-42px -42px";
			}else{
				btn_sound.style.backgroundPosition = "-68px -42px";
			}
			break;
		case "mouseout" :
			if (vid.muted == false) {
				btn_sound.style.backgroundPosition = "-42px -18px";
			}else{
				btn_sound.style.backgroundPosition = "-68px -18px";
			}
			break;
		case "click" :	
			if (vid.muted == true) {
				//UnMute
				vid.muted = false;
				btn_sound.style.backgroundPosition = "-42px -18px";
				}
			else if(vid.muted == false){
				//Mute
				vid.muted = true;
				btn_sound.style.backgroundPosition = "-68px -18px";
			}
			break;
	}

}
////////////////////////////////////////////////////////////////

function addVideoButtonListeners(){
btn_sound.addEventListener('click', soundBtnHandler, false);
btn_sound.addEventListener('mouseover', soundBtnHandler, false);
btn_sound.addEventListener('mouseout', soundBtnHandler, false);
	
btn_play.addEventListener('click', playBtnHandler, false);
btn_play.addEventListener('mouseover', playBtnHandler, false);
btn_play.addEventListener('mouseout', playBtnHandler, false);
	
btn_pause.addEventListener('click', playBtnHandler, false);
btn_pause.addEventListener('mouseover', playBtnHandler, false);
btn_pause.addEventListener('mouseout', playBtnHandler, false);

progress_bg.addEventListener('click', ctaHandler, false);

video_button.addEventListener('click', clickForSoundHandler, false);

}

function removeVideoButtonListeners(){
btn_sound.removeEventListener('click', soundBtnHandler, false);
btn_sound.removeEventListener('mouseover', soundBtnHandler, false);
btn_sound.removeEventListener('mouseout', soundBtnHandler, false);

btn_play.removeEventListener('click', playBtnHandler, false);
btn_play.removeEventListener('mouseover', playBtnHandler, false);
btn_play.removeEventListener('mouseout', playBtnHandler, false);

btn_pause.removeEventListener('click', playBtnHandler, false);
btn_pause.removeEventListener('mouseover', playBtnHandler, false);
btn_pause.removeEventListener('mouseout', playBtnHandler, false);

progress_bg.removeEventListener('click', ctaHandler, false);

video_button.removeEventListener('click', clickForSoundHandler, false);

};

///////////////////////////////////////////////////////////////
// END FRAME
// REPLAY BUTTON
///////////////////////////////////////////////////////////////
function replayBtnHandler(e) {
	switch (e.type)
	{
		case "mouseover" :
			TweenLite.to(btn_replay, .5, {rotation:'+=360'});
			break;
		case "mouseout" :
			break;
		case "click" :
			firstPlay = false;
			vidFrame = false;
			startVideo();
			break;
	}

}

function addReplayListeners(){
btn_replay.addEventListener('click', replayBtnHandler, false);
btn_replay.addEventListener('mouseover', replayBtnHandler, false);
btn_replay.addEventListener('mouseout', replayBtnHandler, false);
}	

function removeReplayListeners(){
btn_replay.removeEventListener('click', replayBtnHandler, false);
btn_replay.removeEventListener('mouseover', replayBtnHandler, false);
btn_replay.removeEventListener('mouseout', replayBtnHandler, false);
};
	

////////////////////////////////////////////////////////////////

function buttonReset(){
	if(vidControls == true){
	TweenLite.set(btns_vid, {alpha:0, y:10});
	TweenLite.to(btns_vid, .7, {alpha:1, y:0, ease:Power3.easeOut});
	TweenLite.to(btns_vid, .7, {delay:2, alpha:0, ease:Power3.easeOut});
	
	vidControls = false;
	}

	btn_replay.style.display = "none";
	btns_vid.style.display = "block";
	btn_sound.style.backgroundPosition = "-42px -18px";
	btn_play.style.display = "none";
	btn_pause.style.display = "block";
	btn_pause.style.backgroundPosition = "0 -20px";
	vidPause = false;
	
	addVidBtnOver();
}




function vidPlayerHandler(e) {
	switch (e.type)
	{
		case "mouseover" :
			TweenLite.to(btns_vid, .3, {alpha:1});
			break;
		case "mouseout" :
			TweenLite.to(btns_vid, .3, {alpha:0});
			break;
		case "click" :
			if(vidFrame == true){
				animateEnd();
			}				
			Enabler.exit("ad_clicked");
			break;
	}

}


function addVidBtnOver(){	
video_button2.style.display ="block";
video_button2.addEventListener('mouseover', vidPlayerHandler, false);
video_button2.addEventListener('mouseout',  vidPlayerHandler, false);
video_button2.addEventListener('click',  vidPlayerHandler, false);
btn_sound.addEventListener('mouseover', vidPlayerHandler, false);
btn_play.addEventListener('mouseover', vidPlayerHandler, false);
btn_pause.addEventListener('mouseover', vidPlayerHandler, false);
btns_vid.addEventListener('mouseover', vidPlayerHandler, false);

};

function removeVidBtnOver(){		
video_button2.style.display ="none";
video_button2.removeEventListener('mouseover', vidPlayerHandler, false);
video_button2.removeEventListener('mouseout',  vidPlayerHandler, false);
};









////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////
// NAV FUNCTIONS
///////////////////////////////////////////////////////////////

function n1Handler(e) {
	switch (e.type)
	{
		case "mouseover" :
			n1_over.style.opacity = 1;
			TweenLite.set([n1,n1_over], {scale:1.05});
			break;
		case "mouseout" :
			n1_over.style.opacity = 0;
			TweenLite.set([n1,n1_over], {scale:1, transformOrigin:"center center"});
			break;
		case "click" :
			animateT1();
			firstPlay = false;
			vs1 = true;
			vs2 = false;
			vs3 = false;
			startVideo();
			removeNav1();
			addNav2();
			addNav3();
			break;
	}

}

function n2Handler(e) {
	switch (e.type)
	{
		case "mouseover" :
			n2_over.style.opacity = 1;
			TweenLite.set([n2,n2_over], {scale:1.05});
			break;
		case "mouseout" :
			n2_over.style.opacity = 0;
			TweenLite.set([n2,n2_over], {scale:1, transformOrigin:"center center"});
			break;
		case "click" :
			animateT2();
			firstPlay = false;
			vs1 = false;
			vs2 = true;
			vs3 = false;
			startVideo();
			removeNav2();
			addNav1();
			addNav3();
			break;
	}

}

function n3Handler(e) {
	switch (e.type)
	{
		case "mouseover" :
			n3_over.style.opacity = 1;
			TweenLite.set([n3,n3_over], {scale:1.05});
			break;
		case "mouseout" :
			n3_over.style.opacity = 0;
			TweenLite.set([n3,n3_over], {scale:1, transformOrigin:"center center"});
			break;
		case "click" :
			animateT3();
			firstPlay = false;
			vs1 = false;
			vs2 = false;
			vs3 = true;
			startVideo();
			removeNav3();
			addNav1();
			addNav2();
			break;
	}

}




function addNav1(){
n1_over.style.opacity = 0;
TweenLite.set([n1,n1_over], {scale:1});
n1_over.addEventListener('click', n1Handler, false);
n1_over.addEventListener('mouseover', n1Handler, false);
n1_over.addEventListener('mouseout', n1Handler, false);
}

function addNav2(){
n2_over.style.opacity = 0;
TweenLite.set([n2,n2_over], {scale:1});
n2_over.addEventListener('click', n2Handler, false);
n2_over.addEventListener('mouseover', n2Handler, false);
n2_over.addEventListener('mouseout', n2Handler, false);
}

function addNav3(){
n3_over.style.opacity = 0;
TweenLite.set([n3,n3_over], {scale:1});
n3_over.addEventListener('click', n3Handler, false);
n3_over.addEventListener('mouseover', n3Handler, false);
n3_over.addEventListener('mouseout', n3Handler, false);
}


function removeNav1(){
n1_over.style.opacity = 1;
TweenLite.set([n1,n1_over], {scale:1.05});
n1_over.removeEventListener('click', n1Handler, false);
n1_over.removeEventListener('mouseover', n1Handler, false);
n1_over.removeEventListener('mouseout', n1Handler, false);
}

function removeNav2(){
n2_over.style.opacity = 1;
TweenLite.set([n2,n2_over], {scale:1.05});
n2_over.removeEventListener('click', n2Handler, false);
n2_over.removeEventListener('mouseover', n2Handler, false);
n2_over.removeEventListener('mouseout', n2Handler, false);
}

function removeNav3(){
n3_over.style.opacity = 1;
TweenLite.set([n3,n3_over], {scale:1.05});
n3_over.removeEventListener('click', n3Handler, false);
n3_over.removeEventListener('mouseover', n3Handler, false);
n3_over.removeEventListener('mouseout', n3Handler, false);
}
