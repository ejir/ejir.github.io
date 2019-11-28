
function setCookie(cname,cvalue,exdays){
	var d = new Date();
	d.setTime(d.getTime()+(exdays*24*60*60*1000));
	var expires = "expires="+d.toGMTString();
	document.cookie = cname+"="+cvalue+"p"+"; "+expires;
}
function  mai(){
	a =window.location.search.length;
	b=window.location.search.substr(1,a-2);
	a3=window.atob(b);
	a2=window.atob(a3)
	var date=new Date()
	   day=date.getDate();
	   month = date.getMonth();
	   mng  =month+1
	   d=day+"";
	   m=mng+"";
	   enl=m+d;
	
	   if (a2==enl){
		  setCookie(11,0,1) 
		
	   }
	   else{document.write("<h1>Bad verify key 呵呵</h1>")}
	
	
}
