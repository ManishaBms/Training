function check(){
    var un=document.getElementById("uname").innerHTML;
    var ps=document.getElementById("pass").innerHTML;
    // document.write(un);
    if((un=="manisha") && (ps=="123")){
        //alert("Login successful");
        window.open("welcome.html");
    }else{
        //alert("Enter correct username and password");
        window.open("login.html");
    }
}

