var button=document.getElementById('button');
var svg=document.getElementById('barGraph'); // get the elemets into js
var rect = svg.getBoundingClientRect(); // get the boundaries of svg
var SVGheight=rect.height;
var hspace=50;
var svgNS = "http://www.w3.org/2000/svg";  // svg namespace

/*
*   this function handles the data using ajax call and pass the data to the required funtions
*/
var handler=function()
            {               
				 var obj = [
						 {
						   'x':0,	
						   'y':3
						 },
						 {
						   'x':1,	
						   'y':6
						 },
						 {
						  'x':2,	
						   'y':2
						 },
						  {
						  'x':3,	
						   'y':7
						 },
						  {
						   'x':4,	
						   'y':5
						 },
						  {
						   'x':5,	
						   'y':2
						 },
						  {
						   'x':6,	
						   'y':1
						 },
						  {
						   'x':7,	
						   'y':3
						 },
						  {
						   'x':8,	
						   'y':8
						 },
						  {
						   'x':9,	
						   'y':9
						 },
						  {
						   'x':10,	
						   'y':2
						 },
						  {
						   'x':11,	
						   'y':5
						 },
						  {
						   'x':12,	
						   'y':6
						 }
						];
						 createLines(obj); 
            }

/*
* This function will draw x-axis and y-axis, it takes line end points as the parameters, 
* storke and stroke-width are set as default values,
* provide the parameter such a way that it will draw the x and y axis 
*/
function drawAxis(x1,y1,x2,y2){
    var line =  document.createElementNS(svgNS,'line');
    line.setAttribute('x1',x1);
    line.setAttribute('y1',y1);
    line.setAttribute('x2',x2);
    line.setAttribute('y2',y2);
    line.setAttribute('stroke','rgb(0,0,0)');
    line.setAttribute('stroke-width',1);
    svg.appendChild(line);
}

/*
* Labelling the x axis is done according to the value in the json file
* label parameter will be sent during the funtion call
*/
function createXAxisLabel(label){
            var text;
            text=document.createElementNS(svgNS,"text"); //create text element
            text.setAttribute('x',hspace);
			console.log(SVGheight);			
            text.setAttribute('y',SVGheight-10);  
            text.setAttribute('fill','black');
            text.setAttribute('font-size',23);
            //text.setAttribute('font-style','bold');
            text.textContent=label; // here label text values are assingned which is a parameter
            svg.appendChild(text);
                     
}

function createYAxisLabel(label){
    var text;
    text=document.createElementNS(svgNS,"text"); 
    text.setAttribute('x',10);
    text.setAttribute('y',460-(label*50)); // 460 value is taken as a rough value. (460 - label) produce dynamic values like 0, 100, 200, 300 ...
    text.setAttribute('fill','black');
    text.setAttribute('font-size',23);
    //text.setAttribute('font-style','bold');
    text.textContent=label;
    svg.appendChild(text);

}

function createLines(data)
{
    drawAxis(50,460,50,0); // calling x-axis function
    drawAxis(49,460,900,460); // calling y-axis funtion


    for(i=0;i<data.length;i++){
        graph=document.createElementNS(svgNS,"line"); // create rectangle element
        createXAxisLabel(i*2);
        createYAxisLabel(i*2); // calling y axis labeling function with dynamic values 
        graph.setAttribute('x1',((data[i].x)*50)+50);
		graph.setAttribute('y1',(450-(data[i].y)*50));
		graph.setAttribute('x2',((data[i+1].x)*50)+50);
		graph.setAttribute('y2',(450-(data[i+1].y)*50));
		graph.setAttribute('stroke', 'skyblue');
		graph.setAttribute('stroke-width', 2);
        svg.appendChild(graph);
		hspace=hspace+100;
	  // horizontal spacing is provided to the labels and the bars 
    }

button.removeEventListener("click",handler);

}
button.addEventListener("click",handler);