
function setCookie(cname,cvalue,exdays){
	var d = new Date();
	d.setTime(d.getTime()+(exdays*24*60*60*1000));
	var expires = "expires="+d.toGMTString();
	document.cookie = cname+"="+cvalue+"p"+"; "+expires;
}
function  mai(){
	a =window.location.search.substr(1,2)
	b  =window.location.search.substr(3,2)
	a1=  parseInt(a,10)
	b1=  parseInt(b,10)
	var date=new Date()
	   day=date.getDate();
	   month = date.getMonth();
	   mng  =month+1
	   if (a1==day&b1==mng){
		 
		   setCookie(12,22,2);
		   window.location.replace("../index.html");
	   }
	   else{document.write("<h1>Bad verify key 呵呵</h1>")}
	
	
}
