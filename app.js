function check(){

    var username= document.getElementById("user").Value;
    var password= document.getElementById("pass").Value;
    if(username=="admin"&& password=="1234")
    {
        alert("login success");
    }
    else{
        alert("login unsuccess");
    }
}
