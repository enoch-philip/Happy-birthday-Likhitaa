/* ===========================================
   PREMIUM BIRTHDAY WEBSITE
   SCRIPT.JS
   PART 1
===========================================*/

// ---------- Elements ----------

const giftPage = document.getElementById("giftPage");
const homePage = document.getElementById("homePage");
const gift = document.getElementById("gift");

const envelope = document.getElementById("envelope");
const paper = document.getElementById("paper");

const floating = document.getElementById("floating");

// ---------- Gift Opening ----------

if(gift){

gift.addEventListener("click",()=>{

gift.style.transform="scale(1.2) rotate(15deg)";
gift.style.transition=".5s";

boom();

setTimeout(()=>{

giftPage.classList.remove("active");

homePage.classList.add("active");

},1000);

});

}

// ---------- Boom Animation ----------

function boom(){

const emojis=[

"🎉",

"✨",

"💖",

"🎊",

"🎈",

"🌸"

];

for(let i=0;i<180;i++){

let piece=document.createElement("div");

piece.innerHTML=emojis[
Math.floor(Math.random()*emojis.length)
];

piece.style.position="fixed";

piece.style.left=Math.random()*100+"vw";

piece.style.top="-30px";

piece.style.fontSize=
(18+Math.random()*18)+"px";

piece.style.zIndex="9999";

piece.style.pointerEvents="none";

document.body.appendChild(piece);

let x=(Math.random()*600)-300;

let y=window.innerHeight+100;

piece.animate([

{

transform:"translate(0,0) rotate(0deg)",

opacity:1

},

{

transform:

`translate(${x}px,${y}px)
rotate(${Math.random()*720}deg)`,

opacity:0

}

],{

duration:3000,

easing:"ease-out"

});

setTimeout(()=>{

piece.remove();

},3200);

}

}

// ---------- Floating Hearts ----------

const icons=[

"❤️",

"💖",

"✨",

"🌸",

"🎈"

];

for(let i=0;i<45;i++){

let heart=document.createElement("div");

heart.className="floatingHeart";

heart.innerHTML=

icons[
Math.floor(Math.random()*icons.length)
];

heart.style.left=

Math.random()*100+"vw";

heart.style.fontSize=

(18+Math.random()*25)+"px";

heart.style.animationDuration=

(8+Math.random()*8)+"s";

heart.style.animationDelay=

Math.random()*6+"s";

floating.appendChild(heart);

}

// ---------- Sparkles ----------

setInterval(()=>{

let sparkle=document.createElement("div");

sparkle.innerHTML="✨";

sparkle.style.position="fixed";

sparkle.style.left=

Math.random()*100+"vw";

sparkle.style.top=

Math.random()*100+"vh";

sparkle.style.fontSize="18px";

sparkle.style.opacity="0";

sparkle.style.transition=".8s";

document.body.appendChild(sparkle);

setTimeout(()=>{

sparkle.style.opacity="1";

},50);

setTimeout(()=>{

sparkle.style.opacity="0";

},700);

setTimeout(()=>{

sparkle.remove();

},1200);

},2500);

/* ========= END OF PART 1 ========= */
/* ===========================================
   SCRIPT.JS
   PART 2
   Memories + Music + Effects
===========================================*/

// ------------------------------
// Smooth Button Animation
// ------------------------------

document.querySelectorAll("button").forEach(button=>{

button.addEventListener("mouseenter",()=>{

button.style.transform="scale(1.06)";
button.style.boxShadow="0 10px 30px rgba(255,90,160,.35)";

});

button.addEventListener("mouseleave",()=>{

button.style.transform="scale(1)";
button.style.boxShadow="none";

});

});

// ------------------------------
// Photo Popup Viewer
// ------------------------------

const photo=document.querySelector(".photoBox img");

if(photo){

photo.addEventListener("click",()=>{

const viewer=document.createElement("div");

viewer.style.position="fixed";
viewer.style.left="0";
viewer.style.top="0";
viewer.style.width="100%";
viewer.style.height="100%";
viewer.style.background="rgba(0,0,0,.9)";
viewer.style.display="flex";
viewer.style.justifyContent="center";
viewer.style.alignItems="center";
viewer.style.zIndex="99999";

const image=document.createElement("img");

image.src=photo.src;

image.style.maxWidth="90%";
image.style.maxHeight="90%";
image.style.borderRadius="20px";
image.style.boxShadow="0 0 40px white";

viewer.appendChild(image);

viewer.onclick=()=>{

viewer.remove();

};

document.body.appendChild(viewer);

});

}

// ------------------------------
// Video Hover Effect
// ------------------------------

document.querySelectorAll("video").forEach(video=>{

video.addEventListener("mouseenter",()=>{

video.style.transform="scale(1.04)";
video.style.transition=".35s";

});

video.addEventListener("mouseleave",()=>{

video.style.transform="scale(1)";

});

});

// ------------------------------
// Background Music
// ------------------------------

const music=new Audio("music.mp3");

music.loop=true;

let musicStarted=false;

document.body.addEventListener("click",()=>{

if(!musicStarted){

music.play().catch(()=>{});

musicStarted=true;

}

},{once:true});

// ------------------------------
// Music Button
// ------------------------------

const musicBtn=document.createElement("button");

musicBtn.innerHTML="🎵 Music";

musicBtn.style.position="fixed";
musicBtn.style.right="20px";
musicBtn.style.bottom="20px";
musicBtn.style.zIndex="9999";

document.body.appendChild(musicBtn);

musicBtn.onclick=()=>{

if(music.paused){

music.play();

musicBtn.innerHTML="⏸ Pause";

}else{

music.pause();

musicBtn.innerHTML="🎵 Music";

}

};

// ------------------------------
// Floating Sparkles
// ------------------------------

setInterval(()=>{

const star=document.createElement("div");

star.innerHTML="✨";

star.style.position="fixed";

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";

star.style.fontSize=(10+Math.random()*15)+"px";

star.style.opacity="0";

star.style.transition="1s";

document.body.appendChild(star);

setTimeout(()=>{

star.style.opacity="1";

},100);

setTimeout(()=>{

star.style.opacity="0";

},900);

setTimeout(()=>{

star.remove();

},1500);

},1200);

// ------------------------------
// Scroll Fade Animation
// ------------------------------

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0px)";

}

});

});

document.querySelectorAll(".glass,.photoBox,.videoColumn").forEach(el=>{

el.style.opacity="0";

el.style.transform="translateY(40px)";

el.style.transition=".8s";

observer.observe(el);

});

/* ========= END OF PART 2 ========= */
/* =====================================
   SCRIPT.JS
   PART 3 (FINAL)
======================================*/

// =============================
// Envelope Opening Animation
// =============================

const envelope = document.getElementById("envelope");
const paper = document.getElementById("paper");
const letterText = document.getElementById("letterText");

if(envelope){

envelope.addEventListener("click",()=>{

envelope.style.transform="scale(1.1) rotate(-8deg)";
envelope.style.transition=".5s";

setTimeout(()=>{

paper.style.display="block";

paper.animate([

{
transform:"translateY(180px) scale(.3)",
opacity:0
},

{
transform:"translateY(0px) scale(1)",
opacity:1
}

],{

duration:1000,

fill:"forwards",

easing:"ease-out"

});

typeLetter();

},500);

});

}

// =============================
// Typewriter Effect
// =============================

function typeLetter(){

const fullText=letterText.dataset.text || letterText.innerHTML;

letterText.dataset.text=fullText;

letterText.innerHTML="";

let i=0;

const typing=setInterval(()=>{

letterText.innerHTML+=fullText.charAt(i);

i++;

if(i>=fullText.length){

clearInterval(typing);

heartRain();

}

},28);

}

// =============================
// Floating Heart Rain
// =============================

function heartRain(){

const hearts=["❤️","💖","💕","💗","💝"];

for(let i=0;i<120;i++){

let heart=document.createElement("div");

heart.innerHTML=hearts[Math.floor(Math.random()*hearts.length)];

heart.style.position="fixed";

heart.style.left=Math.random()*100+"vw";

heart.style.top="-40px";

heart.style.fontSize=(16+Math.random()*18)+"px";

heart.style.pointerEvents="none";

heart.style.zIndex="99999";

document.body.appendChild(heart);

heart.animate([

{

transform:"translateY(0px)",

opacity:1

},

{

transform:`translateY(${window.innerHeight+150}px)`,

opacity:0

}

],{

duration:5000+Math.random()*2000,

easing:"linear"

});

setTimeout(()=>{

heart.remove();

},7000);

}

}

// =============================
// Balloon Animation
// =============================

const balloons=["🎈","🎈","🎈"];

setInterval(()=>{

let balloon=document.createElement("div");

balloon.innerHTML=balloons[Math.floor(Math.random()*balloons.length)];

balloon.style.position="fixed";

balloon.style.left=Math.random()*100+"vw";

balloon.style.bottom="-100px";

balloon.style.fontSize=(35+Math.random()*20)+"px";

balloon.style.zIndex="1";

document.body.appendChild(balloon);

balloon.animate([

{

transform:"translateY(0)"

},

{

transform:"translateY(-120vh)"

}

],{

duration:12000,

easing:"linear"

});

setTimeout(()=>{

balloon.remove();

},12000);

},2500);

// =============================
// Title Glow Animation
// =============================

setInterval(()=>{

document.querySelectorAll("h1").forEach(title=>{

title.animate([

{

textShadow:"0 0 8px white"

},

{

textShadow:"0 0 35px #ff4fa0"

},

{

textShadow:"0 0 8px white"

}

],{

duration:2200

});

});

},2500);

// =============================
// Page Fade Animation
// =============================

window.addEventListener("load",()=>{

document.body.animate([

{

opacity:0

},

{

opacity:1

}

],{

duration:1200,

fill:"forwards"

});

});

// =============================
// Surprise Message
// =============================

setTimeout(()=>{

console.log("🎉 Happy Birthday ❤️");

},2000);

/* ========= END ========= */