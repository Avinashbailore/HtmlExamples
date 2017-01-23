var button=document.getElementById('button');
var svg=document.getElementById('barGraph'); // get the elemets into js
var rect = svg.getBoundingClientRect(); // get the boundaries of svg
var width=rect.width;
var height=rect.height;
var hspace=100;
var hspace1=100;
var svgNS = "http://www.w3.org/2000/svg";  // svg namespace

/*
*   this function handles the data using ajax call and pass the data to the required funtions
*/
var handler=function()
            {               
				 var obj = [
						 {
						   "year":"class1",
						   "value":56
						 },
						 {
							"year":"class2",
							"value":40
						 },
						 {
							 "year":"class3",
							 "value":35
						 },
						  {
							 "year":"class4",
							 "value":45
						 },
						  {
							 "year":"class5",
							 "value":56
						 },
						  {
							 "year":"class6",
							 "value":55
						 },
						
						  {
							 "year":"class7",
							 "value":48
						 },
						 {
							 "year":"class8",
							 "value":39
						 },
						 {
							 "year":"class9",
							 "value":45
						 },
						 {
							 "year":"class10",
							 "value":55
						 },
						 {
							 "year":"class11",
							 "value":60
						 }
						];
						 drawBarGraph(obj); 
            }

/*
* This function will draw x-axis and y-axis, it takes line end points as the parameters, 
* storke and stroke-width are set as default values,
* provide the parameter such a way that it will draw the x and y axis 
*/
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
function drawGrid(px1,py1,px2,py2){
    var line =  document.createElementNS(svgNS,'line');
    line.setAttribute('x1',px1);
    line.setAttribute('y1',py1);
    line.setAttribute('x2',px2);
    line.setAttribute('y2',py2);
    line.setAttribute('stroke','grey');
    line.setAttribute('stroke-width',1);
    svg.appendChild(line);
}

/*
* Labelling the x axis is done according to the value in the json file
* label parameter will be sent during the funtion call
*/
function labellingYAxis(label){
            var text;
            text=document.createElementNS(svgNS,"text"); //create text element
            text.setAttribute('y',800-hspace+15);  
            text.setAttribute('x',30);  
            text.setAttribute('fill','rgb(0,0,0)');
            text.setAttribute('font-size',20);
            text.setAttribute('font-style','bold');
            text.textContent=label; // here label text values are assingned which is a parameter
            svg.appendChild(text);
                     
}
function labellingElements(label){
            var text;
            text=document.createElementNS(svgNS,"text"); //create text element
            text.setAttribute('y',800-hspace+15);  
            text.setAttribute('x',130);  
            text.setAttribute('fill','#fff');
            text.setAttribute('font-size',20);
            text.setAttribute('font-style','bold');
            text.textContent=label; // here label text values are assingned which is a parameter
            svg.appendChild(text);
                     
}

function labellingXAxis(label){
    var text;
    text=document.createElementNS(svgNS,"text"); 
    text.setAttribute('y',780);
    text.setAttribute('x',hspace-5); // 460 value is taken as a rough value. (460 - label) produce dynamic values like 0, 100, 200, 300 ...
    text.setAttribute('fill','rgb(0,0,0)');
    text.setAttribute('font-size',20);
    text.setAttribute('font-style','bold');
    text.textContent=label;
    svg.appendChild(text);

}

function drawBarGraph(data)
{
    var i,rectangle,text,hspace1=100,hspace2=127;
    drawAxis(100,760,100,0); // calling x-axis function
    drawAxis(100,760,800,760); // calling y-axis funtion
	for(var j=0;j<=data.length;j++)
		{
			//drawGrid(hspace1+52,760,hspace1+52,0);
			drawGrid(hspace1+50,760,hspace1+50,0);
			//drawGrid(hspace2+52,760,hspace2+52,0);
			hspace1=hspace1+50;
			//hspace2=hspace+52;
		}
    width=10; // sets the widht value which increment hspace for every iteration
	

    for(i=0;i<=data.length;i++){
		 
		 
        rectangle=document.createElementNS(svgNS,"rect"); // create rectangle element
        labellingYAxis(data[i]['year']);
		//YAxisValue(data[i]["value"]*6);
		
        labellingXAxis(i*10+10); // calling y axis labeling function with dynamic values 
        rectangle.setAttribute('y',800-hspace);
        rectangle.setAttribute('x',100);
        rectangle.setAttribute('width',data[i]["value"]*5-50);
        rectangle.setAttribute('height',20);
        rectangle.setAttribute('fill','#3F5F85');
        rectangle.setAttribute('stroke-width',1);
        rectangle.setAttribute('stroke','rgb(0,0,0)');
        svg.appendChild(rectangle);
		labellingElements(data[i]['value']);
		hspace=hspace+width+40;
		
    }

button.removeEventListener("click",handler);

}
button.addEventListener("click",handler);