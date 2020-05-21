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
                //token = JSON.stringify(result.token);
                //username = JSON.stringify(result.username);
                //localStorage.setItem("token", JSON.stringify(result.token));
                //console.log(localStorage.getItem("token"));
                //console.log(token);
                window.location = "https://emma-game.herokuapp.com/dashboard";
                //console.log(process.env);
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
                alert("Successfully signed up! Your username is: " + username);
                document.getElementById("user").textContent = username;
                //token = JSON.stringify(result.token);
                username = JSON.stringify(result.username);
                localStorage.setItem('username', result.username);
                console.log(localStorage.getItem("username"));
                //localStorage.setItem('token', result.token);
                window.location = "https://emma-game.herokuapp.com/dashboard";
            } else {
                alert(result.message);
            }
        })
        .catch(error => console.log('error', error));
}