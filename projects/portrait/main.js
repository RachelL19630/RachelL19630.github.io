	//set up the canvas
	const canvas = document.getElementById("canvas1");
	const ctx = canvas.getContext("2d");

	//setup the colors for fill and stroke
	ctx.fillStyle="blue";
	ctx.strokeStyle="#black";
	ctx.lineWidth = 10;

	//arc(x,y,radius,start,stop)
	ctx.fillStyle="blue";
	ctx.fillRect(50,600,700,400);
	ctx.fillRect(150,525,500,200);
	//color it in
	ctx.fill();
	ctx.stroke();

	//neck
	ctx.fillStyle="tan"
	ctx.fillRect(310,450,175,120);
	ctx.beginPath();
	ctx.lineTo(310,570);
	ctx.lineTo(400,700);
	ctx.lineTo(485,570);
	ctx.fill();
	//elipse
	ctx.beginPath();
	ctx.fillStyle="tan"
	ctx.ellipse(
		400,250, //x,y of the center
		250, //radius along the x axis
		200, //radius along the y axis
		Math.PI/2, //rotation
		0, 2*Math.PI //start, stop
		)
	ctx.fill();
	//hair
	ctx.fillStyle="#795548"
	ctx.beginPath();
	ctx.lineTo(200,150);
	ctx.lineTo(575,150);
	ctx.lineTo(600,700);
	ctx.lineTo(775,700);
	ctx.lineTo(700,300);
	ctx.lineTo(600,1);
	ctx.lineTo(200,1);
	ctx.lineTo(100,300);
	ctx.lineTo(50,700);
	ctx.lineTo(250,700);
	ctx.lineTo(250,100);
	ctx.fill();
	//eye
	ctx.beginPath();
	ctx.fillStyle="white"
	ctx.ellipse(
	320,255,
	60,
	25,
	0,
	0,2*Math.PI
	)
ctx.fill();
	ctx.beginPath();
	ctx.fillStyle="white"
	ctx.ellipse(
	510,255,
	60,
	25,
	0,
	0,2*Math.PI
	)
ctx.fill();
	ctx.beginPath();
	ctx.fillStyle="blue"
	ctx.arc(320,255,25,0,2*Math.PI);
	ctx.fill();
	ctx.beginPath();
	ctx.fillStyle="black"
	ctx.arc(320,255,15,0,2*Math.PI);
	ctx.fill();
ctx.beginPath();
ctx.fillStyle="blue"
ctx.arc(510,255,25,0,2*Math.PI);
ctx.fill();
ctx.beginPath();
	ctx.fillStyle="black"
	ctx.arc(510,255,15,0,2*Math.PI);
	ctx.fill();
