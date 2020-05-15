function validate()
{
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var logged = false;

    if (username == 123 && password == 123) {
        logged = true;
    }
    else
    {
        alert("user not found");
    }
}