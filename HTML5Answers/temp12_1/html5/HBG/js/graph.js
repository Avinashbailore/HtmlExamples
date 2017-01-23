var out=document.getElementById('button');
var svg=document.getElementById('horizontalBarGraph'); //elemets into js
var bound = svg.getBoundingClientRect(); // boundaries of svg
var width=bound.width;
var height=bound.height;
var horizontalSpace=80;
var hspace1=80;
var svgNameSpace = "http://www.w3.org/2000/svg";


var output=function()
            {               
				 var object = [
						 {
						   "class":"class 10",
						   "avgMarks":56
						 },
						 {
							"class":"class 9",
							"avgMarks":40
						 },
						 {
							 "class":"class 8",
							 "avgMarks":35
						 },
						  {
							 "class":"class 7",
							 "avgMarks":45
						 },
						  {
							 "class":"class 6",
							 "avgMarks":56
						 },
						  {
							 "class":"class 5",
							 "avgMarks":55
						 },
						
						  {
							 "class":"class 4",
							 "avgMarks":48
						 },
						 {
							 "class":"class 3",
							 "avgMarks":39
						 },
						 {
							 "class":"class 2",
							 "avgMarks":45
						 },
						 {
							 "class":"class 1",
							 "avgMarks":55
						 }
						];
						 drawGraph(object); 
            }


function drawAxisLine(px1,py1,px2,py2){
    var line =  document.createElementNS(svgNameSpace,'line');
    line.setAttribute('x1',px1);
    line.setAttribute('y1',py1);
    line.setAttribute('x2',px2);
    line.setAttribute('y2',py2);
    line.setAttribute('stroke','rgb(0,0,0)');
    line.setAttribute('stroke-width',3);
    svg.appendChild(line);
}

function labellingYAxis(label){
            var text;
            text=document.createElementNS(svgNameSpace,"text"); //create text element
            text.setAttribute('y',800-horizontalSpace+20);  
            text.setAttribute('x',30);  
            text.setAttribute('fill','rgb(0,0,0)');
            text.setAttribute('font-size',20);
            text.setAttribute('font-style','bold');
            text.textContent=label; // here label text values are assingned which is a parameter
            svg.appendChild(text);
                     
}

function labellingXAxis(label){
    var text;
    text=document.createElementNS(svgNameSpace,"text"); 
    text.setAttribute('y',780);
    text.setAttribute('x',horizontalSpace); // 460 value is taken as a rough value. (460 - label) produce dynamic values like 0, 100, 200, 300 ...
    text.setAttribute('fill','rgb(0,0,0)');
    text.setAttribute('font-size',20);
    text.setAttribute('font-style','bold');
    text.textContent=label;
    svg.appendChild(text);

}

function drawGraph(data)
{
    var i,rectangle,text;
    drawAxisLine(100,760,100,0); // calling x-axis function
    drawAxisLine(100,760,800,760); // calling y-axis funtion
    width=10; // sets the widht value which increment horizontalSpace for every iteration


    for(i=0;i<data.length;i++){
		 
        rectangle=document.createElementNS(svgNameSpace,"rect"); // create rectangle element
        labellingYAxis(data[i]['class']);
		//YAxisValue(data[i]["avgMarks"]*6);
        labellingXAxis(i*10); // calling y axis labeling function with dynamic values 
        rectangle.setAttribute('y',800-horizontalSpace);
        rectangle.setAttribute('x',100);
        rectangle.setAttribute('width',data[i]["avgMarks"]*7);
        rectangle.setAttribute('height',22);
        rectangle.setAttribute('fill','#006699');
        rectangle.setAttribute('stroke-width',1);
        rectangle.setAttribute('stroke','rgb(0,0,0)');
        svg.appendChild(rectangle);
		horizontalSpace=horizontalSpace+width+40;

    }

out.removeEventListener("click",output);

}
out.addEventListener("click",output);