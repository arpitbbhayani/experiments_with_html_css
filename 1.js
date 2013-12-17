function load() {
	var context=document.getElementById("canvas_panel").getContext("2d");

	context.font="64px Arial";
	context.fillStyle="#FF0000";
	context.shadowColor = '#777';
    context.shadowBlur = 2;
    context.shadowOffsetX = 7;
    context.shadowOffsetY = 7;
    context.fillText("HTML 5" , 200 , 200);

	context.font="italic 32px monospace";
	context.fillStyle="#000000";
	context.shadowColor = '#000';
    context.shadowBlur = 0;
    context.shadowOffsetX = 0;
    context.shadowOffsetY = 0;
    context.fillText("This is in italic" , 120 , 300);

	context.font="bold 32px monospace";
	context.fillStyle="#000000";
	context.shadowColor = '#000';
    context.shadowBlur = 0;
    context.shadowOffsetX = 0;
    context.shadowOffsetY = 0;
    context.fillText("This is in italic" , 120 , 350);

    context.font="bold italic 32px monospace";
	context.fillStyle="#000000";
	context.shadowColor = '#000';
    context.shadowBlur = 0;
    context.shadowOffsetX = 0;
    context.shadowOffsetY = 0;
    context.fillText("This is in bold and italic" , 120 , 400);

    context.font="bold italic 32px monospace";
	context.fillStyle="green";
	context.shadowColor = '#000';
    context.shadowBlur = 0;
    context.shadowOffsetX = 0;
    context.shadowOffsetY = 0;
    context.fillText("This is in green" , 120 , 450);

    context.font="bold italic 32px monospace";
	context.fillStyle="purple";
	context.shadowColor = '#000';
    context.shadowBlur = 0;
    context.shadowOffsetX = 0;
    context.shadowOffsetY = 0;
    context.fillText("This is in purple" , 120 , 500);

    context.font="24px arial";
	context.fillStyle="yellow";
	context.shadowColor = '#000';
    context.shadowBlur = 0;
    context.shadowOffsetX = 0;
    context.shadowOffsetY = 0;
    context.fillText("Canvas" , 650 , 580);


    context.rotate(-20*Math.PI /180);


	context.fillStyle = "rgba(0,255,255,1)";;
	context.fillRect(45,96,165,45);
	context.lineWidth="3";
	context.strokeStyle = "black";
	context.strokeRect(45,96,165,45);

	context.fillStyle = "black";
	context.font = "15px Arial";
	context.fillText("Scripting and computing", 50, 115);
	context.fillText("environments", 50, 135);

	context.rotate(20*Math.PI /180);

	context.beginPath();
	context.lineWidth="0.8";

	context.stroke();


    context.rect(75,75,700,510);
    context.stroke();

}