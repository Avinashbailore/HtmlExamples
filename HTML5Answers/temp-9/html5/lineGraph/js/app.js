var button=document.getElementById('button');
var svg=document.getElementById('lineGraph'); // get the elements into js
var rect = svg.getBoundingClientRect(); // get the boundaries of svg
var width=rect.width;
var height=rect.height;
var hspace=60;
var svgNS = "http://www.w3.org/2000/svg";  // svg namespace


var handler=function()
            {               
				 var obj = [
						 {
						   "year":2,
						   
						   "x1":50,
						   "y1":17,
						   "x2":53,
						   "y2":112
						 },
						 {
							"year":4,
							
							"x1":53,
						    "y1":112,
						    "x2":101,
						    "y2":17
						 },
						 {
							 "year":6,
							"x2":100,
						    "y2":200,
						    "x1":50,
						    "y1":300,
						 },
						  {
							 "year":8,
							 "x2":150,
						    "y2":400,
						    "x1":100,
						    "y1":200,
						 },
						  {
							 "year":10,
							 "x2":132,
						    "y2":180,
						    "x1":208,
						    "y1":200
						 },
						  {
							 "year":12,
							 "x2":132,
						    "y2":180,
						    "x1":208,
						    "y1":200
						 }
						];
						 drawlineGraph(obj); 
            }


function drawAxis(px1,py1,px2,py2){
    var line =  document.createElementNS(svgNS,'line');
    line.setAttribute('x1',px1);
    line.setAttribute('y1',py1);
    line.setAttribute('x2',px2);
    line.setAttribute('y2',py2);
    line.setAttribute('stroke','rgb(0,0,0)');
    line.setAttribute('stroke-width',3);
    svg.appendChild(line);
}


function labellingXAxis(label){
            var text;
            text=document.createElementNS(svgNS,"text"); //create text element
            text.setAttribute('x',hspace);  
            text.setAttribute('y',height-10);  
            text.setAttribute('fill','green');
            text.setAttribute('font-size',23);
            text.setAttribute('font-style','bold');
            text.textContent=label; 
            svg.appendChild(text);
                     
}

function labellingYAxis(label){
    var text;
    text=document.createElementNS(svgNS,"text"); 
    text.setAttribute('x',10);
    text.setAttribute('y',460-label); 
    text.setAttribute('fill','green');
    text.setAttribute('font-size',23);
    text.setAttribute('font-style','bold');
    text.textContent=label;
    svg.appendChild(text);

}

function drawlineGraph(data)
{
    var i,line,text;
    drawAxis(50,460,50,0); // calling x-axis function
    drawAxis(49,460,500,460); // calling y-axis funtion
    width=50;


    for(i=0;i<data.length;i++){
		var x1= data[i]['x1']; 
		var y1= data[i]['y1'];
		
		var x2= data[i] ['x2'];
		var y2= data[i]['y2'];
		
		
		
        line=document.createElementNS(svgNS,"line"); // create line element
        labellingXAxis(data[i]['year']);
        labellingYAxis(i*100); 
        line.setAttribute('x1',x1);
        line.setAttribute('y1',y1);
        line.setAttribute('x2',x2);
        line.setAttribute('y2',y2);
        line.setAttribute('stroke-width',4);
        line.setAttribute('stroke','#033BFF');
        svg.appendChild(line);
        hspace=hspace+width+10;
		
    }

button.removeEventListener("click",handler);

}
button.addEventListener("click",handler);