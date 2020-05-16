window.document.getElementsByTagName("body")[0];

function signin()
{
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    fetch(`${env.REACT_APP_API_URL}/signin`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body:
            {
                "username": username,
                "password": password
            },
        mode: 'cors'})
        .then( (response) => {
            if (!response.ok) {
                alert("error signing in!");
                throw Error(response.statusText);
            }
            else
            {
                alert ("Signed in");
                window.location.href="https://emmagame.bss.design/dashboard.html";
                return response.json();
            }
        })
        .then( (res) => {
            localStorage.setItem('username', data.username);
            localStorage.setItem('token', res.token);
        })
        .catch( (e) => console.log(e) );
}

