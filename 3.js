var image = new Image();
var canvas_obj = null;
var context = null;

var source = "";
var images_ = new Array();
var index_ = new Array();

function body_on_load () {
	var date_obj = document.getElementById('date_select');
	var month_obj = document.getElementById('month_select');
	var year_obj = document.getElementById('year_select');
	date_select_on_load(date_obj , 1 , 31);
	month_select_on_load(month_obj , 1 , 12);
	year_select_on_load(year_obj , 1900 , 2013);
	//init_canvas();
	init_data();
}

function prev_call() {
	var sport_type = document.getElementById('sport_select').value;
	prev_image( sport_type );
	display_image();
	//slide_in(0,0);
}

function next_call() {

	var sport_type = document.getElementById('sport_select').value;
	next_image( sport_type );
	display_image();
	//slide_out(0,0);
}

function display_image () {
	document.getElementById("prev_button").innerHTML = "&lt;";
	document.getElementById("next_button").innerHTML = "&gt;";
		
	var image_slider = document.getElementById("slider");
	image_slider.setAttribute('class' , 'view');
	image_slider.innerHTML = '<img src="' + source + '" />';

	document.getElementById("shadow").setAttribute('class' , 'view');
}


function draw_image () {

	context.save();
    context.clearRect(0, 0, 800, 400);
	context.drawImage(image , 0 , 0 , 800 , 400);

    context.restore();

}

function slide_in(x,y) {

	context.save();
    context.clearRect(0, 0, 800, 400);
	context.drawImage(image , x-800 , 0 , 100 , 100);

    x+=1;
    if ( x == 800 )
    	return;
    var loopTimer = setTimeout('slide_in('+x+','+y+')', 1);
    context.restore();

}

function slide_out(x,y) {

	context.save();
    context.clearRect(0, 0, 800, 400);
	context.drawImage(image , x , 0 , 100 , 100);

    x+=1;

    if ( x == 800 )
    	return 0;
    var loopTimer = setTimeout('slide_out('+x+','+y+')', 1);
    context.restore();

}

function init_data() {

	for ( i = 0; i < 3; i++ ) {
			images_[i] = new Array();
	}

	images_[0][0] = 'images/Wankhede.jpg';
	images_[0][1] = 'images/FerozShahKotla.jpg';
	images_[0][2] = 'images/Edengardens.jpg';
	images_[1][0] = 'images/OldTrafford.jpg';
	images_[1][1] = 'images/SanSiro.jpg';
	images_[1][2] = 'images/CampNou.jpg';
	images_[2][0] = 'images/ArthurAshe.jpg';
	images_[2][1] = 'images/RodLaverArena.jpg';
	images_[2][2] = 'images/perthArena.jpg';
	
	index_[0] = 0;
	index_[1] = 0;
	index_[2] = 0;



}

function init_canvas() {
	canvas_obj = document.getElementById('canvas_slider');
    context = canvas_obj.getContext('2d');
}


function change_image_src ( new_src ) {
	//image.src = new_src;
	//console.log('Next Image -> ' + image.src);
}

function next_image ( type ) {
	
	var type_int = 0;
	
	if ( type == "Cricket" ) {
		type_int = 0
	}
	else if ( type == "Football" ) {
		type_int = 1;
	}
	else if ( type == "Tennis" ) {
		type_int = 2;
	}
	else {
		source = 'default.png';
		return ;
	}
	
	index_[type_int] = (index_[type_int] + 1) % 3;
	source = images_[type_int][index_[type_int]];
}

function prev_image ( type ) {

	var type_int = 0;
	if ( type == "Cricket" ) {
		type_int = 0
	}
	else if ( type == "Football" ) {
		type_int = 1;
	}
	else if ( type == "Tennis" ) {
		type_int = 2;
	}
	else {
		source = 'default.png';
		return ;
	}

	if ( index_[type_int] == 0 ) {
		index_[type_int] = 2;
	}
	else {
		index_[type_int] = index_[type_int] - 1;
	}
	source = images_[type_int][index_[type_int]];
	//change_image_src (images_[type_int][index_[type_int]]);
}

function onclick_list() {

	var name = document.getElementById('name');
	var date = document.getElementById('date_select');
	var month = document.getElementById('month_select');
	var year = document.getElementById('year_select');
	var pass = document.getElementById('pass');
	var pass_c = document.getElementById('pass_c');

	var n = validate_name ( name );
	var p = validate_pass ( pass , pass_c );
	var d = validate_dob ( date , month , year );

	if ( n == 1 && p == 1 && d == 1 ) {
		alert("Your form has been submitted!!");
		window.location.reload(true);
	}

}

function change_sport( value ) {

	var sport_obj = document.getElementById('sport_select');
	var stadium_obj = document.getElementById('stadium_select');

	if ( value == "Select" ) {
		stadium_obj.innerHTML = "<option>Select</option>";
		var image_slider = document.getElementById("slider");
		image_slider.setAttribute('class' , 'hide');
		image_slider.innerHTML = "";
		document.getElementById("prev_button").innerHTML = "";
		document.getElementById("next_button").innerHTML = "";
		var shadow = document.getElementById("shadow");
		shadow.setAttribute('class' , 'hide');
		return;
	}
	else if ( value == "Cricket" ) {
		stadium_obj.innerHTML = "<option value='images/Wankhede.jpg'>Wankhede</option><option value='images/FerozShahKotla.jpg'>Feroz Shah kotla</option><option value='images/Edengardens.jpg'>Eden Gardern</option>";
		index_[0] = 0;
		source = images_[0][0];
	}
	else if ( value == "Football" ) {
		stadium_obj.innerHTML = "<option value='images/OldTrafford.jpg'>Old Trafford</option><option value='images/SanSiro.jpg'>San Siro</option><option value='images/CampNou.jpg'>Camp Nou</option>";
		index_[1] = 0;
		source = images_[1][0];
	}
	else if ( value == "Tennis" ) {
		stadium_obj.innerHTML = "<option value='images/ArthurAshe.jpg'>Arthur Stadium</option><option value='images/RodLaverArena.jpg'>Rod Laver Arena</option><option value='images/perthArena.jpg'>Perth Arena</option>";
		index_[2] = 0;
		source = images_[2][0];
	}

	display_image();

}

function validate_dob ( date_obj , month_obj , year_obj ) {
	var dob_err_obj = document.getElementById('dob_err');

	dob_err_obj.innerHTML = "";
	if ( date_obj.value == "Date" || month_obj.value == "Month" || year_obj.value == "Year" ) {
		dob_err_obj.innerHTML = '<div class="error">Date of birth - Cannot be blank</div>';
		return 0;
	}
	else {
		dob_err_obj.innerHTML = '<div class="ok">Date of birth - OK</div>';
		return 1;
	}
}

function validate_name ( name_obj ) {
	
	var name_err_obj = document.getElementById('name_err');

	name_err_obj.innerHTML = "";
	if ( name_obj.value.length == 0 ) {
		name_err_obj.innerHTML = '<div class="error">Name - Cannot be blank</div>';
		return 0;
	}
	return 1;
}

function validate_pass ( pass_obj , pass_c_obj ) {
	
	var pass_err_obj = document.getElementById('pass_err');
	var pass_c_err_obj = document.getElementById('pass_c_err');

	var pass = pass_obj.value;

	pass_c_err_obj.innerHTML = "";
	pass_err_obj.innerHTML = "";

	if ( pass.length < 8 || pass.match("[0-9]") == null || pass.match("[-$+*=&%#@!]") == null ) {
		pass_obj.setAttribute('class' , 'error');
		pass_err_obj.innerHTML = '<div class="error">Password is weak</div>';
		return 0;
	}
	else {
		pass_obj.setAttribute('class' , 'ok');
		pass_err_obj.innerHTML = '<div class="ok">Password is strong</div>';
		if ( pass_obj.value != pass_c_obj.value ) {
			pass_c_err_obj.innerHTML = '<div class="error">Passwords do not match</div>';
			return 0;
		}
		else {
			pass_c_err_obj.innerHTML = '<div class="ok">Passwords match</div>';
			return 1;
		}
	}

	
}

function change_month (value) {
	var date_obj = document.getElementById('date_select');
	var month_obj = document.getElementById('month_select');
	var year_obj = document.getElementById('year_select');
	var selectedDate = date_obj.value;
	var lastDate = "";

	if ( value == 2 ) {
		if ( year_obj.value == "Year" ) {
			lastDate = 29;
		}
		else {
			if ( (year_obj.value % 4 == 0 && year_obj.value % 100 == 0) && year_obj.value % 400 == 0 ) {
				lastDate = 29;
			}
			else if (year_obj.value % 4 == 0 && year_obj.value % 100 != 0 ) {
				lastDate = 29;
			}
			else {
				lastDate = 28;
			}
		}

		date_select_on_load(date_obj , 1 , lastDate);

		if ( selectedDate != "Date" && selectedDate <= lastDate ) {
			date_obj.value = selectedDate;
		}
		else if ( selectedDate != "Date" ) {
			date_obj.value = lastDate;
		}
	}
	else if ( value == 1 || value == 3 || value == 5 || value == 7 || value == 8 || value == 10 || value == 12 ) {
		lastDate = 31;
		date_select_on_load(date_obj , 1 , lastDate);
		if ( selectedDate != "Date" && selectedDate > lastDate ) {
			date_obj.value = lastDate;
		}
		else {
			date_obj.value = selectedDate;
		}

	}
	else {
		lastDate = 30;
		date_select_on_load(date_obj , 1 , lastDate);
		if ( selectedDate != "Date" && selectedDate > lastDate ) {
			date_obj.value = lastDate;
		}
		else {
			date_obj.value = selectedDate;
		}
	}
}

function change_year (value) {
	var date_obj = document.getElementById('date_select');
	var month_obj = document.getElementById('month_select');
	var year_obj = document.getElementById('year_select');
	var selectedDate = date_obj.value;
	var lastDate = "";

	if ( (year_obj.value % 4 == 0 && year_obj.value % 100 == 0) && year_obj.value % 400 == 0 ) {
		lastDate = 29;
	}
	else if (year_obj.value % 4 == 0 && year_obj.value % 100 != 0 ) {
		lastDate = 29;
	}
	else {
		lastDate = 28;
	}

	if ( month_obj.value == 2 ) {
		date_select_on_load(date_obj , 1 , lastDate);

		if ( selectedDate != "Date" && selectedDate <= lastDate ) {
			date_obj.value = selectedDate;
		}
		else if ( selectedDate != "Date" ) {
			date_obj.value = lastDate;
		}
	}

}

function date_select_on_load( date_obj , start , end ) {
	date_obj.innerHTML = "<option>Date</option>"
	for ( i = start ; i <= end ; i++ ) {
		date_obj.innerHTML = date_obj.innerHTML + "<option>"+i+"</option>"
	}
}

function month_select_on_load( month_obj , start , end ) {
	month_obj.innerHTML = "<option>Month</option>";
	for ( i = start ; i <= end ; i++ ) {
		month_obj.innerHTML = month_obj.innerHTML + "<option>"+i+"</option>"
	}
}

function year_select_on_load( year_obj , start , end ) {
	year_obj.innerHTML = "<option>Year</option>";
	for ( i = end ; i >= start ; i-- ) {
		year_obj.innerHTML = year_obj.innerHTML + "<option>"+i+"</option>"
	}
}

