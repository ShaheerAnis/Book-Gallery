function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username=="username123" && password =="password123") {
        alert("Login Sucessfull");
        return false;
    } 
    else
    {
        window.location ="forgot.html";
        alert("Access Denied")
        return false;
       
    }
}
