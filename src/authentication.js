window.addEventListener('load', username_record);
function username_record()
{
    document.getElementById("user").innerHTML=localStorage.getItem('username');
}

function signin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({"username":username,"password":password});

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("https://emma-game-server.herokuapp.com/signin", requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result);
            if (result.success){
                alert("Signed in as " + result.username);
                document.getElementById("user").innerHTML=username;
                localStorage.setItem('username', result.username);
                localStorage.setItem('token', result.token);
                //console.log(localStorage.getItem("username"));
                //console.log(localStorage.getItem("token"));
                window.location = "https://emma-game.herokuapp.com/dashboard";
            }
            else{
                alert(result.message);
            }
        })
        .catch(error => console.log('error', error));
}

function signup() {
    var username = document.getElementById("username-sign").value;
    var password = document.getElementById("password-sign").value;

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({"username": username, "password": password});

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("https://emma-game-server.herokuapp.com/signup", requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result)
            if (result.success) {
                alert("Successfully signed up! Your username is " + result.username);
                document.getElementById("user").innerHTML=username;
                localStorage.setItem('username', result.username);
                localStorage.setItem('token', result.token);
                //console.log(localStorage.getItem("username"));
                //console.log(localStorage.getItem("token"));
                window.location = "https://emma-game.herokuapp.com/dashboard";
            } else {
                alert(result.message);
            }
        })
        .catch(error => console.log('error', error));
}