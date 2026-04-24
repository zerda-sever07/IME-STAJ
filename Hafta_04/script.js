let kol = document.getElementById("kol");

let aci = 0;
let yon = 1;

setInterval(function(){

aci += yon * 5;

if(aci > 85 || aci < -40){
yon *= -1;
}

kol.style.transform = "rotate(" + aci + "deg)";

},100);
