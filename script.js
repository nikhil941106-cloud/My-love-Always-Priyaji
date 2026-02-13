/* Typing Effect */
let text="From Mainpuri ❤️ to Odisha... Our Love Never Ends.";
let i=0;
function type(){
if(i<text.length){
document.getElementById("typing").innerHTML+=text.charAt(i);
i++;
setTimeout(type,70);
}
}
window.onload=type;

function enterLove(){
window.location="home.html";
}

/* Home Page Logic */
if(window.location.pathname.includes("home.html")){

window.onload=function(){

let today=new Date();
let d=today.getDate();
let m=today.getMonth()+1;
let main=document.getElementById("mainContent");

/* Day Change */
if(d==13 && m==2){
main.innerHTML="<h1 class='glow'>Happy Kiss Day 💋</h1>";
generate("💋",30,3);
}else if(d==14 && m==2){
main.innerHTML="<h1 class='glow'>Happy Valentine’s Day ❤️💍</h1>";
generate("❤️",40,4);
}else{
main.innerHTML="<h1 class='glow'>Everyday I Love You Priya ❤️</h1>";
generate("💖",25,5);
}

/* Countdown */
let next=new Date(today.getFullYear(),1,14);
if(today>next){ next.setFullYear(today.getFullYear()+1); }

setInterval(function(){
let now=new Date().getTime();
let diff=next-now;
let days=Math.floor(diff/(1000*60*60*24));
let hours=Math.floor((diff%(1000*60*60*24))/(1000*60*60));
let mins=Math.floor((diff%(1000*60*60))/(1000*60));
document.getElementById("countdown").innerHTML=
"⏳ Next Valentine in: "+days+"d "+hours+"h "+mins+"m";
},1000);

/* Distance Counter */
let km=0;
let target=1200;
let inter=setInterval(function(){
km+=20;
document.getElementById("distance").innerHTML=
"📍 Mainpuri ➝ Odisha : "+km+" KM ❤️";
if(km>=target){ clearInterval(inter); }
},50);

/* Slideshow */
let images=[
"https://picsum.photos/400?1",
"https://picsum.photos/400?2",
"https://picsum.photos/400?3"
];
let index=0;
setInterval(function(){
index=(index+1)%images.length;
document.getElementById("slideImg").src=images[index];
},3000);

/* Proposal popup */
setTimeout(function(){
document.getElementById("proposal").classList.remove("hidden");
},10000);

}
}

/* Floating Generator */
function generate(sym,count,speed){
for(let i=0;i<count;i++){
let el=document.createElement("div");
el.className="floating";
el.innerHTML=sym;
el.style.left=Math.random()*100+"%";
el.style.animationDuration=(speed+Math.random()*3)+"s";
document.getElementById("effect").appendChild(el);
}
}

function yes(){
alert("Forever Together ❤️💍");
generate("💍",25,2);
}

function no(){
alert("No option allowed 😘");
}
