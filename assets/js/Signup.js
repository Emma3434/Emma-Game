function signup()
{
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    fetch(`${env.REACT_APP_API_URL}/signup`, {
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
                throw Error(response.statusText);
            }
            else
            {
                alert ("Signed up");
                return response.json();
            }
        })
        .catch( (e) => console.log(e) );
}