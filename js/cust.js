function checkEmail(form) {
	var email = form.email.value;
	var email_pattern = /[0-9a-z_]+@[0-9a-z_]+\.[a-z]{2,5}/i;
	var res = email_pattern.test(email);
	if (res)
		alert("good");
	else
		alert("bad");
}

function changeCollor(collor) {
	var elem = document.getElementById("jumbotron-cust");
	elem.style.backgroundColor = collor;
	var bt = document.getElementsByClassName('ts');
	for (var i = 0; i < bt.length; i++)
		bt[i].style.backgroundColor = collor;
}

function mouseEnter() {
	document.images["myImg"].src = '/img/html.png';
}

function mouseLeave() {
	document.images["myImg"].src = '/img/html5.0.jpg';
}

function myFunction() {
	var x = document.forms["frm1"];
	var text = "";
	var i;
	for (i = 0; i < x.length; i++) {
		text += x.elements[i].value + "<br>";
	}
	document.getElementById("demo").innerHTML = text;
}
var c = false;
function edit() {
	if(c)
	{
		alert("asddsa");
		return;
	}
	c = true;
	var parent = document.getElementById("Cap");
	var Div = document.getElementById('forInp');
	var inp = document.createElement('input');
	inp.id = "idd";
	Div.appendChild(inp);
	var NDiv = document.getElementById('forInp');
	var intp = document.createElement('button');
	NDiv.appendChild(intp);
	intp.onclick = asd;
}
function asd() {
	document.getElementsByClassName('text-my')[0].innerHTML = document.getElementById('idd').value;
	var parent = document.getElementById("Cap");
	var del = document.getElementById("forInp");
	parent.removeChild(del);
	c = false;
}