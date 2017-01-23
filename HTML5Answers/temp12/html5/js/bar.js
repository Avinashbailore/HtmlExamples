var click=document.getElementById('click');
var svg=document.getElementById('graph'); // Retreiving SVG
var rect = svg.getBoundingClientRect(); // Dimensions of svg
var width=rect.width;
var height=rect.height;
var hspace=90;
//var hspace1=90;
var svgNS = "http://www.w3.org/2000/svg";  // svg namespace

var event=function()        //JSON object initialisation
            {               
				 var element = [
						 {
						   "class":"class1",
						   "value":56          
						 },
						 {
							"class":"class2",
							"value":40
						 },
						 {
							 "class":"class3",
							 "value":35
						 },
						  {
							 "class":"class4",
							 "value":45
						 },
						  {
							 "class":"class5",
							 "value":56
						 },
						  {
							 "class":"class6",
							 "value":90
						 },
						
						  {
							"class":"class7",
							 "value":48
						 },
						 {
							 "class":"class8",
							 "value":39
						 },
						 {
							 "class":"class9",
							 "value":90
						 },
						 {
							 "class":"class10",
							 "value":55
						 },
						];
						 barGraph(element); 
            }

function axis(px1,py1,px2,py2){					/* Drawing Axis   */
    var line =  document.createElementNS(svgNS,'line');
    line.setAttribute('x1',px1);
    line.setAttribute('y1',py1);
    line.setAttribute('x2',px2);
    line.setAttribute('y2',py2);
    line.setAttribute('stroke','lightgrey');
    line.setAttribute('stroke-width',2);
    svg.appendChild(line);
}
												
function namingYAxis(label){					/* Assigning Values to y-axis  */
            var num;
            num=document.createElementNS(svgNS,"text"); 
            num.setAttribute('y',680-hspace+20);  
            num.setAttribute('x',40);  
            num.setAttribute('fill','black');
            num.setAttribute('font-size',25);
            num.setAttribute('font-style','bold');
            num.textContent=label; 
            svg.appendChild(num);
                     
}

function namingXAxis(label){					/*Assigning values to y-axis */
    var value;
    value=document.createElementNS(svgNS,"text"); 
    value.setAttribute('y',685);
    value.setAttribute('x',hspace+22); 
    value.setAttribute('fill','black');
    value.setAttribute('font-size',25);
    value.setAttribute('font-style','bold');
    value.textContent=label;
    svg.appendChild(value);

}
function namingBar(label)                           
{
	 var t;
	 t=document.createElementNS(svgNS,"text");
	 t.setAttribute('y',(700-(hspace-40)));
	 t.setAttribute('x',hspace+22);
	 t.setAttribute('fill','white');
	 t.setAttribute('font-style','bold');
     t.textContent=label;
	 svg.appendChild(t);
	 
}
function barGraph(data)							 /* Drawing Graph */
{
    var i,bar,text;
    axis(120,660,120,0); 
    axis(120,660,660,660); 
    width=10;
		for(var j=1;j<data.length+3;j++)
	{
		axis(120+(j*40),660,120+(j*40),20);
		
	}
    for(i=0;i<data.length;i++){
		
        bar=document.createElementNS(svgNS,"rect");  // create rectangle element
        namingYAxis(data[i]['class']);
		namingXAxis(i*10); 
        bar.setAttribute('y',675-hspace);
        bar.setAttribute('x',120);
        bar.setAttribute('width',data[i]["value"]*4);
        bar.setAttribute('height',25);
        bar.setAttribute('fill','#435D89');
        svg.appendChild(bar);
		hspace=hspace+width+40;
    }
	click.removeEventListener("click",event);
	}
click.addEventListener("click",event);
