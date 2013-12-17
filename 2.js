function onclick_list() {
	var title = document.getElementsByName("note")[0].value;
	var content = document.getElementsByName("note_content")[0].value;
	var error = document.getElementById("error");

	error.setAttribute('class' , 'hide');

	if ( title.length == 0 ) {
		error.setAttribute('class' , 'show');
	}
	else {

		var div_ele = document.getElementById("notes");
		div_ele.innerHTML = '<div class="note"><div class="title">'+title+'</div><div class="content">'+content +'</div>\
		<div class="time">'+getTimeHumanReadable()+'</div></div>' + div_ele.innerHTML ;

		document.getElementsByName("note")[0].value = "";
		document.getElementsByName("note_content")[0].value = "";
	}
}


function getTimeHumanReadable() {
	return new Date().toUTCString();
}