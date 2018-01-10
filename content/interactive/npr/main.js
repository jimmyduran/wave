var firstPlay = true;
var vidPause = false;
var vidFrame = true;
var vidControls = true;

var vs1 = true;
var vs2 = false;
var vs3 = false;
var firstFrame = true;
var audioPause = true;
var validEmail = false;

///////////////////////////////////////////////////////////////
// ANIMATION FUNCTIONS
///////////////////////////////////////////////////////////////

function presets(){
	
	container.style.opacity = "1";	
	startAd();
	
}

function startAd(){
	
	startSound();
	addCTListeners();
	animate();
	
}

function animate(){
	
	//Yellow and T1
	TweenLite.set(red_bar, {x:450, alpha:1});
	TweenLite.set([t1,t1b], {x:100, alpha:0});
	
	
	TweenLite.set([t2,t3a,t3b,t3c,t3d,t3e,t3f], {x:100, alpha:0});
	TweenLite.set(l_txt_container, {width:0});
	TweenLite.set(logo, {scale:.8, alpha:0});
	
	TweenLite.set([img,snd_wave,progress_bg_container,btns_vid], {y:50, alpha:0});
	TweenLite.to([img,snd_wave,progress_bg_container,btns_vid], .7, {y:0, alpha:1});
	
	
	TweenLite.to(red_bar, .5, {delay:.2, x:0, ease:Cubic.EaseOut});
	TweenLite.to(t1, .7, {delay:.4, x:0, alpha:1, ease:Cubic.EaseOut});
	TweenLite.to(t1b, .9, {delay:.7, x:0, alpha:1, ease:Cubic.EaseOut});
	
	txt_container1.style.display ="block";
	TweenLite.to(t2, .5, {delay:.9, x:0, alpha:1, ease:Cubic.EaseOut});
	TweenLite.to(t3a, .7, {delay:1, x:0, alpha:1,  ease:Cubic.EaseInOut});
	TweenLite.to(t3b, .7, {delay:1.1, x:0, alpha:1,  ease:Cubic.EaseInOut});
	TweenLite.to(t3c, .7, {delay:1.2, x:0, alpha:1,  ease:Cubic.EaseInOut});
	TweenLite.to(t3d, .7, {delay:1.3, x:0, alpha:1,  ease:Cubic.EaseInOut});
	TweenLite.to(t3e, .7, {delay:1.3, x:0, alpha:1,  ease:Cubic.EaseInOut});
	TweenLite.to(t3f, .7, {delay:1.3, x:0, alpha:1,  ease:Cubic.EaseInOut});
	
	TweenLite.to(l_txt_container, .5, {delay:1.5, width:110, ease:Power3.easeOut});
	TweenLite.to(logo, .5, {delay:2, scale:1, alpha:1, ease:Cubic.EaseOut});
	
	TweenLite.set(cta, {scaleX:0, scaleY:.1, alpha:1});			
	TweenLite.to(cta, .5, {delay:2.25, scaleX:1, ease:Power3.easeOut});
	TweenLite.to(cta, .5, {delay:2.5, scaleY:1, ease:Power3.easeOut, onComplete:addCTAListeners});
		
	TweenLite.set([custom_logo,podcasts], {y:-80, alpha:1});
	TweenLite.to([custom_logo,podcasts], .7, {delay:.5, y:0, ease:Cubic.EaseInOut});
	
	moveShine();
	moveShine2();
	moveShine3();
	moveShine4();
	moveShine5();
	moveShine6();
	moveShine7();
	moveShine8();
	
	TweenLite.delayedCall(2, animateNav);
	
		
}

function animateNav(){
	vid_nav.style.display ="block";
	TweenLite.set([n1,n1_over], {scale:1.05});
	TweenLite.set([n1,n1_over,n2,n3,n3_over,n_line1,n_line2], {x:-20});
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
	img.src = "img.jpg";
	
	if(vs2 == true){
		TweenLite.to(t1b2, .5, {x:-50, alpha:0, ease:Cubic.EaseOut});
		TweenLite.to(t22, .5, {delay:.1, x:-50, alpha:0, ease:Cubic.EaseOut});
		TweenLite.to(t3a2, .5, {delay:.2, x:-50, alpha:0,  ease:Cubic.EaseOut});
		TweenLite.to(t3b2, .5, {delay:.3, x:-50, alpha:0,  ease:Cubic.EaseOut});
		TweenLite.to(t3c2, .5, {delay:.4, x:-50, alpha:0,  ease:Cubic.EaseOut});
		TweenLite.to(t3d2, .5, {delay:.5, x:-50, alpha:0,  ease:Cubic.EaseOut});
		TweenLite.to(t3e2, .5, {delay:.6, x:-50, alpha:0,  ease:Cubic.EaseOut});
		TweenLite.to(t3f2, .5, {delay:.7, x:-50, alpha:0,  ease:Cubic.EaseOut, onComplete:removetxt2});
	}
	
	if(vs3 == true){
		TweenLite.to(t1b3, .5, {x:-50, alpha:0, ease:Cubic.EaseOut});
		TweenLite.to(t23, .5, {delay:.1, x:-50, alpha:0, ease:Cubic.EaseOut});
		TweenLite.to(t3a3, .5, {delay:.2, x:-50, alpha:0,  ease:Cubic.EaseOut});
		TweenLite.to(t3b3, .5, {delay:.3, x:-50, alpha:0,  ease:Cubic.EaseOut});
		TweenLite.to(t3c3, .5, {delay:.4, x:-50, alpha:0,  ease:Cubic.EaseOut});
		TweenLite.to(t3d3, .5, {delay:.5, x:-50, alpha:0,  ease:Cubic.EaseOut});
		TweenLite.to(t3e3, .5, {delay:.6, x:-50, alpha:0,  ease:Cubic.EaseOut});
		TweenLite.to(t3f3, .5, {delay:.7, x:-50, alpha:0,  ease:Cubic.EaseOut});
		TweenLite.to(t3g3, .5, {delay:.8, x:-50, alpha:0,  ease:Cubic.EaseOut});
		TweenLite.to(t3h3, .5, {delay:.9, x:-50, alpha:0,  ease:Cubic.EaseOut, onComplete:removetxt3});
		
	}
	
	txt_container1.style.display = "block";
	TweenLite.set([t1b,t2,t3a,t3b,t3c,t3d,t3e,t3f], {x:100, alpha:0});
	
	TweenLite.to(t1b, .9, {delay:.7, x:0, alpha:1, ease:Cubic.EaseOut});
	TweenLite.to(t2, .5, {delay:.9, x:0, alpha:1, ease:Cubic.EaseOut});
	TweenLite.to(t3a, .7, {delay:1, x:0, alpha:1,  ease:Cubic.EaseInOut});
	TweenLite.to(t3b, .7, {delay:1.1, x:0, alpha:1,  ease:Cubic.EaseInOut});
	TweenLite.to(t3c, .7, {delay:1.2, x:0, alpha:1,  ease:Cubic.EaseInOut});
	TweenLite.to(t3d, .7, {delay:1.3, x:0, alpha:1,  ease:Cubic.EaseInOut});
	TweenLite.to(t3e, .7, {delay:1.4, x:0, alpha:1,  ease:Cubic.EaseInOut});
	TweenLite.to(t3f, .7, {delay:1.5, x:0, alpha:1,  ease:Cubic.EaseInOut});
	
}


function animateT2(){
	
	img.src = "img2.jpg";
	
	if(vs1 == true){
		TweenLite.to(t1b, .5, {x:-50, alpha:0, ease:Cubic.EaseOut});
		TweenLite.to(t2, .5, {delay:.1, x:-50, alpha:0, ease:Cubic.EaseOut});
		TweenLite.to(t3a, .5, {delay:.2, x:-50, alpha:0,  ease:Cubic.EaseOut});
		TweenLite.to(t3b, .5, {delay:.3, x:-50, alpha:0,  ease:Cubic.EaseOut});
		TweenLite.to(t3c, .5, {delay:.4, x:-50, alpha:0,  ease:Cubic.EaseOut});
		TweenLite.to(t3d, .5, {delay:.5, x:-50, alpha:0,  ease:Cubic.EaseOut});
		TweenLite.to(t3e, .5, {delay:.6, x:-50, alpha:0,  ease:Cubic.EaseOut});
		TweenLite.to(t3f, .5, {delay:.7, x:-50, alpha:0,  ease:Cubic.EaseOut, onComplete:removetxt1});
	}
	
	if(vs3 == true){
		TweenLite.to(t1b3, .5, {x:-50, alpha:0, ease:Cubic.EaseOut});
		TweenLite.to(t23, .5, {delay:.1, x:-50, alpha:0, ease:Cubic.EaseOut});
		TweenLite.to(t3a3, .5, {delay:.2, x:-50, alpha:0,  ease:Cubic.EaseOut});
		TweenLite.to(t3b3, .5, {delay:.3, x:-50, alpha:0,  ease:Cubic.EaseOut});
		TweenLite.to(t3c3, .5, {delay:.4, x:-50, alpha:0,  ease:Cubic.EaseOut});
		TweenLite.to(t3d3, .5, {delay:.5, x:-50, alpha:0,  ease:Cubic.EaseOut});
		TweenLite.to(t3e3, .5, {delay:.6, x:-50, alpha:0,  ease:Cubic.EaseOut});
		TweenLite.to(t3f3, .5, {delay:.7, x:-50, alpha:0,  ease:Cubic.EaseOut});
		TweenLite.to(t3g3, .5, {delay:.8, x:-50, alpha:0,  ease:Cubic.EaseOut});
		TweenLite.to(t3h3, .5, {delay:.9, x:-50, alpha:0,  ease:Cubic.EaseOut, onComplete:removetxt3});
	}
	
	txt_container2.style.display = "block";
	TweenLite.set([t1b2,t22,t3a2,t3b2,t3c2,t3d2,t3e2,t3f2], {x:100, alpha:0});
	
	TweenLite.to(t1b2, .9, {delay:.7, x:0, alpha:1, ease:Cubic.EaseOut});
	TweenLite.to(t22, .5, {delay:.9, x:0, alpha:1, ease:Cubic.EaseOut});
	TweenLite.to(t3a2, .7, {delay:1, x:0, alpha:1,  ease:Cubic.EaseInOut});
	TweenLite.to(t3b2, .7, {delay:1.1, x:0, alpha:1,  ease:Cubic.EaseInOut});
	TweenLite.to(t3c2, .7, {delay:1.2, x:0, alpha:1,  ease:Cubic.EaseInOut});
	TweenLite.to(t3d2, .7, {delay:1.3, x:0, alpha:1,  ease:Cubic.EaseInOut});
	TweenLite.to(t3e2, .7, {delay:1.4, x:0, alpha:1,  ease:Cubic.EaseInOut});
	TweenLite.to(t3f2, .7, {delay:1.5, x:0, alpha:1,  ease:Cubic.EaseInOut});
	
}

function animateT3(){
	
	img.src = "img3.jpg";
		
	if(vs2 == true){
		TweenLite.to(t1b2, .5, {x:-50, alpha:0, ease:Cubic.EaseOut});
		TweenLite.to(t22, .5, {delay:.1, x:-50, alpha:0, ease:Cubic.EaseOut});
		TweenLite.to(t3a2, .5, {delay:.2, x:-50, alpha:0,  ease:Cubic.EaseOut});
		TweenLite.to(t3b2, .5, {delay:.3, x:-50, alpha:0,  ease:Cubic.EaseOut});
		TweenLite.to(t3c2, .5, {delay:.4, x:-50, alpha:0,  ease:Cubic.EaseOut});
		TweenLite.to(t3d2, .5, {delay:.5, x:-50, alpha:0,  ease:Cubic.EaseOut});
		TweenLite.to(t3e2, .5, {delay:.6, x:-50, alpha:0,  ease:Cubic.EaseOut});
		TweenLite.to(t3f2, .5, {delay:.7, x:-50, alpha:0,  ease:Cubic.EaseOut, onComplete:removetxt2});
	}
	
	if(vs1 == true){
		TweenLite.to(t1b, .5, {x:-50, alpha:0, ease:Cubic.EaseOut});
		TweenLite.to(t2, .5, {delay:.1, x:-50, alpha:0, ease:Cubic.EaseOut});
		TweenLite.to(t3a, .5, {delay:.2, x:-50, alpha:0,  ease:Cubic.EaseOut});
		TweenLite.to(t3b, .5, {delay:.3, x:-50, alpha:0,  ease:Cubic.EaseOut});
		TweenLite.to(t3c, .5, {delay:.4, x:-50, alpha:0,  ease:Cubic.EaseOut});
		TweenLite.to(t3d, .5, {delay:.5, x:-50, alpha:0,  ease:Cubic.EaseOut});
		TweenLite.to(t3e, .5, {delay:.6, x:-50, alpha:0,  ease:Cubic.EaseOut});
		TweenLite.to(t3f, .5, {delay:.7, x:-50, alpha:0,  ease:Cubic.EaseOut, onComplete:removetxt1});
	}
	
	txt_container3.style.display = "block";
	TweenLite.set([t1b3,t23,t3a3,t3b3,t3c3,t3d3,t3e3,t3f3,t3g3,t3h3], {x:100, alpha:0});
	
	TweenLite.to(t1b3, .9, {delay:.7, x:0, alpha:1, ease:Cubic.EaseOut});
	TweenLite.to(t23, .5, {delay:.9, x:0, alpha:1, ease:Cubic.EaseOut});
	TweenLite.to(t3a3, .7, {delay:1, x:0, alpha:1,  ease:Cubic.EaseInOut});
	TweenLite.to(t3b3, .7, {delay:1.1, x:0, alpha:1,  ease:Cubic.EaseInOut});
	TweenLite.to(t3c3, .7, {delay:1.2, x:0, alpha:1,  ease:Cubic.EaseInOut});
	TweenLite.to(t3d3, .7, {delay:1.3, x:0, alpha:1,  ease:Cubic.EaseInOut});
	TweenLite.to(t3e3, .7, {delay:1.4, x:0, alpha:1,  ease:Cubic.EaseInOut});
	TweenLite.to(t3f3, .7, {delay:1.5, x:0, alpha:1,  ease:Cubic.EaseInOut});
	TweenLite.to(t3g3, .7, {delay:1.6, x:0, alpha:1,  ease:Cubic.EaseInOut});
	TweenLite.to(t3h3, .7, {delay:1.7, x:0, alpha:1,  ease:Cubic.EaseInOut});
	
}


function removetxt1(){
	txt_container1.style.display ="none";
}

function removetxt2(){
	txt_container2.style.display ="none";
}

function removetxt3(){
	txt_container3.style.display ="none";
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





////////////////////////////////////////////////////////////////

function startSound(){
	addProgress();
	addVideoButtonListeners();
	if(firstPlay == true){
		audio.src = Enabler.getUrl("BFUclip1.mp3");
		firstPlay = false;	
	}else{
		if(vs1 == true){
			audio.src = Enabler.getUrl("BFUclip1.mp3");
			tl.restart();
		}else if(vs2 == true){
			audio.src = Enabler.getUrl("BFUclip2.mp3");
			tl.restart();
		}else if(vs3 == true){
			audio.src = Enabler.getUrl("BFUclip3.mp3");
			tl.restart();
		}
		playAudio();
	}
}
		

///////////////////////////////////////////////////////////////
// PROGRESS BAR
///////////////////////////////////////////////////////////////


function addProgress(){

progress_bg.style.display = "block";

			
audio.addEventListener('timeupdate', function() {
var percent = Math.floor((100 / audio.duration) * audio.currentTime);
progress_bar.value = percent;

var seconds = Math.floor(audio.currentTime % 60);
var foo = Math.floor(audio.currentTime - seconds);
var minutes = foo / 60;
if(seconds < 10){
    seconds = "0" + seconds.toString();
}

if(minutes < 1){
    minutes = "";
}
var fixedCurrentTime = minutes + ":" + seconds;
snd_time.innerHTML = fixedCurrentTime;
}, false);		
		
}

	TweenLite.set(snd_wave_over_container, {width:"0"});
	snd_wave_over.style.opacity= 1;
	
	var tl = new TimelineLite();				
	tl.add(TweenLite.to(snd_wave_over_container, 76, {width:"1050px", ease:Cubic.EaseInOut}),0);
	tl.pause();
	

///////////////////////////////////////////////////////////////


// PLAY/PAUSE BUTTON
///////////////////////////////////////////////////////////////
function playBtnHandler(e) {
	switch (e.type)
	{
		case "mouseover" :
			if (audioPause == true) {
				btn_play.style.opacity = 0.7;
			}else{
				btn_pause.style.opacity = 0.7;
			}
			break;
		case "mouseout" :
			if (audioPause == true) {
				btn_play.style.opacity = 1;
			}else{
				btn_pause.style.opacity = 1;
			}
			break;
		case "click" :
			if (audioPause == true) {
			//Play
				if(firstPlay == false){
					replay();
				}else{
					playAudio();
				}
			} else {
			//Pause
				pauseAudio();
			}
			break;
	}

}

function playAudio(){
	tl.play();
	audio.play();
	btn_play.style.display = "none";
	btn_pause.style.display = "block";
	audioPause = false;	
	addAudioListeners();
	Enabler.counter("audio_played");
	Enabler.startTimer('audio_timer');
}

function pauseAudio(){
	tl.pause();
	audio.pause();
	btn_play.style.display = "block";
	btn_pause.style.display = "none";
	audioPause = true;	
	Enabler.counter("audio_paused");
	Enabler.stopTimer('audio_timer');
	
}


///////////////////////////////////////////////////////////////
// VIDEO END
///////////////////////////////////////////////////////////////
function animateEnd(){
	btn_play.style.display = "block";
	btn_pause.style.display = "none";
	removeAudioListeners();
	btn_play.style.opacity = 1;
	firstPlay = false;	
	audioPause = true;
	tl.pause();
	
	Enabler.counter("audio_end");
	
}


function replay() {
			TweenLite.set(snd_wave_over_container, {width:"0"});
			addProgress();
			addVideoButtonListeners();
			tl.restart();
			audio.play();
			btn_play.style.display = "none";
			btn_pause.style.display = "block";
			audioPause = false;	
			firstPlay = true;	
			
			addAudioListeners();	
			
			Enabler.counter("audio_replayed");
			
}


function audioEndHandler() {			
	animateEnd();
}

function addAudioListeners(){
audio.addEventListener('ended', audioEndHandler, false);
}
		
function removeAudioListeners(){
audio.removeEventListener('ended', audioEndHandler, false);
}

////////////////////////////////////////////////////////////////

function addVideoButtonListeners(){	
btn_play.addEventListener('click', playBtnHandler, false);
btn_play.addEventListener('mouseover', playBtnHandler, false);
btn_play.addEventListener('mouseout', playBtnHandler, false);
	
btn_pause.addEventListener('click', playBtnHandler, false);
btn_pause.addEventListener('mouseover', playBtnHandler, false);
btn_pause.addEventListener('mouseout', playBtnHandler, false);

//progress_bg.addEventListener('click', ctaHandler, false);

}

function removeVideoButtonListeners(){
btn_play.removeEventListener('click', playBtnHandler, false);
btn_play.removeEventListener('mouseover', playBtnHandler, false);
btn_play.removeEventListener('mouseout', playBtnHandler, false);

btn_pause.removeEventListener('click', playBtnHandler, false);
btn_pause.removeEventListener('mouseover', playBtnHandler, false);
btn_pause.removeEventListener('mouseout', playBtnHandler, false);

//progress_bg.removeEventListener('click', ctaHandler, false);


};



///////////////////////////////////////////////////////////////
// CTA BUTTON
///////////////////////////////////////////////////////////////
function CTA(e) {
	switch (e.type)
	{
		case "mouseover" :
			cta.style.opacity = 0.7;
			break;
		case "mouseout" :
			cta.style.opacity = 1;
			break;
		case "click" :
				Enabler.exit("cta_clicked");
				if(audioPause == false){
					pauseAudio();				
				}
				break;
	}

}


function openClickTag(){
	Enabler.exit("ad_clicked");
	if(audioPause == false){
		pauseAudio();
	}
}

function CT(e) {
	openClickTag();
}

		
function addCTListeners(){
	ct.addEventListener('click', CT, false);
	
}		

function addCTAListeners(){
	cta.addEventListener('click', CTA, false);
	cta.addEventListener('mouseover', CTA, false);
	cta.addEventListener('mouseout', CTA, false);
	
}	

function removeCTAListeners(){
	cta.removeEventListener('click', CTA, false);
	cta.removeEventListener('mouseover', CTA, false);
	cta.removeEventListener('mouseout', CTA, false);
	
}


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
			startSound();
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
			startSound();
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
			startSound();
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






