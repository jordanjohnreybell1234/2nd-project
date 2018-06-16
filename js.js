var wrapper = "<div class='.wrapper'>";
var button = $(".click");
var wrapped = true;


//start events using vanilla js
button[0].onclick = function(){

	if(wrapped){
		$("section").unwrap();
		wrapped= false;
		button.text("Wrap");
	}
	else{
		$("section").wrapAll(wrapper);
		wrapped = true; 
		button.text("rap");
	}
}
