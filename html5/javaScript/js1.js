

	function mOver(obj)
	{	obj.style.fontSize="25px";
		obj.style.color="red";
		obj.innerHTML=" mouse over prop";
	}

	function mOut(obj)
	{
		obj.innerHTML=" mouse out prop";
		obj.backgroundColor="#ff2345";
	}

	function mUp(obj1)
	{	obj1.style.fontSize="25px";
		obj1.style.color="red";
		obj1.innerHTML=" ThankYou";
		obj1.style.backgroundColor = "#1ec5e5";
	}

	function mDown(obj1)
	{
		
		obj1.innerHTML=" Release me";
		obj1.style.color="#D94A38";

	}

	(	
		function(){document.getElementById("demo4").innerHTML="hello there";}
	)();

	

	for(var i=0;i<10;i++)
	{

	}

	document.getElementById("demo4").innerHTML=i;
	var d=typeof(form);
	document.getElementById("fromm").innerHTML=d;
    var strind="Hellooo";
    var arr=strind.split("");
    arr.reverse();
    var arr2=arr.join("");
    document.getElementById("demooo").innerHTML=arr2;
function sayhello()
	{
		alert("helloo hai");
	}
	var person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue",
    fullname:function(){return this.firstName;}
};
	document.getElementById("prs").innerHTML=person.fullname() ;
	var x=10+10+"xyz"+9+8+"xyz"+10+8;
	var y="xyz"+10+8;
	var z="" || "abc1";
//alert(z);
	var fruits,text,flen,i;
	fruits=["apple","banana","watermelon"];var points = [40, 100, 1, 5, 25, 10];
	document.getElementById("demo").innerHTML = fruits;
	document.getElementById("demoo").innerHTML = points;
	flen=fruits.length;
	text="<ul>"
	document.write(flen);
	for (var i = 0; i<flen; i++) {
		text+="<li>"+fruits[i]+"</li>";
	}
	text+="</ul>";

	document.write(text);

	for (var i = 0; i<flen; i++) {
		document.write(fruits[i]);
	}


	function myfunc()
	{
		fruits.push("lemon");
		document.getElementById("demo").innerHTML = fruits;
	}

	function myfunc1()
	{
		fruits[fruits.length]="lime";
		document.getElementById("demo").innerHTML = fruits;
	}

	function myfunc2()
	{
		fruits.toString();
		document.getElementById("demo").innerHTML = fruits;
	}

	function myfunc3()
	{	
		var fruits2=fruits.join(" + ");
		document.getElementById("demo").innerHTML = fruits2;
	}

	function myfunc4()
	{	document.getElementById("demo").innerHTML = fruits;
		fruits.shift();
		document.getElementById("demo").innerHTML = fruits;
	}

	function myfunc5()
	{	document.getElementById("demo").innerHTML = fruits;
		fruits.unshift("lemon");
		document.getElementById("demo").innerHTML = fruits;
	}

	function myfunc6()
	{	
		fruits.splice(2,0,"lemon","kiwi");
		document.getElementById("demo").innerHTML = fruits;
	}

	function myfunc7()
	{	
		fruits.sort();
		document.getElementById('demo').innerHTML=fruits;
	}

	function myfunc8()
	{	
		fruits.reverse();
		document.getElementById('demo').innerHTML=fruits;
	}

	function myfunc9()
	{	
		points.sort(function(a,b){return b-a});
		document.getElementById('demoo').innerHTML=points;
	}

	function myfunc10()
	{	
		points.sort(function(a,b){return a-b});
		document.getElementById('demoo').innerHTML=points;
	}

	function myfunc11()
	{
		var x=document.getElementById("txt").value;
	document.getElementById("demoo").innerHTML=x;
	}


	function myfunc15()
	{
		document.write("haiss");
	}

	function myfunc16()
	{
		document.getElementById("image").src="images/pie.jpg";
	}

	function myfunc17()
	{
		document.getElementById("change3").style.color="blue";
	}

	function myfunc18()
	{
		document.getElementById("hide").style.visibility="hidden";
	}

	function myfunc19()
	{
		document.getElementById("hide").style.visibility="visible";
	}

	function myfunc20()
	{
		document.getElementById("hide").style.color="red";
	}

	

	document.write(typeof(fruits));
	