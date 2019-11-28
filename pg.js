  var bodyBgs = [];
        bodyBgs[0] = "https://code.aliyun.com/w.d/me/raw/master/b/35.jpg";
        bodyBgs[1] = "https://code.aliyun.com/w.d/me/raw/master/b/32.jpg";
        bodyBgs[2] = "https://code.aliyun.com/w.d/me/raw/master/b/51.jpg";
        bodyBgs[3] = "https://code.aliyun.com/w.d/me/raw/master/b/l1.jpg";
        bodyBgs[4] = "https://code.aliyun.com/w.d/me/raw/master/45.jpg";
		bodyBgs[5]  ="https://code.aliyun.com/w.d/me/raw/master/27i.jpg";
		bodyBgs[6]  ="https://code.aliyun.com/w.d/me/raw/master/27.jpg";
		bodyBgs[7]  ="https://code.aliyun.com/w.d/me/raw/master/ali.jpg";
        bodyBgs[8]  ="https://code.aliyun.com/w.d/me/raw/master/136.jpg";
        var randomBgIndex = Math.round( Math.random() * 8 );
		
		
		if (randomBgIndex ==6){
		document.write('<style>body{background:url(' + bodyBgs[randomBgIndex] + ')  };</style>');
		document.write('<body style = "background-size:100%"></body>')
		}
        else if(randomBgIndex==3){document.write('<style>body{background:url(' + bodyBgs[randomBgIndex] + ')  };</style>');
		document.write('<body style = "background-size:100%"></body>')}
		else if(randomBgIndex==4){document.write('<style>body{background:url(' + bodyBgs[randomBgIndex] + ')  };</style>');
		document.write('<body style = "background-size:100%"></body>')}
		else if(randomBgIndex==8){document.write('<style>body{background:url(' + bodyBgs[randomBgIndex] + ')  };</style>');
		document.write('<body style = "background-size:100%"></body>')}
		else 
		{ document.write('<style>body{background:url(' + bodyBgs[randomBgIndex] + ')  };background-size: 100%</style>');
		}