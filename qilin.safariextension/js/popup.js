function init(){
	var b=$("toggleBtn");
	var c=$("pinAll");
	var h=$("captureWebpageItem");
	var a=$("captureWeindowItem");
	var f=$("captureAreaItem");
	var e=$("preferences");

	var j=document.querySelectorAll("#menu .capture");
	for(var d=0; d<j.length; d++){
		if(!j[d].classList.contains("disabled")){
			j[d].classList.add("disabled")
		}
	}
	b.addEventListener("click",function(){
		safari.self.tab.dispatchMessage("toggle",function(i){
			var k = i.isToggleOn;
			var l = b.getElementsByTagName("span")[0];
			l.setAttribute("class", k ? "checked" : "unchecked")
		});
	})
}