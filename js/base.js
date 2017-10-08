	function getClass(classname,range){
		var range=range||document;
			if(document.getElementsByClassName){
				return range.getElementsByClassName(classname);
			}
			else
			{
			var newarr=[];
			var all=range.getElementsByTagName('*');
			for (var i=0;i<all.length;i++){
				if(checkClass(all[i].className,classname)){
					newarr.push(all[i]);
				}
			}
			return newarr;
			}
		}
		function checkClass(className,classname){
			var arr=className.split(' ');
			for(var i=0;i<arr.length;i++){
				if(arr[i]==classname){
                   return true;
			    }
			    
			}
			return false;
		}
		
function $(select,range){
	var range=range||document;
	var first=select.charAt(0);
	if(first=='.'){
		return getClass(select.substring(1),range);
	}
	else if(first=='#'){
		return document.getElementById(select.substring(1));
	}
	else if(/^[a-z][a-z1-6]{0,7}$/.test(select)){
		return document.getElementsByTagName(select);
	}
}