
		
		
		/*var listoftools=document.getElementById("dropdown");
		
		listoftools.addEventListener("change",simple,false);*/
		
		
		
		
		
function canvaspaint()
{
			var element;
			var canvas=document.getElementById("paint");
			var canvas1=document.getElementById("paint1");
			var art=canvas.getContext('2d');
			var art1=canvas1.getContext('2d');
			var mouse={x1:0,y1:0,x2:0,y2:0};
			var tool=function()
			{
				element=document.getElementById("listOfTools").value;
				console.log(element);
			}
			var onPaint=function(){
				var linewidth=document.getElementById("strokesize").value;
				var colorOfSroke=document.getElementById("colorOfSroke").value;
				var favcolor=document.getElementById("favcolor").value;
				if(element==="Line")
				{
				art.clearRect(0,0,canvas.width,canvas.height); 
				art.beginPath();
				art.lineWidth=linewidth;
				console.log(linewidth);
				art.strokeStyle=colorOfSroke;
				art.moveTo(mouse.x1,mouse.y1);
				art.lineTo(mouse.x2,mouse.y2);
				art.stroke();
				art.closePath();
				}
				else if(element==="Rectangle")
				{
				art.clearRect(0, 0, canvas.width, canvas.height); 
				art.beginPath();
				art.lineWidth=linewidth;
				art.fillStyle=favcolor;
				art.strokeStyle=colorOfSroke;
				art.rect(mouse.x1,mouse.y1,event.offsetX-mouse.x1,event.offsetY-mouse.y1);
				art.fill();
				art.stroke();
				art.closePath();
				}
				else if(element==="Circle")
				{
				art.clearRect(0, 0, canvas.width, canvas.height); 
				art.beginPath();
				art.lineWidth=linewidth;
				art.fillStyle=favcolor;
				art.strokeStyle=colorOfSroke;
				var radius=Math.abs(event.offsetX-mouse.x1)/2;
				art.arc(mouse.x1,mouse.y1,radius,0,2*Math.PI);
				art.stroke();
				art.fill();
				art.closePath();
				}
				else if(element==="Pencil")
				{
				art.lineWidth = linewidth;
				art.lineJoin = 'round';
				art.lineCap = 'round';
				art.strokeStyle=colorOfSroke;
				art.lineTo(mouse.x2,mouse.y2);
				art.stroke();
				}
				else
				{
				art1.clearRect(event.offsetX,event.offsetY, 50, 20); 
				art.clearRect(event.offsetX,event.offsetY, 50, 20); 
				}
				}
			art.lineWidth=2;
			function move(event){
					mouse.x2=event.pageX-this.offsetLeft;
					mouse.y2=event.pageY-this.offsetTop;
					onPaint();
				}
			  canvas.addEventListener('mousedown',function(event)
			  {
					art.beginPath();
					mouse.x1=event.pageX-this.offsetLeft;
					mouse.y1=event.pageY-this.offsetTop;
					canvas.addEventListener('mousemove',move,false);
			},false);
			canvas.addEventListener('mouseup',function(event){
				canvas.removeEventListener('mousemove',move,false);
				art1.drawImage(paint,0,0);
			},false);
			});
	