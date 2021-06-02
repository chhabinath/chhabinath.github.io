function validate()
{
	var username=document.getElementById('name').value;
	var password=document.getElementById('pswd').value;
	if(username=="admin"&&password=="12345")
	{
		window.open("welcome.html","_self");
	}
	else
	{
		alert("login FAILED");
	}
	
}
function signup()
{
	window.open("signup.html","_self");
}