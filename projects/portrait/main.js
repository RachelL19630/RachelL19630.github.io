	//set up the canvas
	const canvas = document.getElementById("canvas1");
	const ctx = canvas.getContext("2d");

	//setup the colors for fill and stroke
	ctx.fillStyle="blue";
	ctx.strokeStyle="#f5424e";
	ctx.lineWidth = 10;

	//Draw the background
	ctx.fillRect(300,500, 800, 800);

	//arc(x,y,radius,start,stop)
	ctx.fillStyle="lightblue";
	ctx.beginPath();
	ctx.lineTo(0,800);
	ctx.lineTo(200,550);
	//color it in
	ctx.fill();
	ctx.stroke();

	ctx.fillStyle="orange"
	ctx.beginPath();
	ctx.arc(0,800,300,0,-Math.PI/2);
	ctx.lineTo(500,300);
	ctx.arc(500,300,300,Math.PI/2,0);
	ctx.lineTo(0,800);
	ctx.fill();
	//neck
	ctx.fillStyle="green"
	ctx.fillRect(310,450,175,120);

	ctx.fillRect(300,300,100,100);
	//elipse
	ctx.beginPath();
	ctx.fillStyle="green"
	ctx.ellipse(
		400,250, //x,y of the center
		250, //radius along the x axis
		200, //radius along the y axis
		Math.PI/2, //rotation
		0, 2*Math.PI //start, stop
		)
	ctx.fill();
	//eye
	ctx.beginPath();
	ctx.fillStyle="white"
	ctx.ellipse(
	320,185,
	60,
	25,
	0,
	0,2*Math.PI
	)
ctx.fill();
	ctx.beginPath();
	ctx.fillStyle="white"
	ctx.ellipse(
	520,185,
	60,
	25,
	0,
	0,2*Math.PI
	)
ctx.fill();
	ctx.beginPath();
	ctx.fillStyle="black"
	ctx.arc(320,185,20,0,2*Math.PI);
	ctx.fill();

