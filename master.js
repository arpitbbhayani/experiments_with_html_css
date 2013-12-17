function load() {
	var viewportWidth  = document.documentElement.clientWidth;
	var viewportHeight = document.documentElement.clientHeight;
	var frame_obj = document.getElementsByClassName('display_panel')[0];
	frame_obj.style.width = (viewportWidth-180) + 'px';
	frame_obj.style.height = (viewportHeight-75-45) + 'px';
}

function onclick_list() {
	document.getElementsByName('display_panel')[0].contentDocument.location.reload(true);
	//document.getElementsByName('display_panel')[0].src = document.getElementsByName('display_panel')[0].src;
}