function signup()
{	var e=document.getElementById('mail').value;
	var u=document.getElementById('name').value;
	var p=document.getElementById('pswd').value;
	var r=document.getElementById('rp').value;
	if(e.indexOf('@')<=0)
		{
		alert("invalid email");
		return false;
		}

		if((e.charAt(e.length-4)!='.'))
		{
		alert("invalid . postion");
		return false;
		}
		if(u=="")
			{
				alert("please enter the Username");
				return false;
			}
		if(p=="")
			{
				alert("please enter the PASSWORD");
				return false;
			}
		if(p!=r)
			{
				alert("PASSWORD DOES NOT MATCH");
				return false;
			}	
		else
		{
		alert("sign up successful");
		window.open("index.html","_self");
		}
}
