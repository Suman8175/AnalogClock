setInterval(()=>{
var hour=new Date().getHours();
var minute=new Date().getMinutes();
var second=new Date().getSeconds();
var Hourhand=document.getElementById("Hourhand");
var Minutehand=document.getElementById("Minutehand");
var secondhand=document.getElementById("secondhand");
hrotate=30*hour+(minute/2)
mrotate=6*minute;
srotate=6*second
Hourhand.style.transform=`rotate(${hrotate}deg)`;
Minutehand.style.transform=`rotate(${mrotate}deg)`;
secondhand.style.transform=`rotate(${srotate}deg)`;
},100)